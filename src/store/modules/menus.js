let state = {
    storeIsCollapse: false,
    isChoose: 1,
    storeMenusActiveIdx: "1-1",
};
let getters = {
    isCollapse(state) {
        return state.storeIsCollapse;
    },
    isChoose(state) {
        return state.isChoose;
    },
    menusActiveIdx(state) {
        return state.storeMenusActiveIdx;
    },
};
let mutations = {
    setChoose(state, num) {
        state.isChoose = num;
    },
    setMenusActiveIdx(state, obj) {
        state.storeMenusActiveIdx = obj;
    },

};
export default {state, getters, mutations};
