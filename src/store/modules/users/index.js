import AuthService from "@/services/AuthService"

export default {
    state: {
        user: {
            name: '',
            email: ''
        },
        loggedIn: false
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
            state.loggedIn = true
        },
        LOGOUT(state) {
            state.user = {
                name: '',
                email: ''
            }
            state.loggedIn = false
        }
    },
    actions: {
        auth({ state }, params) {
            console.log(state)
            AuthService.auth(params)
        }
    }

}