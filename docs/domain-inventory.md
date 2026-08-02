# 域名库存与历史别名

本文档记录当前接入域名管理平台的根域名及需要逐步整理的历史入口。域名用途以[项目域名与部署规范](./domain-conventions.md)为准，实时 DNS 状态以对应平台控制台为准。

## 根域名库存

以下快照于 2026-08-02 通过 Cloudflare API 只读确认。`Active` 仅表示当时的 Cloudflare Zone 状态，不代表对注册人、续费状态或到期时间的核验。

| 根域名            | Cloudflare 账户 | 状态 | 规划用途                       |
| ----------------- | --------------- | ---- | ------------------------------ |
| `yunyoujun.cn`    | 个人            | 活动 | 个人正式项目，中国大陆用户优先 |
| `yyj.moe`         | 个人            | 活动 | 个人正式项目，全球访问优先     |
| `elpsy.cn`        | 个人            | 活动 | 实验和概念验证项目             |
| `advjs.org`       | 个人            | 活动 | ADV.JS 产品生态专用            |
| `valaxy.site`     | 个人            | 活动 | Valaxy 产品生态专用            |
| `yunle.fun`       | 云乐坊          | 活动 | 云乐坊正式作品与生产环境       |
| `yunle.app`       | 云乐坊          | 活动 | 云乐坊开发、预览与内部测试环境 |
| `normalpuppy.com` | 云乐坊          | 活动 | 普通小狗品牌专用               |

Cloudflare Pages、Workers、Vercel、Netlify、EdgeOne Pages 等平台分配的默认域名属于部署入口，不代表新增的自有根域名。

## 根域名主入口

| 域名              | 当前角色                 | 备注                          |
| ----------------- | ------------------------ | ----------------------------- |
| `yunyoujun.cn`    | 云游君个人主站           | 已备案，个人品牌入口          |
| `yunle.fun`       | 云乐坊官方网站           | 已备案，工作室品牌入口        |
| `advjs.org`       | ADV.JS 主站              | 独立产品 canonical 域名       |
| `valaxy.site`     | Valaxy 主站              | 独立产品 canonical 域名       |
| `normalpuppy.com` | 普通小狗主站             | 独立品牌 canonical 域名       |
| `yyj.moe`         | 个人全球域名与短入口     | 不要求中国大陆节点加速        |
| `elpsy.cn`        | 实验项目命名空间         | 项目成熟后应迁移              |
| `yunle.app`       | 云乐坊非正式环境命名空间 | 不作为生产项目 canonical 域名 |

## 历史入口整理

当前 DNS 和本地项目配置中存在跨根域名的历史入口。处理前应先确认真实流量、外部链接和部署状态，不直接删除记录。

| 项目或范围    | 已发现的情况                                                            | 后续处理                                                   |
| ------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| ADV.JS        | 同时存在 `advjs.org` 与 `advjs.yunyoujun.cn` 等入口                     | 以 `advjs.org` 体系为 canonical，旧入口逐步跳转            |
| Valaxy        | 同时存在 `valaxy.site`、`valaxy.yunyoujun.cn`、`valaxy.yyj.moe` 等入口  | 以 `valaxy.site` 体系为 canonical，旧入口逐步跳转          |
| Cook          | 在 `yunyoujun.cn`、`yyj.moe`、`yunle.fun`、`yunle.app` 下均发现入口     | 确认项目归属和唯一 canonical，其余入口仅保留跳转或测试用途 |
| Give Me Money | `gmm.yunyoujun.cn` 与 `gmm.yunle.fun` 并存                              | 按项目归属确认 canonical，并为旧入口配置跳转               |
| AI SFC        | `ai-sfc.yunyoujun.cn` 与 `ai-sfc.yunle.fun` 并存                        | 确认个人项目或云乐坊作品定位                               |
| `yunle.app`   | 已存在主站、`admin`、`ai`、`book-day`、`cook`、`son-in-law-exam` 等记录 | 区分生产与测试用途；生产项目迁移或明确记为历史例外         |
| `elpsy.cn`    | 已承载 Augma、El Bot、Resume 等历史项目                                 | 判断是否仍属实验项目；成熟项目按新规范迁移                 |

## 项目登记模板

为避免库存文档变成完整 DNS 导出，只登记正式项目、canonical 域名，以及仍需管理的实验、测试、归档项目和历史别名。新增条目可使用以下格式：

| 项目    | 归属                 | 阶段                      | Canonical 域名 | 历史别名          | 部署平台                                       | 国内加速 | 最后确认   |
| ------- | -------------------- | ------------------------- | -------------- | ----------------- | ---------------------------------------------- | -------- | ---------- |
| Example | 个人 / 云乐坊 / 产品 | 实验 / 测试 / 正式 / 归档 | `example.com`  | `old.example.com` | Cloudflare / EdgeOne / Vercel / Netlify / 其他 | 是 / 否  | YYYY-MM-DD |

## 维护说明

- Cloudflare DNS 是当前大部分自有域名解析记录的事实来源，但不替代本规范中的项目归属和 canonical 决策。
- 域名指向 EdgeOne、Vercel、Netlify、GitHub Pages、对象存储或其他平台时，仍按自有根域名归类。
- 每次新增、迁移或下线正式域名时，应在同一个变更中更新本文件。
- 对历史入口执行删除前，应先配置跳转并观察访问情况；无法确认用途的记录保留为待审计项。
