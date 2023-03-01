<template>
    <div class="mobile">
      <div class="title">
        辉戈一键发币
      </div>
    <el-card class="box-card formWidth">
        <div class="title">警告</div>
        正在使用私有测试网络！
        你的代币合约将被部署到私有测试网络。如果希望部署到辉戈主网，请切换到主网后刷新页面。
    </el-card>
    <el-card class="box-card formWidth">
        <div class="title">支付信息</div>
        <!-- <el-button @click="linkBag">连接钱包</el-button> -->
        <div class="autoMarn">
            <el-button class="address" v-if="MyAddress != ''">
            {{  $t('header.linkyes')+" : " }}{{MyAddress && MyAddress.replace(/(.{4}).*(.{3})/, '$1...$2') }}
            </el-button>
            <el-button class="address" v-if="MyAddress == ''" @click="linkBag()">
                <!-- 链接钱包 -->
                {{ $t('header.Link') }}
            </el-button>
        </div>
        <div v-if="MyAddress == ''">请连接MetaMask钱包</div>
    </el-card>
    <div class="title">
        <el-button round type="primary" @click="(()=>{ this.$router.go(-1) })">后退</el-button>
        <el-button round type="danger" @click="next">下一步</el-button>
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
              detail_box:null,
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
              }
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
          next(){
            if(this.MyAddress != ''){
                this.$router.push({ path: "tokenIndexEnd",query: {name:JSON.stringify(this.detail_box)} });
            }else{
                this.$message.error('请点击连接钱包确保余额，或者刷新网页')
            }
          },
          loginSuccessful (e) {
            this.MyAddress = e
            console.log('登录成功回来了')
            },
          linkBag(){
            this.LinkBNB()
            console.log('连接钱包')
          },

      },
      mounted(){
        this.detail_box = JSON.parse(this.$route.query.name);
        console.log('this.detail_box 1=',this.detail_box )
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