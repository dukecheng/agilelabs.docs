#  RabbitMQ服务注册

## Connection Setting
```csharp
public class LogConnectionSetting : ConnectionSetting { }

//Log Connection Setting
services.AddSingleton(serviceProvider =>
{
    var environment = serviceProvider.GetRequiredService<IHostEnvironment>();
    var settings = new LogConnectionSetting();
    settings.LoadFromConnectionString(configuration.GetSection("MessageQueueSettings:DefaultMqHost").Value);
    settings.AppId = environment.ApplicationName;
    settings.Exchange = "ex_log";
    settings.Compression = CompressionTypes.None;
    return settings;
});
```

## ConnectionManager
```csharp
    public class LogMqConnectionManager : RabbitConnectionManager<LogConnectionSetting>
    {
        public LogMqConnectionManager(LogConnectionSetting connectionSetting, ILogger<LogMqConnectionManager> logger, IHostApplicationLifetime hostApplicationLifetime)
            : base($"Log-{Environment.MachineName}", connectionSetting, logger, hostApplicationLifetime)
        {
        }
    }
```

## Public Pool
```bash
    public class LogMessagePublishPool : PublishPool<LogConnectionSetting, LogMqConnectionManager>
    {
        public LogMessagePublishPool(string clientName,
            LogConnectionSetting connectionSetting,
            LogMqConnectionManager logMqConnectionManager,
            ILogger<LogMessagePublishPool> logger,
            IHostApplicationLifetime applicationLifetime)
            : base(clientName, connectionSetting, logMqConnectionManager, logger, applicationLifetime)
        {
        }
    }
```

## Consumer
```csharp
    public class LogSyncToDbConsumer : AgileLabsMessageConsumer<LogConnectionSetting, LogMqConnectionManager>
    {
        public override string QueueName => $"scm_log";

        public override List<string> BindRoutingKeyPattern => new List<string> { $"scm.log.#" };

        public LogSyncToDbConsumer(LogConnectionSetting defaultMessageConnectionSetting,
            ILogger<LogSyncToDbConsumer> logger, LogMqConnectionManager logMqConnectionManager,
            IHostApplicationLifetime hostApplicationLifetime, IServiceProvider serviceProvider)
            : base(defaultMessageConnectionSetting, logMqConnectionManager, logger, hostApplicationLifetime, serviceProvider)
        {

        }

        protected override async Task ConsumerAsync(BasicDeliverEventArgs e, string bodyMessage, IWorkContextCore workContext)
        {
            // [brand].[subSystem].[messageType{event|command}]
            var keies = e.RoutingKey.Split('.');
            //var routingKeyPrefix = string.Join(".", e.RoutingKey.Split('.').Take(3));
            //var commandTypeKey = e.RoutingKey.Substring(routingKeyPrefix.Length + 1);
            var logType = keies[2];

            if (!(JsonConvert.DeserializeObject(bodyMessage, typeof(ScmLogEvent)) is ScmLogEvent command))
            {
                throw new ApiException("", $"ScmLogEvent实体反序列化失败");
            }

            switch (logType)
            {
                case "log_info":
                    command.LogType = "log_info";
                    command.MessageObject = JsonConvert.DeserializeObject<LogEntity>(command.MessageObject.ToString());
                    break;
                case "log_request":
                    command.LogType = "log_request";
                    command.MessageObject = JsonConvert.DeserializeObject<LogRequest>(command.MessageObject.ToString());
                    break;
                case "log_business":
                    command.LogType = "log_business";
                    command.MessageObject = JsonConvert.DeserializeObject<LogBusiness>(command.MessageObject.ToString());
                    break;
                default:
                    break;
            }
            InsertDatabase([command]);
        }                
    }    
```