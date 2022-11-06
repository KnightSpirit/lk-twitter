根目录：

npm install

npm run dev

项目结构：
fake-db: mock 预填充的一些数据
state：zustand 的状态管理代码，主要维护登陆状态以及在 view 与 db-api 层架一层
page: 核心的路由 container
components：核心的组件代码