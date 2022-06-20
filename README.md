### 技术栈
- 脚手架 create-react-app
- react hooks
- 状态管理：mobx
- UI组件库：antd-mobile
- 路由：react-router-dom 以及 history
- CSS Modules 避免组件之间的样式冲突
- TypeScript
- 其他：axios、sass、lodash、websocket


创建项目 npx create-react-app react-mobie-news --template typescript

进入项目根目录：cd react-mobie-news

启动项目：yarn start

安装sass: yarn add sass

安装路由: yarn add react-router-dom  安装路由类型文件：yarn add @types/react-router-dom -D

安装antd组件库 yarn add antd-mobile@next

安装修改 CRA 配置的包：yarn add -D @craco/craco

安装 px 转 vw 的包：yarn add -D postcss-px-to-viewport

降低React版本 yarn add react@17.0.2 react-dom@17.0.2 --save