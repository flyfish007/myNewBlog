<template>
    <div class="history-buttons">
        <template>
            <div class="tabMenu" :class="{'active':tabsObj.activeIdx==index}" v-for="(item,index) in tabsObj.list"
                 @click="goCurrentTab(index)" :key="item.mark">
                <span>{{item.title}}</span>
                <template>
                    <i v-show="index!=0" class="close-button el-icon-circle-close" @click.stop="delTab(index)"></i>
                </template>
            </div>
        </template>
    </div>
</template>


<script>
    import {mapGetters, mapMutations} from "vuex"
    export default {
        name: "tabItem",
        data() {
            return {};
        },
        created() {

        },
        beforeDestroy() {

        },
        mounted() {

        },
        watch: {

        },
        computed: {
            ...mapGetters(['tabsObj'])
        },
        methods: {
            ...mapMutations(['setTabsObj','setMenusActiveIdx']),
            delTab(idx) {
                // console.log("idx===>" + idx);
                let tempList = this.tabsObj.list;
                tempList.splice(idx, 1);
                let tabsTemp = Object.assign(this.tabsObj, {list: tempList})
                this.setTabsObj(tabsTemp);
                //删除，到前一页
                let goTab=tempList[idx-1];

                this.$router.push({
                    path: goTab.path,
                });
            },
            goCurrentTab(idx) {
                let tabName = this.tabsObj.list[idx].tabName;
                //切换tab状态
                let tabsTemp = Object.assign(this.tabsObj, {activeIdx: idx});
                this.setTabsObj(tabsTemp);

                //切换当前平台对应的iframe  && 跳转刷新对应iframe

                this.$router.push({
                    path: tabsTemp.path,
                });

                //更新manueSlide 的值与当前manue active的位置

                this.setMenusActiveIdx(this.tabsObj.list[idx].key);

            },


        }
    };
</script>

<style lang="scss">
    .history-buttons {
        position: absolute;
        top:5px;
        left: 5px;
        right: 5px;
        display: -webkit-flex;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;
        .tabMenu {
           display: flex;
            align-items: center;
            margin-left: 10px;
            height: 30px;
            line-height: 30px;
            background: #d5eeff;
            color: #418fd8;
            border-radius:5px;
            &:first-child {
                margin-left: 0;
            }
            & > span {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                padding-left: 10px;
                padding-right: 10px;
                cursor: default;
                white-space: nowrap;
            }
            &:hover {
                background: #d5eeff;
                color: #418fd8
            }
            &.active {
                background: #49abef;
                color: #fff;
            }
            .place{ width:5px; height: 13px; display: inline-block; }
        }

        .close-button {
            cursor: pointer;
            padding-right: 8px
        }
    }

</style>
