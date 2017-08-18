<template>
  <el-table
    :row-class-name="red"
    :data="dataItem"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="ftime"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="location"
      label="当前城市"
      width="180">
    </el-table-column>
    <el-table-column
      prop="context"
      label="详细地址">
    </el-table-column>
  </el-table>
    <!--:row-class-name="red">-->
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
      props:['dataItem'],
    methods:{
          red(row,index){
              if(index==0){
                return 'info-row';
              }
          }
    }
  }
</script>
<style>
  .el-table .info-row {
    background: #c9e5f5;
  }
</style>
