let state = {
    storeTabObj: {
        activeIdx: 0,
        list: []
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
