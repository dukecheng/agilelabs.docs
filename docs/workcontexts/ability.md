---
sidebar_position: 2
---

# 能力说明

## 适用场景
为请求型业务, 后台任务型业务提供统一的业务上下文

## 基础能力
提供统一的上下文属性
身份信息Identity
要获取当前用户, 必须确保当前的WorkContext.Identity.IsAuthenticated=true
如果没有认证通过, 获取时则返回 null, 并不会抛出异常
// 从Items中获取
`WorkContext.GetLoginUser();`

`WorkContext.GetLoginUserFromMemCache();`
跟踪Id
语言信息
时区信息
上下文缓存
`workContext.Items`是一个`Dictionary<string,object>`类型, 提供了一个基于内存的上下文临时缓存

## 高级能力
用于局部能力扩展
上下文`Feature<T>`
提供基于上下文的Feature开关, 开启上下午局部粒度的功能控制

## Feature管理方法
1. `SetFeature<T>`
2. `GetFeature<T>`
3. 
## 缓存管理方法
1. SystemCache
2. TenantCache
3. UserCache
4. SessionCache

## 自定义扩展方法
同通过扩展方法对IWorkContextCore进行扩展, 以实现定制化的能力

## 创建与销毁
Items
在 ChildWorkContext 创建时会创建新的 Dictionary 对象, 但是里面的 KeyValue 会直接引用, 不受 InhirtFlag & AssignMode 的影响

## 其他属性
其他属性会受 InhirtFlag & AssignMode 的影响

## 实例跟踪
WorkContextTraceTable(WorkContext跟踪表)
WorkContext跟踪表提供了对WorkContext的生命周期进行跟踪的可能性, 其提供的主要方法有
1. 当前的WorkContexts数量
2. WorkContexts创建与销毁的Qps(Quantity Per Second)
3. WorkContext 创建事件
4. WorkContext 销毁事件
5. 
### Instance
WorkContextTable.Instance: WorkContext跟踪表的实例, 每个应用一个实例

### 方法
#### GetWorkContexts
获取当前的WorkContexts详情

#### CountWorkContexts
当前的WorkContexts数量

### 事件
● 创建事件: WorkContextCreatedEvent
● 准备销毁事件: WorkContextDisposingEvent