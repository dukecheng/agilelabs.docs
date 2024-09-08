# 设计总览

应用上下文由`AgileLabsContexts`,`AgileLabsContext`两部分组成, 设计目标为应用系统提供全局的上下文管理(ServiceLocator模式的实现), 以及服务的构建配置

## AgileLabsContexts
全局的Context管理与访问

## AgileLabsContext
应用上下文的定义

## RootServiceProvider的访问
```csharp
AgileLabContexts.Context.RootServiceProvider
```