<template>
   <div>
       <ul class="sz-search-box">
           <li>
               <label> 时间 </label>
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
               <el-table-column
                       type="selection"
                       width="55">
               </el-table-column>
               <el-table-column
                       label="物料编码号"
                       prop="code"
                       width="200"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="desc"
                       label="物料描述"
                       show-overflow-tooltip>
               </el-table-column>
               <el-table-column
                       prop="company"
                       label="厂家"
                       width="300"
                       show-overflow-tooltip>
               </el-table-column>
           </el-table>
       </div>
   </div>

</template>

<script>

export default {
  name: 'dashboard',
    data() {
        return {
            tableData: [{
                code: 'x00001',
                desc: '随着新冠疫情在世界第二人口大国加速蔓延，印度突破了一个曾经难以想象的门槛：确诊病例过百万，加入了美国和巴西组成的这个没有国家愿意加入的俱乐部。',
                company: '美国《华盛顿邮报》'
            },{
                    code: 'x00001',
                    desc: '随着新冠疫情在世界第二人口大国加速蔓延，印度突破了一个曾经难以想象的门槛：确诊病例过百万，加入了美国和巴西组成的这个没有国家愿意加入的俱乐部。',
                    company: '美国《华盛顿邮报》'
                },{
                code: 'x00002',
                desc: '随着新冠疫情在世界第二人口大国加速蔓延，印度突破了一个曾经难以想象的门槛：确诊病例过百万，加入了美国和巴西组成的这个没有国家愿意加入的俱乐部。',
                company: '美国《华盛顿邮报》'
            },{
                code: 'x00003',
                desc: '随着新冠疫情在世界第二人口大国加速蔓延，印度突破了一个曾经难以想象的门槛：确诊病例过百万，加入了美国和巴西组成的这个没有国家愿意加入的俱乐部。',
                company: '美国《华盛顿邮报》'
            }],
            multipleSelection: [],
            value1:''
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

</style>
