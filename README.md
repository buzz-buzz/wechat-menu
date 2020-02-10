# wechat-menu

## 使用

```sh
git clone https://github.com/buzz-buzz/wechat-menu
npm install
```

## 前提

添加机器 ip 到公众号后台白名单

## 更新公众号菜单

```sh
# Mac OS or Linux
appid=xxx appsecret=yyy npm start public-menu.json

# Windows
set appid=xxx&&set appsecret=yyy&&npm start public-menu.json
```

## 更新订阅号菜单

```sh
# Mac OS or Linux
appid=xxx appsecret=yyy npm start subscriber-menu.json

# Windows
set appid=xxx&&set appsecret=yyy&&npm start subscriber-menu.json
```

## 成功执行返回示例

```shell
> wechat-menu@1.0.0 start C:\Users\Jeff\wechat-menu
> npm run build&&node ./lib/index.js "unicareer.json"


> wechat-menu@1.0.0 build C:\Users\Jeff\wechat-menu
> babel -s inline -d lib ./index.js

./index.js -> lib\index.js
creating main ...
main: done with result:  { errcode: 0, errmsg: 'ok' }
```

## 排障指南

- 以下错误是需要添加白名单，要将错误信息里的 ip 添加到公众号后台白名单里，重新运行即可。

```shell
> wechat-menu@1.0.0 start C:\Users\Jeff\wechat-menu
> npm run build&&node ./lib/index.js "unicareer.json"


> wechat-menu@1.0.0 build C:\Users\Jeff\wechat-menu
> babel -s inline -d lib ./index.js

./index.js -> lib\index.js
creating main ...
(node:12284) UnhandledPromiseRejectionWarning: WeChatAPIError: invalid ip 101.88.227.152 ipv6 ::ffff:101.88.227.152, not in whitelist hint: [57slnA0408b101]
    at API.request (C:\Users\Jeff\wechat-menu\node_modules\co-wechat-api\lib\api_common.js:141:19)
    at processTicksAndRejections (internal/process/task_queues.js:85:5)
    at async API.getAccessToken (C:\Users\Jeff\wechat-menu\node_modules\co-wechat-api\lib\api_common.js:183:16)
    at async API.exports.createMenu (C:\Users\Jeff\wechat-menu\node_modules\co-wechat-api\lib\api_menu.js:44:27)
    at async C:\Users\Jeff\wechat-menu\lib\index.js:35:34
(node:12284) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:12284) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
