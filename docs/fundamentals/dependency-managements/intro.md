# 总览

系统使用了Autofac进行依赖管理, 主要是考虑了两点

* 提供AOP功能
* 提供未注册对象的解析(反模式, 可以用来兼容遗留系统)

## 服务注册
框架提供三种方式的服务注册方式
* AppBuildOptions.ConfigureService
* IServiceRegister & IAdvancedServiceRegister
* 自动注册(Self Register)

### AppBuildOptions.ConfigureService 
这个是由构建参数提供的注册方式, 是在启动阶段的扩展

### IServiceRegister & IAdvancedServiceRegister
系统提供的独立配置文件的服务注册接口, 在启动阶段会扫描这两个接口， 进行服务注册

### 自注册
自注册依赖于三个接口`ISingleton`,`IScoped`,`ITransist`, 所有Class增加了这三个接口的标注,都将按照对应的生命周期注册到Ioc容器中
