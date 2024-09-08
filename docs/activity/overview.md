# 设计总览

为系统提供统一的跟踪上下文, 核心是处理TraceId, SpanId以及ParentActivity,RootId

## 配置
AppBuildOptions.ActivityConfiguration

## 与WorkContexts集成
每个WorkContext会自动构建一个对应的Activity

