<template>
    <div class="history-buttons">
        <template>
            <div class="tabMenu" :class="{'active':tabsObj.activeIdx==index}" v-for="(item,index) in tabsObj.list"
                 @click="goCurrentTab(index)" :key="item.mark">
                <span>{{item.title}}</span>
                <template v-if="!z_param.isFinance">
                    <i v-show="index==0" class="place"> </i>
                    <i v-show="index!=0" class="close-button el-icon-circle-close" @click.stop="delTab(index)"></i>
                </template>
                <template v-else>
                    <i v-show="tabsObj.list.length==1" class="place"> </i>
                    <i v-show="tabsObj.list.length!=1" class="close-button el-icon-circle-close" @click.stop="delTab(index)"></i>
                </template>
            </div>
        </template>
    </div>
</template>


<script>

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

        },
        methods: {
            goCurrentTab(idx){

            },
            delTab(idx){

            }


        }
    };
</script>

<style lang="scss">
    .history-buttons {
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        display: -webkit-flex;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;
        .tabMenu {
            display: inline-block;
            margin-left: 10px;
            height: 30px;
            line-height: 30px;
            background: #d5eeff;
            color: #418fd8;
            border-radius:30px;
            &:first-child {
                margin-left: 0;
            }
            & > span {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                padding-left: 10px;
                padding-right: 5px;
                cursor: default
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
