
import {
    SET_LOGIN_STATUS,
    SET_USER_ID,
    SET_USER_ROLE,
    SET_USERINFO,
    SET_USER_SESSION
} from '../types'
const user = {
    state: {
        loginStatus: false ,
        id: 0,
        role: 0,
        userInfo: {},
    },
    mutations: {
        [SET_LOGIN_STATUS](state, status) {
            state.loginStatus = status;
        },
        [SET_USER_ID](state, id) {
            state.id = id
        },
        [SET_USER_ROLE](state, role) {
            state.role = role
        },
        [SET_USERINFO](state, userInfo) {
            state.userInfo =  userInfo 
        },
    },
    actions: {
        // 用户登录
        async userLogin({ commit }, userInfo) {
            const data = {
                username: userInfo.username,
                password: userInfo.password,
                role: userInfo.role,
                id: userInfo.id
            }
            commit(SET_USERINFO, userInfo);
            commit(SET_USER_ROLE, userInfo.role);
            commit(SET_USER_ID, userInfo.id);
            commit(SET_LOGIN_STATUS, true);
            return data;
        },
        // 用户退出
        async userLogout({ commit }) {
            debugger
            commit(SET_LOGIN_STATUS, false);
            commit(SET_USER_ROLE, '');
            commit(SET_USER_ID, 0);
            commit(SET_USERINFO, {});
            // commit()
            window.location.reload();
        }
    }, 
    getters: {
        isLogin: state => state.loginStatus,
        role: state => state.role,
        userInfo: state => state.userInfo,
        id: state => state.id
    }
}
export default user;