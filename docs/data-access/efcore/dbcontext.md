# DbContext
```csharp
using AgileLabs.EfCore.PostgreSQL;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
/*
 列出迁移列表
dotnet ef migrations list

增加一次迁移
dotnet ef migrations add Init

列出脚本
dotnet ef migrations script

删除最近一次迁移
dotnet ef migrations remove

直接更新db
dotnet ef database update
 */
namespace Niusys.Casher.DataStore
{
    public class CenterDbContext : AgileLabDbContext
    {
        public CenterDbContext(ILoggerFactory loggerFactory) : base(loggerFactory)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(GetType().Assembly);
        }
    }
}

```