import {reactive} from 'vue'

const store = reactive({
    authenticated: false,
    tokenInfo: {},
    user: {},
    storeUserInfo(user) {
        this.user = user
    },

    storeTokenInfo(payload) {
        const {access_token, expires} = payload
        if(!access_token || ! expires) {
            console.error('Cannot store access token information: invalid payload.')
            return
        }
        this.authenticated = true
        this.tokenInfo = {access_token, expires}
    },
    resetTokenInfo() {
        this.authenticated = false
        this.tokenInfo = {}
    },
})



export { store as default }