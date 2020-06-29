<template>
  <div id="app">
      <head-item></head-item>
      <side-item></side-item>
      <div class="ZTOmain" id="ZTOmain" :style="{left:isCollapse?'64px':''}">
          <div class="ZTOmainInner">
              <tabs-item></tabs-item>
              <router-view/>
          </div>
      </div>
  </div>
</template>
<script>
    import {mapGetters, mapMutations} from "vuex"
    import headItem from "./components/headItem.vue";
    import sideItem from "./components/sideItem.vue";
    import tabsItem from "./components/tabsItem.vue";
    export default {
        name: 'App',
        data() {
            return {};
        },
        mounted() {

        },
        computed: {
            ...mapGetters(["isCollapse"]),
        },
        components: {headItem, sideItem, tabsItem},
        methods: {

        },

    }
</script>
<style>
    @import "assets/css/common.css";
</style>
