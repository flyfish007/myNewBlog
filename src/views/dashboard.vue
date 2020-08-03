<template>
   <div>
       <ul class="sz-search-box">
           <li>
               <label> 采购时间: </label>
               <el-date-picker
                       v-model="value1"
                       size="small"
                       type="daterange"
                       range-separator="至"
                       start-placeholder="开始日期"
                       end-placeholder="结束日期">
               </el-date-picker>
           </li>
           <li>
               <label> 供应商名称: </label>
               <el-input v-model="input"  size="small"></el-input>
           </li>
           <li>
               <label> 抽检方式: </label>
               <el-select v-model="type" placeholder="请选择"  size="small">
                   <el-option
                           v-for="item in options"
                           size="small"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                   </el-option>
               </el-select>
           </li>
           <li>
               <label> 分发状态: </label>
               <el-select v-model="type" placeholder="请选择"  size="small">
                   <el-option
                           v-for="item in options"
                           size="small"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                   </el-option>
               </el-select>
           </li>
           <li>
               <el-button  size="small" icon="el-icon-search"  type="primary">查询</el-button>
           </li>
       </ul>
       <div class="tableWrap">
           <el-table
                   ref="multipleTable"
                   :data="tableData"
                   tooltip-effect="dark"
                   style="width: 100%"
                   border
                   @selection-change="handleSelectionChange">
               <!--<el-table-column type="index" label="序号" align="center"/>-->
               <el-table-column
                       type="selection"
                       width="55">
               </el-table-column>
               <el-table-column
                       label="采购订单号"
                       prop="code1"
                       width="100"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="code2"
                       label="采购订单行编号"
                       width="130"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="code3"
                       label="供应商编码"
                       width="95"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="company"
                       label="供应商名称"
                       width="100"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="classes"
                       label="物资分类"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="code4"
                       label="物料编号"
                       width="130"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="goodsName"
                       label="物料名称"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="goodsClass"
                       label="物料组"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="num"
                       label="物料数量"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="type"
                       label="计量单位"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="descType"
                       label="抽检方式"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="status"
                       label="分发状态"
                       show-overflow-tooltip>
               </el-table-column>
           </el-table>
           <div class="pageWraper">
               <el-pagination
                       background
                       layout="prev, pager, next"
                       :total="1000">
               </el-pagination>
           </div>
       </div>
   </div>

</template>

<script>

export default {
  name: 'dashboard',
    data() {
        return {
            tableData: [{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            },{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            },{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            },{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            },{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            },{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            },{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            },{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            },{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            },{
                code1: 'x0000000000001',
                code2: 'D453500001',
                code3: 'D67078908989',
                company:'宏伟电子商务',
                classes:'电器',
                code4:'8078078075544' ,
                goodsName:'冰箱',
                goodsClass:'家用电器',
                num:'4',
                type:'件',
                descType:'随机',
                status:'已处理'

            }],
            multipleSelection: [],
            value1:'',
            input:'',
            type:-1,
            options:[
                {
                    value:-1,
                    label:'全部'
                },
                {
                    value:1,
                    label:'随机'
                }
            ]
        }
    },

    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection)
        }
    }
}
</script>
<style lang="scss" scoped>
    .pageWraper{
        display: flex;
        justify-content: flex-end;
        margin-top:25px;
    }
</style>
