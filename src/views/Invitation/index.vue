<template>
    <div class="blindBox" id="blindBox">
        <el-dialog
            title="填写钱包地址"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>
                <el-input v-model="input" class="input-set" placeholder="请输入钱包地址"></el-input>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- <div class="tip_box">
            <div class="details">
                <div class="details_item">
                  <div class="details_item_tip"></div>
                  <div class="details_item_box"></div>
                </div>
                <div class="details_item">
                  <div class="details_item_tip"></div>
                  <div class="details_item_box"></div>
                </div>
                <div class="details_item">
                  <div class="details_item_button details_item_button1" @click="centerDialogVisible = true">填写邀请地址</div>
                  <div class="details_item_button details_item_button2"></div>
                </div>
            </div>
        </div> -->
        <div class="details_item_button details_item_button1" @click="centerDialogVisible = true">填写邀请地址</div>
        <div>| 我的下级</div>
        <div>
            <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                prop="id"
                label="排序">
                </el-table-column>
                <el-table-column
                prop="address"
                label="邀请钱包地址">
                </el-table-column>
                <el-table-column
                prop="get"
                label="收益"
                width="180">
                </el-table-column>
                <el-table-column
                prop="timer"
                label="邀请时间">
                </el-table-column>
            </el-table>
        </div>
        <div class="paginaction">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name:'Invitation',
    data(){
        return {
            tableData: [{
                id:1,
                get: '222222',
                address: 'x0120200020',
                timer:"2016-05-02"
            }],
            centerDialogVisible: false,
            input:''
        }
    },
    methods:{
        tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    }
}
</script>

<style lang="scss" scoped>
   .details_item_button1{
    width: 164px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: #FFF333;
    box-shadow: 0px 3px 16px 1px rgba(0,0,0,0.09);
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    font-size: 16px;
    font-family: Segoe UI-Bold, Segoe UI;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
    border: 1px solid none;
    margin: 20px 0;
  }

  .blindBox{
    width: 980px;
    min-height: 600px;
    margin: 0 auto;
    position: relative;
    .tip_box{
      width: 980px;
      height: 152px;
      background: #FFFFFF;
      box-shadow: 0px 3px 16px 1px rgba(0,0,0,0.1);
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      position: relative;
      top: -20px;
      .details{
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        height: 152px;
        align-items: center;
        &_item{
          text-align: center;
          display: flex;
          flex-direction: column;
          font-size: 16px;
          font-family: Segoe UI-Regular, Segoe UI;
          font-weight: 400;
          color: #666666;
          -webkit-text-stroke: 1px rgba(0,0,0,0);
          &_box{
            margin-top: 22px;
          }
          &_tip{
            font-size: 20px;
            font-family: Segoe UI-Bold, Segoe UI;
            font-weight: bold;
            color: #000000;
            line-height: 0px;
            -webkit-text-stroke: 1px rgba(0,0,0,0);
            text-stroke: 1px rgba(0,0,0,0);
          }
          &_button{
            width: 164px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background: #FFF333;
            box-shadow: 0px 3px 16px 1px rgba(0,0,0,0.09);
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            font-size: 16px;
            font-family: Segoe UI-Bold, Segoe UI;
            font-weight: bold;
            color: #000000;
            cursor: pointer;
          }
          &_button1{
            border: 1px solid none;
          }
          &_button2{
            background:none;
            border: 1px solid #707070;
            margin-top: 24px;
          }

        }
      }
    }
    .paginaction{
        margin-top: 60px;
        display: flex;
        justify-content: center;
    }
  }
  .el-table .warning-row {
    background: oldlace;
  }
  .input-set{
    width: 347px;
    height: 36px;
    line-height: 36px;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

