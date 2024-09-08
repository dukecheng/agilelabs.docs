---
sidebar_position: 2
title: 增加静态资源输出支持
---

# 支持静态资源输出
[示例代码](https://git.feinian.net/agilelabs.framework/agilelabs.samples/src/branch/main/mvcweb)

```csharp
using AgileLabs;
using AgileLabs.AppRegisters;
using AgileLabs.WebApp.Hosting;

public class AppConfigure : IRequestPiplineRegister
{
    public RequestPiplineCollection Configure(RequestPiplineCollection piplineActions, AppBuildContext buildContext)
    {
        piplineActions.Register("staticfiles", RequestPiplineStage.BeforeRouting, app =>
        {
            app.UseStaticFiles();
        });
        return piplineActions;
    }
}
```