# AGENTS.md

## 项目概述

这是 Cross_Truth 的个人项目仓库，同时也是 **cc-connect** 桥接服务的宿主目录。
cc-connect 将 Codex 连接到 QQ（通过 NapCat），使 QQ 消息能触发 Codex 执行操作。

## 语言

- 始终使用**中文**回复用户
- 代码注释和文档可使用中文或英文

## cc-connect 桥接架构

```
QQ (NapCat) ←→ cc-connect ←→ Codex
```

### 双项目权限模型

| 项目 | 匹配规则 | 模式 | 权限 |
|------|----------|------|------|
| **owner** | QQ `2602501541`（峰云天夏） | `bypassPermissions` | 全部自动通过，不弹确认 |
| **public** | `*`（所有其他人） | `plan` | 只能分析和规划，**无法执行任何工具** |

- 配置文件：`~/.cc-connect/config.toml`
- cc-connect WebSocket 端口：`ws://127.0.0.1:3001`
- NapCat WebUI：`http://127.0.0.1:6099`

### 用户身份

- **峰云天夏**：QQ `2602501541`，项目所有者，拥有电脑控制权限
- 其他人：只能获取信息，不能操作电脑

## 工作目录

- 主工作区：`C:/Users/Cross Truth/vs code code`（当前所有配置的 work_dir）
- 历史/备用工作区：`E:/Codex test`
- cc-connect 配置：`C:/Users/Cross Truth/.cc-connect/`
- NapCat 安装：`C:/Users/Cross Truth/Downloads/Compressed/NapCat.Shell.Windows.OneKey/`

## 常用操作

- 启动 NapCat + cc-connect：`C:/Users/Cross Truth/Desktop/启动NapCat+CCConnect.bat`
- cc-connect 日志级别：info（可在 config.toml 调整）
- 项目使用 git 管理，当前分支：main

## 项目子目录

| 目录 | 说明 |
|------|------|
| `projects/browse-suggest/` | 网站推荐聚合页 |
| `projects/portfolio/` | 个人主页 |
| `projects/c-arithmetic-pattern/` | C 语言练习 |
| `projects/python-greet/` | Python 练习 |

## 跨会话连续性（重要）

每次通过 QQ 发消息，cc-connect 会调起一个**新的** Codex 实例。新实例默认看不到之前的对话。

### 你必须做到

1. **开始时读取历史**：收到 QQ 消息后，先读取 `C:/Users/Cross Truth/.cc-connect/sessions/owner_*.json`（最新的那个），看最近 5-10 条对话了解上下文
2. **重要信息写入 memory**：任何配置变更、决策、偏好、问题解决方案，立即写入 `.Codex/projects/c--Users-Cross-Truth-vs-code-code/memory/`
3. **引导用户用 memory**：如果用户反复提同一类问题，主动建议写入记忆

### 记忆文件位置
```
C:\Users\Cross Truth\.Codex\projects\c--Users-Cross-Truth-vs-code-code\memory\
```
每次新会话会自动加载 `MEMORY.md` 索引和其中引用的所有记忆文件。

## 重置对话

当用户发送以下任一关键词时，**立即删除** `C:/Users/Cross Truth/.cc-connect/sessions/owner_*.json`，然后回复"对话已重置，下一条消息开始全新对话。"：

- "新对话"
- "新开会话"
- "重置对话"
- "清除上下文"
- "/new"

## 偏好

- 代码风格：简洁、可读、注释适量
- 操作前先确认，但不必过度询问
- 文件路径使用正斜杠 `/`
