
import {
    SET_LOGIN_STATUS,
    SET_USER_ROLE,
    SET_USERINFO,
    SET_USER_SESSION
} from '../types'
const user = {
    state: {
        loginStatus: localStorage.getItem("loginStatus") || false ,
        role: localStorage.getItem("role") || 0,
        userInfo: localStorage.getItem("userInfo") || {},
    },
    mutations: {
        [SET_LOGIN_STATUS](state, status) {
            state.loginStatus = status;
        },
        [SET_USER_ROLE](state, role) {
            state.role = role
        },
        [SET_USERINFO](state, userInfo) {
            state.userInfo = userInfo
        },
    },
    actions: {
        // 用户登录
        async userLogin({ commit }, {role, username, password}) {
            const data = {
                username: username,
                password: password,
                role: role
            }
            commit(SET_USERINFO, data);
            commit(SET_USER_ROLE, data.role);
            commit(SET_LOGIN_STATUS, true);
            return data;
        },
        // 用户退出
        async userLogout({ commit }) {
            commit(SET_LOGIN_STATUS, false);
            commit(SET_USER_ROLE, '');
            commit(SET_USERINFO, {});
            // commit()
            window.location.reload();
        }
    }, 
    getters: {
        isLogin: state => state.loginStatus,
        role: state => state.role,
        userInfo: state => state.userInfo
    }
}
export default user;