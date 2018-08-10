import path from 'path'
import WechatAPI from 'co-wechat-api'

export default class WechatMenu {
    static run() {
        const menu = require(path.join('..', process.argv[2] || 'subscriber-menu.json'))

        const api = new WechatAPI(process.env.appid, process.env.appsecret)
        Object.keys(menu).forEach(async m => {
            console.log(`creating ${m} ...`)
            if (m === 'main') {
                let result = await api.createMenu(menu[m])

                console.log(`${m}: done with result: `, result)
            } else {
                let result = await api.addConditionalMenu(menu[m])

                console.log(`${m}: done with result: `, result)
            }
        })
    }
}

WechatMenu.run()
