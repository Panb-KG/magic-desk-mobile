# 🧠 魔法课桌 - 逻辑规格书 (Logic Core)

## 1. 后端大脑 (Coze API)
- **API 来源**：扣子 (Coze) 智能体后端。
- **核心能力**：基于 LangGraph 的多 Agent 架构，包含 30+ 实用工具。
- **长期记忆**：通过 `user_id` 在扣子数据库中隔离存储用户偏好与知识掌握度。

## 2. API 交互协议 (前端 <-> 后端)
### 作业扫描接口
- **输入**：Image (Base64/File)。
- **期望输出 (JSON)**：
  ```json
  {
    "task_type": "homework",
    "subject": "Mathematics",
    "quests": [
      {"name": "练习册P15", "est_time": "15min", "difficulty": "⭐️⭐️"}
    ],
    "magic_prompt": "勇敢的小巫师，新的挑战已在炼金室开启！"
  }
  ```
