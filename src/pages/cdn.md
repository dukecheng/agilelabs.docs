---
title: 前端CDN
---

# 前端CDN

[源地址](https://blog.csdn.net/klsfp/article/details/118228645)

这个公益项目，托管了 CDNJS 的所有开源 JS 库以及反代了 Google Fonts、Ajax 和 Gravatar，并且全部支持 http 和 https

目录

一、loli提供的服务

1、CDNJS 开源 JS 库

2、Google Fonts

3、Google 前端公共库

4、Gravatar 头像

5、赞助商

6、旧域名替换

二、极客族公共加速服务

1、Google前端库（Google Hosted Libraries）

2、Gravatar全球头像

3、谷歌字体库（Google Fonts）

4、字体文件（Google Fonts）

5、字体文件（Google Fonts）

6、其他服务

一、loli提供的服务
1、CDNJS 开源 JS 库
我们采用的方法是每天定时同步 CDNJS 的 Github

所有的 JS/CSS 库可以在这儿找到您需要的链接

CDNJS Public file directory

如果您使用 cdnjs.com 只需要替换 cdnjs.cloudflare.com 为 cdnjs.loli.net 即可，如

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
替换成

<script src="https://cdnjs.loli.net/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
CDNJS 的 API 开发文档请摸这里

2、Google Fonts
我们采用的方法是万能的 Nginx 反代 + 关键词替换

使用的时候，您只需要替换 fonts.googleapis.com 为 fonts.loli.net 即可，如

`<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'>`
替换成

`<link href='https://fonts.loli.net/css?family=Open+Sans' rel='stylesheet'>`
如果需要 Material icons ，把

`<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>`
替换成

`<link href='https://fonts.loli.net/icon?family=Material+Icons' rel='stylesheet'>`
如果需要 Early Access，把

@import url(https://fonts.googleapis.com/earlyaccess/notosanskannada.css); 
替换成

@import url(https://fonts.loli.net/earlyaccess/notosanskannada.css); 
如果需要下载单个字体，您只需要把 fonts.gstatic.com 替换成 gstatic.loli.net 或 themes.googleusercontent.com 替换成 themes.loli.net 即可

比如

https://fonts.gstatic.com/s/opensans/v14/K88pR3goAWT7BTt32Z01mxJtnKITppOI_IvcXXDNrsc.woff2
替换成

https://gstatic.loli.net/s/opensans/v14/K88pR3goAWT7BTt32Z01mxJtnKITppOI_IvcXXDNrsc.woff2
或者

https://themes.googleusercontent.com/static/fonts/anonymouspro/v3/Zhfjj_gat3waL4JSju74E-V_5zh5b-_HiooIRUBwn1A.ttf
替换成

https://themes.loli.net/static/fonts/anonymouspro/v3/Zhfjj_gat3waL4JSju74E-V_5zh5b-_HiooIRUBwn1A.ttf
Google Fonts 的 API 文档请摸这里

3、Google 前端公共库
方法同上，直接替换 ajax.googleapis.com 为 ajax.loli.net 即可，如

`<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>`
替换成

`<script type='text/javascript' src='https://ajax.loli.net/ajax/libs/jquery/3.2.1/jquery.min.js'></script>`
Google 前端库 API 开发文档摸这儿

4、Gravatar 头像
方法还是同上，直接替换 *.gravatar.com 为 gravatar.loli.net 即可，如

https://secure.gravatar.com/avatar/8406d089bc81b664a2610b8d214c1428
替换成

https://gravatar.loli.net/avatar/8406d089bc81b664a2610b8d214c1428
5、赞助商
国内外 CDN， GeoDNS、域名等基础服务均由 xTom赞助 SSL 证书由 SSL.DO赞助

6、旧域名替换
由于更换了赞助商，并且因为最新的国内域名备案政策，旧的域名均采用 301 跳转形式

cdn.css.net 跳转到本文

cdn.css.net/libs/ 和 cdnjs.cat.net/ajax/libs/ 跳转到 cdnjs.loli.net/ajax/libs/

cdn.css.net/fonts/ 和 fonts.cat.net 和 fonts.css.network 跳转到 fonts.loli.net

cdn.css.net/ajax/ 和 ajax.cat.net 和 ajax.css.network 跳转到 ajax.loli.net

cdn.css.net/avatar/ 和 gravatar.cat.net 和 gravatar.css.network 跳转到 gravatar.loli.net

另外由于 jsdelivr 已不再提供 Github 同步，并且这货自己也有网宿的国内 CDN ，所以

cdn.css.net/files/ 跳转到 cdn.jsdelivr.net 并且不再提供 jsdelivr 的国内加速服务

所有国内加速服务的域名列表如下，您只需要修改程序里的原域名即可

| 原域名                       | 加速域名          | 制作方法        |
| ---------------------------- | ----------------- | --------------- |
| cdnjs.cloudflare.com         | cdnjs.loli.net    | 每日同步 Github |
| ajax.googleapis.com          | ajax.loli.net     | Nginx 反代      |
| fonts.googleapis.com         | fonts.loli.net    | Nginx 反代      |
| fonts.gstatic.com            | gstatic.loli.net  | Nginx 反代      |
| themes.googleusercontent.com | themes.loli.net   | Nginx 反代      |
| secure.gravatar.com          | gravatar.loli.net | Nginx 反代      |


如果遇到任何问题，请评论，有时间我或热心的网友会为你解答的。我新搭建的wp网站：唯唯否否作文网  https://wwff.top 欢迎前来指导交流。

二、极客族公共加速服务
1、Google前端库（Google Hosted Libraries）
源地址：//ajax.googleapis.com/ 
替换为：//gapis.geekzu.org/ajax/

注意，ajax.googleapis.com/ajax/应当替换为gapis.geekzu.org/ajax/ajax/
此域名Google未提供国内CDN，大陆访问仍然较为困难，我们持续提供服务

2、Gravatar全球头像
源地址：//*.gravatar.com/avatar/ 
替换为：//sdn.geekzu.org/avatar/

Automattic自建CDN，大陆可以正常访问源地址，但速度不佳，我们持续提供服务

3、谷歌字体库（Google Fonts）
源地址：//fonts.googleapis.com
替换为：//fonts.geekzu.org

此服务Google已提供国内CDN，大陆可以正常访问源地址，我们持续提供服务
因为Google针对不同UA返回不同css，此项不缓存（发现好多同类服务都加了缓存造成不同平台字体格式错乱）

4、字体文件（Google Fonts）
源地址：//fonts.gstatic.com/ 
替换为：//gapis.geekzu.org/g-fonts/

此服务Google已提供国内CDN，大陆可以正常访问源地址，我们持续提供服务

5、字体文件（Google Fonts）
源地址：//themes.googleusercontent.com/ 
替换为：//gapis.geekzu.org/g-themes/

基本用不到

6、其他服务
对于其他的前端资源，我们推荐使用 jsDelivr: www.jsdelivr.com
jsDelivr的资源很全，并且有全球CDN（含大陆）。
不推荐 BootCDN ，其服务稳定性较差。

                        
原文链接：https://blog.csdn.net/klsfp/article/details/118228645
