---
sidebar_position: 1
title: 创建MvcWeb应用
---

# Mvc App

[示例代码](https://git.feinian.net/agilelabs.framework/agilelabs.samples/src/branch/main/mvcweb)

## 创建应用
`dotnet new mvc`

## 添加AgileLabs包
`dotnet add package AgileLabs.WebApp -s https://nuget.feinian.net/v3/index.json`

## 项目文件修改
**Program.cs**
```csharp
using AgileLabs.WebApp;
using AgileLabs.WebApp.Hosting;

await AgileLabApplication.StartApplicationAsync<DefaultMvcApplicationOptions>(options =>
{
    options.MvcBuilderCreateFunc = (services, mvcOptions) => services.AddControllersWithViews(mvcOptions);
});
```

**调整日志输出**
[调整日志输出](../../logging/logging-level.md)

## 运行输出
```bash
[10:37:30.938 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] AppBootstraper 👉Activity Stage Started👉 => Application Booting...
[10:37:30.975 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] AppBootstraper bootlot output dir: D:\gitrepos\agilelabs.sample\mvcweb\app_data\bootlog
[10:37:30.975 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] AppBootstraper Start Application, TraceId: abc2a72c9c66ba2e9615872996cd637b-2e8274b5540a8ee6
[10:37:30.975 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] AppBootstraper Starting host...
[10:37:30.977 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] AppBootstraper Start CreateHost by AgileLabs.WebApp.DefaultMvcApplicationOptions
[10:37:30.985 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper 👉Activity Stage Started👉 => CreateHost
[10:37:30.986 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Singleton<AgileLabs.WebApp.Hosting.AppBuildOptions> Setted
[10:37:30.987 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Singleton<AgileLabs.WebApp.DefaultMvcApplicationOptions> Setted
[10:37:30.987 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Start create AppBuildContext
[10:37:30.987 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Singleton<AgileLabs.WebApp.Hosting.AppBuildContext> Setted
[10:37:31.103 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper ApplicationName:mvcweb
[10:37:31.104 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper EnvironmentName:Development
[10:37:31.104 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper ContentRootPath:D:\gitrepos\agilelabs.sample\mvcweb
[10:37:31.104 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper WebRootPath:D:\gitrepos\agilelabs.sample\mvcweb\wwwroot
[10:37:31.104 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Invoke Custom WebApplicationBuilder Logic
[10:37:31.104 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Custom WebApplicationBuilder invoke completed
[10:37:31.105 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Singleton<Microsoft.Extensions.Hosting.IHostEnvironment> Setted
[10:37:31.105 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Singleton<Microsoft.AspNetCore.Hosting.IWebHostEnvironment> Setted
[10:37:31.107 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Singleton<AgileLabs.IAgileLabContext> Setted
[10:37:31.108 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Singleton<AgileLabs.TypeFinders.ITypeFinder> Setted
[10:37:31.108 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper AppBuildContext was created
[10:37:31.108 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Use Autofac Container
[10:37:31.109 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Invoke Custom HostBuilder Logic
[10:37:31.110 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Custom HostBuilder Logic invoke completed
[10:37:31.111 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper AppBuildContext inited, IConfiguration is ready
[10:37:31.111 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper 👉Activity Stage Started👉 => ConfigureServices
[10:37:31.113 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper Invoke Custom ConfigureServices Logic
[10:37:31.226 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper Custom ConfigureServices Logic invoke completed
[10:37:31.226 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper ConfigureService for Auto Discovered Service
[10:37:31.283 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper [AutoConfigureServices 01=#[999]]: AgileLabs.AutoMappers.AutoMapperRegister
[10:37:31.307 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper [AutoConfigureServices 02=#[999]]: AgileLabs.HttpClients.HttpClientServiceRegister
[10:37:31.310 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper [AutoConfigureServices 03=#[999]]: AgileLabs.ModelValidators.ModelValidatorRegister
[10:37:31.341 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper [AutoConfigureServices 04=#[999]]: AgileLabs.Sessions.RequestSessionRegister
[10:37:31.341 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper [AutoConfigureServices 05=#[999]]: AgileLabs.WorkContexts.WorkContextCoreServiceRegister
[10:37:31.342 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper Auto Discovered Service configure completed
[10:37:31.343 abc2a72c9c66ba2e9615872996cd637b 656bfbc768e72e80[] Information] AppBootstraper 👌Activity Stage Stoped👌 => ConfigureServices
[10:37:31.361 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Configure AdvancedServiceRegister
[10:37:31.382 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper Configure AdvancedServiceRegister completed
[10:37:31.593 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper 👉Activity Stage Started👉 => ConfigureWebApplication
[10:37:31.605 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper Invoke CallStartupInitService
[10:37:31.605 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper CallStartupInitService invoke completed
[10:37:31.607 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper Invoke ConfigureRequestPipeline
[10:37:31.632 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper Start find all RequestPiplineRegister types
[10:37:31.635 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper RequestPiplineRegister type and instance is ready, start assembly by its register order
[10:37:31.640 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper [ASPNETCORE-STAGE]=>UseRouting
[10:37:31.641 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper [ASPNETCORE-STAGE]=>UseEndpoints
[10:37:31.758 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper ConfigureRequestPipeline invoke completed
[10:37:31.759 abc2a72c9c66ba2e9615872996cd637b be3640497cb2672f[] Information] AppBootstraper 👌Activity Stage Stoped👌 => ConfigureWebApplication
[10:37:31.759 abc2a72c9c66ba2e9615872996cd637b 417d0b08cc06f4bc[] Information] AppBootstraper 👌Activity Stage Stoped👌 => CreateHost
[10:37:31.759 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] AppBootstraper Create HostBuilder Completed, Start Run...
[10:37:31.865 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] Microsoft.Hosting.Lifetime Now listening on: http://localhost:5057
[10:37:31.872 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] Microsoft.Hosting.Lifetime Application started. Press Ctrl+C to shut down.
[10:37:31.873 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] Microsoft.Hosting.Lifetime Hosting environment: Development
[10:37:31.873 abc2a72c9c66ba2e9615872996cd637b 2e8274b5540a8ee6[] Information] Microsoft.Hosting.Lifetime Content root path: D:\gitrepos\agilelabs.sample\mvcweb
```