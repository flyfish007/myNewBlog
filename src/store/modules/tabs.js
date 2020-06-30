let state = {
    storeTabObj: {
        activeIdx: 0,
        list: [{"title": "首页", "path": "/dashboard", "key": "1-1"}]
    }
};
let getters = {
    tabsObj(state) {
        return state.storeTabObj;
    }
};
let mutations = {
    setTabsObj(state, obj) {
        state.storeTabObj = obj;
    }
};
export default {state, getters, mutations};
