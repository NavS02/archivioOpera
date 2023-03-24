import store from '../store'

export default class Authentication {
    directus
    
    constructor(directus) {
        this.directus = directus
    }

    async isAuthenticated() {
        return await this.directus.auth
            .refresh()
            .then((response) => {
                this.storeToken(response)
                return response
            })
            .catch(() => {
                this.resetToken()
                return false
            });
    }

    async getUserInfo() {
        return await this.directus.users.me.read();
    }
    


    async login(email, password) {
        return await this.directus.auth
			.login({ email, password })
			.then((response) => {
                this.storeToken(response)
				return response
			})
			.catch(() => {
                this.resetToken()
                return false
			});
    }

    async logout() {
        const response = await this.directus.auth.logout();
        this.resetToken()
        return response
    }

    // store interacrtions
    resetToken() {
        store.resetTokenInfo()
    }

    async storeToken(response) {
        store.storeTokenInfo(response)
        const user = await this.getUserInfo()
        store.storeUserInfo(user)
    }
}