# 服务注册
```csharp
    public static class ServiceCollectionExtensionsForEfRepository
    {
        public static IServiceCollection AddDatabaseStore(this IServiceCollection services, AppBuildContext buildContext)
        {
            services.RegisterDbContext<CenterDbContext>();
            services.AddScoped<DapperBaseRepository>();
            return services;
        }
    }
```