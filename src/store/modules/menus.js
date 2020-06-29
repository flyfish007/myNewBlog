let state = {
    storeIsCollapse: false,
    isChoose: 1
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
    }
};
export default {state, getters, mutations};
