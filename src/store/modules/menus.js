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
};
let mutations = {
    setChoose(state, num) {
        state.isChoose = num;
    },
    menusActiveIdx(state) {
        return state.storeMenusActiveIdx;
    },
};
export default {state, getters, mutations};
