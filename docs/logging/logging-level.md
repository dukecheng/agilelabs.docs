# 调整日志输出

**appsettings.json**
```json
{
  "Serilog": {
    "MinimumLevel": {
      "Default": "Warning",
      "Override": {
        "Microsoft.Hosting.Lifetime": "Information",
        "Microsoft.Extensions.Diagnostics.HealthChecks": "Error"
      }
    }
  },
  "AllowedHosts": "*"
}

```

**appsettings.Development.json**
```json
{
  "Serilog": {
    "MinimumLevel": {
      "Default": "Information",
      "Override": {
        "Microsoft.Hosting.Lifetime": "Information",
        "Microsoft": "Warning",
        "System": "Warning",
        "Microsoft.Extensions.Diagnostics.HealthChecks": "Error"
      }
    }
  }
}

```