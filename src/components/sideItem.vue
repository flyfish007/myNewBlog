<template>
    <div class="menulist">
        <el-menu class="el-menu-vertical-demo"  @select="excuteRouter"
                 :collapse="isCollapse" :unique-opened="true" ref="elMenus" @open="isopen" @close="isclose">
            <template v-for="menuOne in menus">
                <el-submenu
                  :index="menuOne.key+''"
                  :keyName="menuOne.key" :key="menuOne.key+''">
                    <template slot="title">
                        <i class="el-icon-minus"></i>
                        <i v-else
                           :class="{
                            'el-icon-plus': !(menuOne.key == isChoose),
                            'el-icon-minus': menuOne.key == isChoose,
                            }"
                        ></i>
                        <span v-text="menuOne.name" slot="title"></span>
                    </template>
                    <template v-for="(twoMenu, index) in menuOne.subMenus">
                        <el-menu-item
                                :style="{color: twoMenu.important ? '#d63434 !important' : '#a7b4c3'}"
                                :index="twoMenu.key+''"
                                :ref="twoMenu.key"
                                :key="index">
                            {{ twoMenu.important ? '※'+twoMenu.title : twoMenu.title}}
                            <img v-if="twoMenu.icon == 'new'" src="@/assets/images/new.gif" width="30px" style="margin-left:4px;"/>
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

    export default {
        name: "sideItem",
        data() {
            return {

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
            isCollapse: {
                get() {
                    return this.$store.state.menus.storeIsCollapse;
                },
                set(val) {
                    this.$store.state.menus.storeIsCollapse = val
                }
            }
        },
        methods: {
            isopen(val) {
                this.$store.commit('setChoose', val);
            },
            isclose(val) {
                this.$store.commit('setChoose', 0);
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
        padding-top: 50px;
        height: 100%;
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
        color: #a7b4c3 !important;
        padding-left: 0px !important;
    }

    .menulist .el-submenu li {
        padding-left: 33px !important;
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
</style>
