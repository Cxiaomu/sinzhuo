
import {
    SET_LOGIN_STATUS,
    SET_USER_TYPE,
    SET_USERINFO,
    SET_USER_SESSION
} from '../types'
const user = {
    state: {
        userCode: '',
        loginStatus: false,
        userType: '',
        userInfo: {},
        session: {}
    },
    mutations: {
        [SET_LOGIN_STATUS](state, status) {
            state.loginStatus = status;
        },
        [SET_USER_TYPE](state, userType) {
            state.userType = userType
        },
        [SET_USERINFO](state, userInfo) {
            state.userInfo = userInfo
        },
        [SET_USER_SESSION](state, session) {
            state.session = session
        }
    },
    actions: {
        // 用户登录
        async userLogin({ commit }, {loginName, loginPwd}) {
            const data = {
                userCode: 'ADE8DBC9-BD3F-49CD-BDD4-B712BB1C36B0',
                userType: '1'
            }
            const { userCode } = data
            commit(SET_USERINFO, data);
            commit(SET_USER_TYPE, data.userType);
            commit(SET_LOGIN_STATUS, true);
            commit(SET_USER_SESSION, userCode);
            return data;
        },
        // 用户退出
        async userLogout({ commit }) {
            commit(SET_LOGIN_STATUS, false);
            commit(SET_USER_TYPE, '');
            commit(SET_USERINFO, {});
            // commit()
            window.location.reload();
        }
    }, 
    getters: {
        userCode: state => {
            return state.userInfo.userCode ? state.userInfo.userCode : '-1'
        },
        isLogin: state => state.loginStatus,
        userType: state => state.userType,
        userInfo: state => state.userInfo
    }
}
export default user;