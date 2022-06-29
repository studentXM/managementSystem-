<template>
  <div class="common-table">
    <el-table :data="tabelData" height="650px" stripe>
      <el-table-column v-for="item in tabelLabel" :key="item.prop" :label="item.label"
        :width="item.width ? item.width : 125" show-overflow-tooltip>

        <template slot-scope="scope">
          <span style="margin-left: 10px;">{{ scope.row[item.prop] }}</span>
        </template>

      </el-table-column>

      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>

      </el-table-column>
    </el-table>
    <div class="page_div">
      <el-pagination class="pager" layout="prev,pager,next" :total="config.total" :current-page.sync="config.page"
        @current-change="changePage" :page-size="20">
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VueLearningCommonTabel',
  props: {
    tabelData: Array,
    tabelLabel: Array,
    config: Object,
    
  },
  data() {
    return {

    };
  },

  mounted() {
    console.log(this.tableLabel)
  },

  methods: {
    handleEdit(row) {
      this.$emit('edit', row);
      // console.log(handleEdit)
    },
    handleDelete(row) {
      this.$emit('del', row)
    },
    changePage(page) {
      this.$emit('changePage', page)
    }
  },
};
</script>

<style lang="less" scoped>
.common-table {
  height: calc(100% - 62px);
  background: #fff;
  position: relative;
  padding: 20px;
  border-radius: 10px;

  .page_div {
    width: 100%;
    display: flex;
    height: 20px;
    align-items: center;
    justify-content: right;
    margin-top: 20px;
  }

  .pager {
    position: relative;
    bottom: 0;
    right: 20px;
  }
}
</style>