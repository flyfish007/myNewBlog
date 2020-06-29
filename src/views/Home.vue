<template>
  <div class="home">
    home..
  </div>
</template>

<script>
    import 'echarts/lib/chart/pie'
    import {cloneDeep} from 'lodash';
export default {
  name: 'Home',
  components: {

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
