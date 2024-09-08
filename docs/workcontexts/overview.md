---
sidebar_position: 1
---

# 总览

WorkContext 中文名为 工作上下文/业务上下文

设计主要目的是在业务运行的不同场景下提供统一的业务处理上下文

## 场景定义:
* Http请求场景(HttpRequest)
* Job场景(Hangifre Job, Quartz Job)
* 异步任务场景(Task.Factory.Run)
* 后台任务(BackgroundService, IhostedService)

WorkContext中`Work`的定义: 为完成某一功能(系统功能/业务功能)而存在的独立的运行上下文或者上下文中的课独立的子上下文, 上下文可以持续嵌套

## 行为说明

### 基于HttpRequest的默认上下文
每一个HttpReuest默认会开启一个ServiceScope, 框架会给该Scope初始化一个WorkContext, 当Request处理结束, Scope释放(Dispose)时，对应的WorkContext也会Dispose.

### 非HttpRequest的上下文
对于非HttpRequest的上下文, 需要我们自行创建对应的Scope

### 创建时需要区分是否在子线程

没有开启子线程: `CreateScopeWithWorkContext();`

开启了子线程: `CreateScopeWithWorkContextForNewTask();`

### 创建方式

**通过全局静态上下文创建**
```bash
// 为新的子线程创建独立的上下文
AgileLabContexts.Context.CreateScopeWithWorkContextForNewTask();

// 在当前线程创建一个子上下文
AgileLabContexts.Context.CreateScopeWithWorkContext();
```
**通过当前上下文创建子上下文** 
```bash
// 为新的子线程创建独立的上下文
CurrentWorkContext.CreateScopeWithWorkContextForNewTask();

// 在当前线程创建一个子上下文
CurrentWorkContext.CreateScopeWithWorkContextFor();
```

### 子上下文创建时的数据继承
WorkContexts创建上下文时通过InhirentFlags定义哪些数据将被继承到子上下文
默认标准属性会重新基于原来的值深Copy到新的对象, 保证线程安全

Items中的数据比较特殊， 会通过引用的方式重新添加到新的Items中, 如果时引用对象, 将继续使用引用的实例，而不是新的实例，非线程安全


### 创建与销毁时机
WorkContext始终与ServiceScope关联, 创建时机在Scope创建之后, 销毁在Scope销毁之前