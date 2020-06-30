<template>
  <div class="home">
      <div class="cartWrap">
         <div class="cart" ref="receiveBar"> </div>
      </div>
  </div>
</template>

<script>
    import 'echarts/lib/chart/pie'
    import {cloneDeep} from 'lodash';
    import moment from 'moment';
    // 引入 ECharts 主模块
    import echarts from 'echarts'
export default {
  name: 'Home',
  components: {

  },
    data() {
        return {
            receiveBar:null,
            dateArr:[],
            barInitData:[],
            cartOptins:{
                tooltip : {
                    trigger: 'axis',
                    triggerOn:"click"
                },
                cartGrid:{
                    left:0,
                    right:0,
                    bottom:35,
                    top:30,
                    containLabel: true
                },
                cartLegend:{
                    bottom:0,
                    icon: "rect",
                    itemWidth: 20,
                    itemHeight: 10,
                    itemGap: 30
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {    //底部文字倾斜
//                            interval: 0,
//                            rotate:-25,
                        color:'#999',
                        fontSize:10
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine:{
                        lineStyle:{
                            color:"#999"
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {    //底部文字倾斜
                        color:'#999',
                        fontSize:10
                    },
                    nameTextStyle:{
                        color:'#999',
                        fontSize:10,
                        align: "left"
                    },
                    splitLine:{
                        lineStyle:{
                            color:"#ccc"
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:"#999"
                        }
                    },
                },
            },
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.setDateArr();

            //收件量
            let xAxisData=[];
            let seriesData=[];

            xAxisData=cloneDeep(this.dateArr);
            seriesData=[
                this.barInitData
            ]
            this.drawCartBar(xAxisData,seriesData)

        },

        setDateArr(){
            for(let i=1;i<8;i++){
                this.dateArr.push( moment(new Date()) .subtract((8-i), 'days').format('DD')+"日",);
                this.barInitData.push(0)

            }
        },
        drawCartBar(xAxisData,seriesData) {
            let grid=Object.assign(cloneDeep(this.cartOptins).cartGrid,{right:0});
            let toolTip=cloneDeep(this.cartOptins.tooltip);
            let legend=Object.assign(cloneDeep(this.cartOptins.cartLegend),{data:['收件量']});
            let xAxis=Object.assign(cloneDeep(this.cartOptins.xAxis),{ data: xAxisData});
            let yAxis=Object.assign(cloneDeep(this.cartOptins.yAxis),{ name:'收件量(件)'});
            console.log("xAxisData==>"+JSON.stringify(xAxisData));
            console.log("seriesData===>"+JSON.stringify(seriesData));
            this.receiveBar = echarts.init(this.$refs.receiveBar);
            this.receiveBar.setOption({
                legend: legend,
                color: ['#37A2DA'],
                tooltip:toolTip,
                grid:grid,
                xAxis: xAxis,
                yAxis: yAxis,
                series: [
                    {
                        name:'收件量',
                        barMaxWidth:25,
                        data: seriesData,
                        type: 'bar',
                    }
                ]
            })
        }

    }
}
</script>
<style lang="scss">
    .cartWrap{
        padding:15px 0;
        background: #fff;
        height: 275px;
        .cart {
            width:100vw;
            padding:0 12px;
            height: 220px;
            & > div:first-child ,&>div canvas{
                width: 100% !important;
                height: 220px !important;
            }

        }
    }
</style>
