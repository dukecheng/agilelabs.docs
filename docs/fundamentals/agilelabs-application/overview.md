# 设计概要
负责程序宿主

```csharp
await AgileLabApplication.StartApplicationAsync<DefaultMvcApplicationOptions>(options =>
{
    options.UseSerilogProvider = true;
    options.BootstrapLoggerConfiguration = logger => { };
});
```