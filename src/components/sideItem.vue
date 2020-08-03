<template>
    <div class="menulist">
        <el-menu class="el-menu-vertical-demo" :default-active="menusActiveIdx"  @select="excuteRouter"
                 :collapse="isCollapse" :unique-opened="true" ref="elMenus" @open="isopen" @close="isclose">
            <template v-for="menuOne in menus">
                <el-submenu
                  :index="menuOne.key+''"
                  :keyName="menuOne.key" :key="menuOne.key+''">
                    <template slot="title">
                        <i class="iconfont" v-html="!!menuOne.icon?menuOne.icon:'&#xec06;'"></i>
                        <span v-text="menuOne.name" slot="title"></span>
                    </template>
                    <template v-for="(twoMenu, index) in menuOne.subMenus">
                        <el-menu-item
                                :index="twoMenu.key+''"
                                :ref="twoMenu.key"
                                :key="index">
                            {{ twoMenu.title}}
                        </el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
        <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false" v-show="isCollapse"><i class="el-icon-d-arrow-right"></i></el-radio-button>
            <el-radio-button :label="true" v-show="!isCollapse"><i class="el-icon-d-arrow-left"></i></el-radio-button>
        </el-radio-group>
    </div>
</template>


<script>
import menus from '../router/menus'
import {mapGetters, mapMutations, mapState} from "vuex"
import {cloneDeep} from 'lodash';
    export default {
        name: "sideItem",
        data() {
            return {
                menus:menus
            };
        },
        created() {

        },
        beforeDestroy() {

        },
        mounted() {

        },
        watch: {},
        computed: {
            ...mapGetters(['tabsObj', 'isChoose']),
            ...mapState(['storeIsCollapse', 'storeMenusActiveIdx']),
            isCollapse: {
                get() {
                    return this.$store.state.menus.storeIsCollapse;
                },
                set(val) {
                    this.$store.state.menus.storeIsCollapse = val
                }
            },
            menusActiveIdx: {
                get() {
                    return this.$store.state.menus.storeMenusActiveIdx;
                },
                set(val) {
                    this.$store.state.menus.storeMenusActiveIdx = val
                }
            }
        },
        methods: {
            ...mapMutations(['setTabsObj', 'setIsCollapse', 'setChoose','setMenusActiveIdx']),
            isopen(val) {
                this.$store.commit('setChoose', val);
            },
            isclose(val) {
                this.$store.commit('setChoose', 0);
            },
            excuteRouter(key) {
                console.log('excuteRouter...')
                var arry = key.split('-');
                var first = arry[0] - 1,
                    second = arry[1] - 1;
                var curentTab = this.menus[first].subMenus[second];

                this.$router.push({
                    path: curentTab.path,
                });

                //添加tabObj
                this.addTabObj(curentTab);

            },
            addTabObj(jumpTab){
                let maxTabLen = 5;
                let tempTabsObj = cloneDeep(this.tabsObj);
                let len = tempTabsObj.list.length;
                if (JSON.stringify(this.tabsObj).indexOf(JSON.stringify(jumpTab)) < 0) {
                    if (tempTabsObj.list.length >= maxTabLen) {
                        if(zParam.isFinance){
                            tempTabsObj.list.splice(0, 1);
                        }else{
                            tempTabsObj.list.splice(1, 1);
                        }
                    }
                    tempTabsObj.list.push(jumpTab);
                    tempTabsObj.activeIdx = tempTabsObj.list.length - 1;
                    this.setTabsObj(Object.assign(this.tabsObj,tempTabsObj))
                } else {
                    let list=tempTabsObj.list;
                    for (let i = 0; i < len; i++) {
                        if (list[i].path == jumpTab.path&&list[i].platform==jumpTab.platform) {
                            this.setTabsObj(Object.assign(this.tabsObj,{"activeIdx":i}))
                        }
                    }
                }
            }

        },
        components: {}
    };
</script>

<style lang="scss">
    .el-submenu .el-icon-cstMenu:before {

        content: "+";
    }

    .is-opened .el-icon-cstMenu:before {
        content: "一";
        font-size: 12px;
    }

    .menulist {
        position: absolute;
        top:50px;
        bottom: 0;
        overflow: hidden;
        z-index: 10;
        box-sizing: border-box;
    }

    .menulist .el-menu {
        background-color: #354052;
        moz-user-select: -moz-none;
        -moz-user-select: none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .menulist .el-submenu .el-menu {
        background-color: #1c2430;
    }

    .menulist .el-submenu__title {
        height: 45px;
        line-height: 45px;
        padding-left: 10px!important;
        color: #a7b4c3 !important;
    }

    .menulist .el-submenu li {
        padding-left: 30px !important;
        color: #a7b4c3 !important;
    }

    .menulist .el-submenu .el-menu-item {
        color: #98a1b0;
        background: transparent;
        font-size: 12px;
    }

    .menulist .el-submenu__title:hover {
        color: #118de4;
        background-color: #29313e;
    }

    .menulist .el-radio-button__inner {
        background: transparent;
        border-color: transparent;
        color: #fff;
    }

    .menulist .el-radio-button {
        width: 100%;
        text-align: center;
        padding-top: 6px;
    }
    .menulist .el-submenu li.is-active{
        color:#118de4!important;
    }

    .menulist .el-radio-button:first-child .el-radio-button__inner {
        border-color: transparent;
    }

    .menulist .el-radio-button__inner:hover {
        color: #FFF !important;
    }

    .menulist .el-menu-vertical-demo {
        height: 100%;
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        padding-bottom: 40px;
    }

    .menulist .el-submenu .el-menu-item {
        height: 40px;
        line-height: 40px;
    }

    .menulist .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 180px;
    }

    .menulist .el-radio-group {
        position: absolute;
        bottom: 0px;
        height: 40px;
        width: 99%;
        background: #1d2531
    }
    .el-submenu__title i{
        margin-right: 5px;
    }
    .el-submenu__title>span{
        font-weight: bold;
    }
    .el-submenu .el-menu-item{
        min-width: auto !important;
    }
</style>
