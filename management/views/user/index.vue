<template>
  <div class="manage">
    <!-- <ty v-model="mess" /> -->
    <!-- <ty :value="mess" @diychange="test"></ty>
        <div>{{mess}}</div> -->
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sync="isShow">
      <common-form :formLabel="operateFormLabel" :form="operateForm" :inline="true" ref="form">
      </common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
      <common-form :formLabel="formLabel" :form="searchFrom" :inline="true" ref="form">
        <el-button type="primary" @click="getList(searchFrom.keyword)">
          搜索
        </el-button>
      </common-form>
    </div>

    <common-tabel :tabelData="tableData" :tabelLabel="tableLabel" :config="config" @changePage="getList()"
      @edit="editUser" @del="delUser"></common-tabel>
  </div>
</template>

<script>
import CommonForm from '../../src/components/CommonForm.vue'
import CommonTabel from '../../src/components/CommonTabel.vue'
import { getUser, deleteUser, createUser } from '../../api/data'
// import ty from '../../src/components/ty.vue'
export default {
  name: 'user',
  components: {
    CommonForm,
    CommonTabel,
    // ty
  },
  data() {
    return {
      isShow: false,
      mess: '测试',
      operateType: 'add',
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名',
          type: 'input'
        },
        {
          model: 'age',
          label: '年龄',
          type: 'input'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址',
          type: 'input'
        }
      ],
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: '',
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input'
        }
      ],
      searchFrom: {
        keyword: '',
      },
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sex',
          label: '性别'
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 200
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320
        },
      ],
      config: {
        page: 1,
        total: 30
      }
    };
  },

  mounted() {

  },

  methods: {
    confirm() {
      if (this.operateType === 'edit') {
        this.$http.post('/user/edit', this.operateForm).then(res => {
          this.isShow = false;
          console.log(res)
        })
      } else {
        // this.$http.post('/user/add', this.operateForm).then(res => {
          
        //   console.log(res)
          
        // })
       this.isShow = false;
        createUser(this.operateForm).then((res) => {
            console.log(res)
            
          })
          this.getList()
      }
    },
    addUser() {
      this.isShow = true;
      this.operateType = 'add';
      this.operateForm = {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: '',
      }

    },
    getList(name = "") {
      this.config.loading = true
      name ? (this.config.page = 1) : ''
      getUser({
        page: this.config.page,
        name
      }).then(({ data: res }) => {
        // 这里相当于取得res下面的data 然后再赋值给 res
        // 这样后面就能少写一个data
        console.log(res)
        this.tableData = res.list.map(item => {
          // 修改值
          item.sex = item.sex === 0 ? '女' : '男'
          // 返回最新值
          return item
        })
        this.config.total = res.count
        this.config.loading = false
      })
    },
    test(e) {
      this.mess = e
    },
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
    },
    delUser(row) {
      this.$confirm('此操作将永久删除该文件?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row)
        deleteUser({
          id: row.id
        }).then((res) => {
          console.log(res)
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getList()
        })
      })
    }

  },
  created() {
    this.getList()
  },
};
</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>