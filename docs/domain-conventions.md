# 项目域名与部署规范

本文档用于统一个人项目、云乐坊项目及独立产品的域名选择、命名和迁移方式。

文中的 `*.example.com` 表示可分配的域名命名空间，并不表示应当在 DNS 中创建通配符记录。除非部署平台确实需要，否则应为每个服务创建明确的 DNS 记录。

## 域名用途

| 域名空间                 | 用途                                                   | 定位                       |
| ------------------------ | ------------------------------------------------------ | -------------------------- |
| `*.yunyoujun.cn`         | 个人正式项目，优先优化中国大陆用户的访问体验           | 个人、国内优先             |
| `*.yunle.fun`            | 云乐坊正式作品，以及未来考虑品牌建设、盈利或引流的项目 | 工作室、正式环境、国内优先 |
| `*.yyj.moe`              | 个人正式项目，支持全球访问，但不要求中国大陆节点加速   | 个人、全球优先             |
| `*.yunle.app`            | 云乐坊开发、预览和内部测试项目                         | 工作室、非正式环境         |
| `*.elpsy.cn`             | 实验、概念验证和生命周期尚不确定的项目                 | 实验性、可迁移             |
| `advjs.org` 及其子域名   | ADV.JS 主站、文档、编辑器、API、示例和生态项目         | ADV.JS 产品专用            |
| `valaxy.site` 及其子域名 | Valaxy 主站、文档、API、主题、示例和生态项目           | Valaxy 产品专用            |

`normalpuppy.com` 为普通小狗品牌专用域名，不纳入通用项目域名池。

## 选择流程

新项目按以下顺序选择域名：

1. 属于 ADV.JS 或 Valaxy 产品生态时，使用各自的独立产品域名。
2. 属于普通小狗品牌时，使用 `normalpuppy.com` 或 `<service>.normalpuppy.com`。
3. 属于云乐坊时：
   - 面向外部用户的正式作品使用 `*.yunle.fun`。
   - 开发、预览或内部测试环境使用 `*.yunle.app`。
4. 属于个人项目时：
   - 实验或概念验证阶段使用 `*.elpsy.cn`。
   - 正式发布且优先服务中国大陆用户时使用 `*.yunyoujun.cn`。
   - 正式发布且面向全球、不要求中国大陆节点加速时使用 `*.yyj.moe`。

项目的组织归属、生命周期阶段和目标用户应共同决定域名，部署平台本身不决定域名归类。

## 命名约定

### 站点与服务

- 项目主站使用 `<project>.<root-domain>`，例如 `cook.yunyoujun.cn`。
- 项目服务使用 `<service>.<project>.<root-domain>`，例如 `api.cook.yunyoujun.cn` 或 `docs.cook.yunyoujun.cn`。
- 独立产品可直接使用根域名作为主站，例如 `advjs.org` 和 `valaxy.site`。
- 根域名的 `www` 通常只作为主站别名，并跳转至选定的 canonical 地址。

优先使用短小、稳定且能对应仓库或产品名称的项目标识。避免同一概念同时出现连字符、缩写和不同拼写。

### 预留名称

以下名称默认保留给站点或平台级基础设施，不直接分配给普通项目：

- `www`
- `api`
- `admin`
- `auth`
- `sso`
- `cdn`
- `assets`
- `docs`
- `status`
- `mail`
- `dev`
- `staging`
- `preview`

如项目需要这些服务名称，应优先使用 `<service>.<project>.<root-domain>`，避免占用根域名下的平台级名称。

## Canonical 与历史别名

- 每个项目只能有一个对外 canonical 域名。
- 搜索引擎、站点地图、Open Graph、文档和仓库主页均应指向 canonical 域名。
- 曾作为正式入口的旧域名和平台别名只用于兼容，并通过 `301` 或 `308` 跳转到 canonical 域名。仅用于开发、预览或调试的平台地址不属于历史生产别名。
- 迁移时应先启用新域名和跳转，再更新外部链接，最后清理不再需要的 DNS 记录。
- 无法配置跳转的旧域名应记录在[域名库存](./domain-inventory.md)中，避免被误认为新的正式入口。

## 生命周期

### 实验项目毕业

当 `*.elpsy.cn` 下的项目具备稳定用户、明确维护计划或品牌价值时，应迁移到与其归属相符的正式域名：

- 个人项目迁移至 `*.yunyoujun.cn` 或 `*.yyj.moe`。
- 云乐坊项目迁移至 `*.yunle.fun`。
- 成为独立产品后，可评估是否注册独立根域名；注册完成前仍按项目归属使用对应的个人或云乐坊正式域名。

### 测试环境回收

- `*.yunle.app` 不作为长期公开入口或 SEO canonical 地址。
- 公开可访问的预览环境应设置 `noindex`；包含内部数据或管理能力时必须增加访问控制，例如 Cloudflare Access、SSO 或其他鉴权。
- 测试结束后应删除部署绑定及 DNS 记录，避免遗留无人维护的入口。

### 项目停止维护

- 有替代项目时，将旧域名跳转到替代项目或说明页面。
- 没有替代项目时，保留简短的归档说明，而不是让域名静默失效。
- 确认不再有外部流量和兼容需求后，方可回收子域名。

## 中国大陆访问体验

域名后缀本身不会带来中国大陆访问加速。`yunyoujun.cn` 和 `yunle.fun` 的分类表达的是目标用户与部署意图，实际体验取决于 ICP 备案、CDN 或 Pages 服务区域、源站位置、缓存策略和 DNS 路由。

- 使用中国大陆 CDN 节点或选择 EdgeOne 中国大陆、全球可用区时，应确认根域名已完成 ICP 备案。
- Cloudflare 普通全球网络不应被视为中国大陆节点加速；如需 Cloudflare China Network，应单独评估企业套餐、备案和内容审核要求。
- 同一根域名下的项目应遵循对应备案主体和允许的内容范围。
- 涉及交易或经营性服务时，应根据实际业务确认是否需要额外许可，而不能仅以已有备案代替。

相关资料：

- [腾讯云 EdgeOne 使用限制](https://cloud.tencent.com/document/product/1552/104964)
- [Cloudflare China Network](https://developers.cloudflare.com/china-network/)
- [Cloudflare China Network 接入要求](https://developers.cloudflare.com/china-network/get-started/)

## 平台生成域名

Cloudflare Pages、Vercel、Netlify 等平台生成的 `*.pages.dev`、`*.vercel.app`、`*.netlify.app` 地址适合作为部署预览、调试或应急入口，不纳入自有域名库存，也不作为正式项目的 canonical 地址。仍在承担预览职责的地址可以保留；曾作为正式入口的地址应在平台允许时跳转到 canonical 域名。

## 维护要求

新增、迁移或下线正式域名时，应同步更新[域名库存与历史别名](./domain-inventory.md)，至少记录：

- 项目名称与归属
- canonical 域名
- 历史别名
- 当前部署平台
- 是否需要中国大陆加速
- 最后确认日期
