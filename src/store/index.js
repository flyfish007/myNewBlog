import Vue from 'vue'
import Vuex from 'vuex'

import menus from './modules/menus'
import tabs from './modules/tabs'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        menus, tabs
    }
})
