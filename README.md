根目录：

npm install

npm run dev

项目结构：
| fake-db: mock 预填充的一些数据
 - user: 负责 mock 用户信息，新建用户等底层的交互 api
 - tweet：负责 mock tweet 信息，crud tweet 的 api

| state：zustand 的状态管理代码，主要维护登陆状态以及在 view 与 db-api 层架一层
 - user：维护登录登出等能力
 - tweets：crud tweet
 - theme：简单的主题切换

| page: 核心的路由 container
 - 

| components：核心的组件代码
 - FeedList: 核心列表渲染组件
 - Layout: 流式布局的 Parent Container，有一些简单的 css-varieble 调用
 - 

| hook
- useIntersectionObserver: 判断 fetch dom 是否出现 hook

| page
- [username].tsx: login 与注册后默认跳转的路径
- tweet/[id].tsx: 独立 tweets 路由
