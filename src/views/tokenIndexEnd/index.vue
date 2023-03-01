<template>
    <div class="mobile">
      <div class="title">
          辉戈一键发币
      </div>
    <el-card class="box-card formWidth">
        <div class="title">请确认代币发行参数</div>
        <ul>
            <li>代币类型: BEP-20</li>
            <li>代币名称: {{ detail_box.name }}</li>
            <li>代币符号: {{ detail_box.region }}</li>
            <li>小数位数: {{ detail_box.point }}</li>
            <li>总发行量: {{ detail_box.num }}</li>
            <li> 发行费付款账号: 0xEA799b113696200Ff03003c095369DC3b01cf77f</li>
            <li>代币所有者账号: 0xEA799b113696200Ff03003c095369DC3b01cf77f</li>
            <li>发行费: -1 BNB (及矿工费用</li>
        </ul>
    </el-card>
    <div class="title">
        <el-button round type="primary" @click="(()=>{ this.$router.go(-1) })">取消</el-button>
        <el-button round type="danger" @click="enter">确认</el-button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'tokenIndexNext',
      data(){
          return {
              labelPosition: 'right',
              MyAddress:'',
              formLabelAlign: {
                  name: '',
                  region: '',
                  point: '',
                  num:''
              },
              rules: {
                  name: [
                      { required: true, message: '请输入代币名称', trigger: 'blur' },
                      { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                  ],
                  region: [
                      { required: true, message: '请输入代币符号', trigger: 'blur' }
                  ],
                  point: [
                      { required: true, message: '3~4英文字符,例如ETH,BTC,BAT等,不可包含空格', trigger: 'blur' }
                  ],
                  num: [
                      { required: true, message: '代币的小数位数,0~18位，大多数代币选择18位小数', trigger: 'blur' }
                  ]
              },
              detail_box:null
          }
      },
      methods:{
          submitForm(formName) {
              this.$refs[formName].validate((valid) => {
              if (valid) {
                  alert('submit!');
              } else {
                  console.log('error submit!!');
                  return false;
              }
              });
          },
          enter(){
            this.$loading(2000)
          },
          loginSuccessful (e) {
            this.MyAddress = e
            console.log('登录成功回来了')
            },
          linkBag(){
            this.LinkBNB()
            console.log('连接钱包')
          }
      },
      mounted(){
        this.detail_box = JSON.parse(this.$route.query.name);
        console.log('this.detail_box2=',this.detail_box)
      }
  }
  </script>
  
  <style scoped lang="scss">
  // @media only screen and (max-width: 780px) {
    $design-width:750; //设计稿width
    @function pxttrem($px) {
      @return $px/$design-width*23.4375+rem;//23.4375
    }
    .title{
      font-size: pxttrem(25);
      margin: pxttrem(25);
      color: #606266;
    }
    .content{
      font-size: pxttrem(16);
      margin: pxttrem(10) pxttrem(0);
      color: #606266;
    }
    .formWidth{
      width: pxttrem(600);
      margin: pxttrem(25) auto;
    }
    .autoMarn{
        margin: pxttrem(25);
    }
  // }
  </style>