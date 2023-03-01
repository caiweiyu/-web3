<template>
  <div class="mobile">
    <i class="el-icon-s-fold kou" @click="openLeft">
    </i>
    <div class="title">
        首页
    </div>
    <div class="home"></div>
    <div :class="['box','pageHome',status ? 'active' : '']">
        <ul class="box-ul">
            <li class="left">
                <img class="img" src="../../assets/images/index/oo.png" alt="">
                <div class="name">TRX/DBK</div>
            </li>
            <li :class="['avter',status ? 'active1' : '']" @click="open"></li>
        </ul>
        <ul class="box-ul">
            <li class="leftfont">ARY</li>
            <li class="rightfont">161.73%</li>
        </ul>
        <ul class="box-black">
            <li class="box-black-left">
                <div>已经质押</div>
                <div class="font">0</div>
                <div>质押获得的算力：0.00000</div>
            </li>
            <li class="box-black-right" @click="redemption">赎回</li>
        </ul>
        <div class="btn" @click="hashrate">你将获得120%的算力</div>
        <ul class="box-black box-black2">
            <li class="box-black-left">
                <!-- <div>已经质押</div> -->
                <div class="font2">0</div>
                <div>质押获得的算力：0.00000</div>
            </li>
            <li class="box-black-right2" @click="redemptionMax">MAX</li>
        </ul>
        <div class="tip">余额不足?添加流动性</div>
        <el-input placeholder="请输入数量" @change="insetChange(input)" v-model="input" class="input"></el-input>
    </div>
    <div :class="['box','pageHome',secondStatus ? 'active' : '']">
        <ul class="box-ul">
            <li class="left">
                <img class="img" src="../../assets/images/index/uu.png" alt="">
                <div class="name">TRX/DBK</div>
            </li>
            <li :class="['avter',secondStatus ? 'active1' : '']" @click="openSecond"></li>
        </ul>
        <ul class="box-ul">
            <li class="leftfont">ARY</li>
            <li class="rightfont">161.73%</li>
        </ul>
        <ul class="box-black">
            <li class="box-black-left">
                <div>已经质押</div>
                <div class="font">0</div>
                <div>质押获得的算力：0.00000</div>
            </li>
            <li class="box-black-right" @click="redemption">赎回</li>
        </ul>
        <div class="btn" @click="hashrate">你将获得120%的算力</div>
        <ul class="box-black box-black2">
            <li class="box-black-left">
                <!-- <div>已经质押</div> -->
                <div class="font2">0</div>
                <div>质押获得的算力：0.00000</div>
            </li>
            <li class="box-black-right2" @click="redemptionMax">MAX</li>
        </ul>
        <div class="tip">余额不足?添加流动性</div>
        <el-input placeholder="请输入数量" @change="insetChange(input)" v-model="input" class="input"></el-input>
    </div>
    <div :class="['leftBox',leftStatus ? 'activeFocus' : '']">
        <div class="leftBox-left">
            <div class="leftBox-left-header">
                <ul class="leftBox-left-header-top">
                    <li class="leftBox-left-header-top-left">Address</li>
                    <li class="leftBox-left-header-top-right">
                        <div class="address" v-if="MyAddress != ''">
                            {{  $t('header.linkyes')+" : " }}{{MyAddress && MyAddress.replace(/(.{4}).*(.{3})/, '$1...$2') }}
                            </div>
                        <div class="address" v-if="MyAddress == ''" @click="LoginQb()">
                            <!-- 链接钱包 -->
                            {{ $t('header.Link') }}
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="leftBox-left-ul">
                <li @click="routerFn(item.name)" class="leftBox-left-ul-li" v-for="(item,index) in list" :key="index">
                    <img :src="item.img" alt="">
                    <div>{{ item.name }}</div>
                </li>
            </ul>
        </div>
        <div class="leftBox-right" @click="openLeft">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'tokenIndex',
    data(){
        return {
            status:false,
            secondStatus:false,
            input:"",
            leftStatus:false,
            MyAddress:'',
            list:[
                {img:require('../../assets/images/index/1.png'),name:'BGC',other:""},
                {img:require('../../assets/images/index/2.png'),name:'项目介绍',other:""},
                {img:require('../../assets/images/index/3.png'),name:'白皮书',other:""},
                {img:require('../../assets/images/index/4.png'),name:'购买治理节点',other:""},
                {img:require('../../assets/images/index/5.png'),name:'我的社区',other:""},
                {img:require('../../assets/images/index/6.png'),name:'分享好友',other:""},
                {img:require('../../assets/images/index/7.png'),name:'基金会',other:""},
                {img:require('../../assets/images/index/8.png'),name:'我的资产',other:""},
                {img:require('../../assets/images/index/9.png'),name:'语言设置',other:""},
                {img:require('../../assets/images/index/10.png'),name:'元宇宙',other:""},
                {img:require('../../assets/images/index/11.png'),name:'系统公告',other:""}
            ]
        }
    },
    methods:{
        openLeft(){
            this.leftStatus = !this.leftStatus
        },
        open(){
            this.status = !this.status
            console.log('打开')
        },
        openSecond(){
            this.secondStatus = !this.secondStatus
        },
        redemption(){
            this.$message.warning('赎回')
        },
        hashrate(){
            this.$message.warning('算力')
        },
        redemptionMax(){
            this.$message.warning('输入最大值')
        },
        insetChange(data){
            this.$message.success('正在输入...'+data)
        },
        routerFn(data){
            this.$message.success(data)
            this.leftStatus = !this.leftStatus
        },
        loginSuccessful (e) {
            this.MyAddress = e
            console.log('登录成功回来了')
        },
        LoginQb () {
            this.LinkBNB()
        }
    },
    mounted(){
        this.LinkBNB()()
    }
}
</script>

<style scoped lang="scss">
// @media only screen and (max-width: 780px) {
  $design-width:750; //设计稿width
  @function pxttrem($px) {
    @return $px/$design-width*20.06817+rem;//23.4375
  }
  .mobile{
    width: 100vw;
    min-height: 100vh;
    background: #000000;
    .title{
        text-align: center;
        line-height: pxttrem(75);
        font-size: pxttrem(36);
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
    }
    .kou{
        width: pxttrem(70);
        height: pxttrem(70);
        position: absolute;
        top: 0;
        left: 0;
        font-size: pxttrem(70);
        font-weight: 200;
        color: #fff;
        z-index: 0;
    }
    .home{
        width: pxttrem(694);
        height: pxttrem(240);
        margin: 0 auto;
        background: url('../../assets/images/index/logo.png')no-repeat center;
        background-size: 100% 100%;
    }
    .pageHome{
        height: pxttrem(219);
        overflow: hidden;
        transition: all .3s ease-in;
    }
    .pageHome2{
        height: pxttrem(219);
    }
    .active{
        height: pxttrem(997);
    }
    .box{
        width: pxttrem(694);
        background: #1B1B1B;
        margin: pxttrem(30) auto 0;
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        &-ul{
            display:flex;
            justify-content: space-between;
            align-items: center;
            li{
               display: flex;
               align-items: center;
            }
            .left{
                margin: pxttrem(27) 0 0 pxttrem(32);
            }
            .avter{
                width: pxttrem(32);
                height: pxttrem(32);
                background: url('../../assets/images/index/top.png')no-repeat center;
                background-size: 100% 100%;
                margin: pxttrem(27) pxttrem(32) 0 0;
                transition: all .3s ease-in;
                cursor: pointer;
            }
            .active1{           
                transform: rotate(-180deg);
            }
            .img{
                width: pxttrem(72);
                height: pxttrem(72);
            }
            .name{
                font-size: pxttrem(36);
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                color: #FFFFFF;
                margin-left: pxttrem(20);
            }
            .leftfont{
                font-size: pxttrem(28);
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #707070;
                margin: pxttrem(40) 0 0 pxttrem(124);
            }
            .rightfont{
                font-size: pxttrem(28);
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #DEB878;
                margin: pxttrem(40) pxttrem(32) 0 0;
            }
        }
        &-black{
            margin: pxttrem(40) auto 0;
            width: pxttrem(630);
            height: pxttrem(233);
            background: #000000;
            border-radius: pxttrem(4) pxttrem(4) pxttrem(4) pxttrem(4);
            opacity: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-left{
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                color: #fff;
                height: 100%;
                font-size: pxttrem(28);
                margin-left: pxttrem(28);
                .font{
                    color: rgba(222, 184, 120, 1);
                }
                .font2{
                    font-size: pxttrem(40);
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #999999;
                }
            }
            &-right{
                margin-right: pxttrem(30);
                font-size: pxttrem(28);
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #F2D7A9;
                width: pxttrem(140);
                height: pxttrem(70);
                line-height: pxttrem(70);
                text-align: center;
                border-radius: pxttrem(60) pxttrem(60) pxttrem(60) pxttrem(60);
                opacity: 1;
                border: pxttrem(2) solid #F2D7A9;
            }
            &-right2{
                font-size: pxttrem(28);
                font-family: PingFang SC-Medium, PingFang SC;
                font-weight: 500;
                color: #936735;
                width: pxttrem(120);
                height: pxttrem(60);
                line-height: pxttrem(60);
                text-align: center;
                margin: pxttrem(99) pxttrem(30) 0 0;
                background: linear-gradient(131deg, #F2E0BF 0%, #D8B36E 100%);
                border-radius: 35px 35px 35px 35px;
                opacity: 1;
            }
        }
        &-black2{
            height: pxttrem(187) !important;
        }
        .btn{
            margin: pxttrem(30) auto 0;
            font-size: pxttrem(28);
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            color: #936735;
            width: pxttrem(630);
            height: pxttrem(80);
            line-height: pxttrem(80);
            text-align: center;
            background: linear-gradient(131deg, #F2E0BF 0%, #D8B36E 100%);
            border-radius: pxttrem(4) pxttrem(4) pxttrem(4) pxttrem(4);
            opacity: 1;
        }
        .tip{
            margin: pxttrem(30) 0 0 pxttrem(35);
            font-size: pxttrem(28);
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #F2D7A9;
        }
        .input{
            display: block;
            margin: pxttrem(30) auto 0;
            font-size: pxttrem(28);
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #fff;
            width: pxttrem(630);
            height: pxttrem(88);
            line-height: pxttrem(88);
            text-align: center;
            border-radius: pxttrem(4) pxttrem(4) pxttrem(4) pxttrem(4);
            opacity: 1;
        }
        /deep/ .el-input__inner::placeholder {
            color: #999999;
            text-align: center;
        }
        /deep/ .el-input__inner{
            background: #000000 !important;
            border: none !important;
            color: #fff;
            font-size: pxttrem(32);
        }

    }
  }
  .leftBox{
    position: fixed;
    display: flex;
    top: 0;
    z-index: 1;
    width: pxttrem(0);
    min-height: 100vh;
    // background: red;
    transition: all .3s ease-in;
    overflow: hidden;
    &-left{
        width: 75%;
        min-height: 100vh;
        background: #000000;
        &-header{
            width: pxttrem(514);
            height: pxttrem(257);
            margin:pxttrem(100) 0 pxttrem(30) pxttrem(28);
            background: linear-gradient(134deg, #DDAF62 0%, #F4E1B6 100%);
            box-shadow: pxttrem(11) pxttrem(14) pxttrem(13) pxttrem(1) rgba(236,208,153,0.41);
            border-radius: pxttrem(8) pxttrem(8) pxttrem(8) pxttrem(8);
            opacity: 1;
            &-top{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                &-left{
                    margin: pxttrem(31) 0 0 pxttrem(32);
                    font-size: pxttrem(56);
                    font-family: PingFang SC-Heavy, PingFang SC;
                    font-weight: 800;
                    color: #783D0D;
                }
                &-right{
                    margin: pxttrem(31) 0 0 pxttrem(32);
                    font-size: pxttrem(28);
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #783D0D;
                }
            }
        }
        &-ul{
            display: flex;
            flex-direction: column;
            height: calc(100vh - 10.35518rem );
            // height: pxttrem(387);
            overflow: auto;
            &-li{
                display: flex;
                align-items: center;
                padding: pxttrem(35) 0;
                cursor: pointer;
                // margin-top: pxttrem(25);
                // height: pxttrem(80);
                // line-height: pxttrem(80);
                img{
                    margin: pxttrem(0) pxttrem(20) 0 pxttrem(32);
                    width: pxttrem(32);
                    height: pxttrem(32);
                }
                div{    
                    font-size: pxttrem(28);
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                }
            }
        }
    }
    &-right{
        width: 25%;
        min-height: 100vh;
        background: rgba(0, 0, 0, 0.1);
    }
  }
  .activeFocus{
    width: 100vw;
  }
// }
</style>