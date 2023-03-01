<template>
    <div>
        <div class="layout">
        <!-- 左边工具栏 -->
        <div class="sidebar">
          <!-- <div class="projectName">{{ $route.meta.title || 'Chaoplay Blessing Bag'}}</div> -->
          <div class="sidebar-container">
            <div class="projectName">
              <img class="logo" src="@/assets/images/home/home_logo.png" alt="" />
              <div class="searh">
                <input type="text" class="input-set" v-model="input" placeholder="搜索NFT">
                <div class="button" @click="search(input)">搜索</div>
              </div>
            </div>
            <div class="nav">
              <a
                :href="'#' + item.path"
                :class="['navItem',crrent==index?'navActive':'']"
                v-for="(item, index) in routerList"
                :key="index"
                @click=hanlder(index)
              >
                <img :src="item.icon" v-if="index==1" alt="" />
                <span>{{ item.name }}</span>
              </a>
            </div>
            <div class="left-item">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  <!-- {{$t('username')}} -->
                  {{ shift_lang }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="zh_CN">{{$t('header.chinese')}}</el-dropdown-item>
                  <el-dropdown-item command="en_US">{{$t('header.english')}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <div class="layout-head">
                <div class="address" v-if="MyAddress != ''">
                  {{ MyAddress && MyAddress.replace(/(.{8}).*(.{8})/, '$1...$2') }}
                </div>
                <div class="address" v-if="MyAddress == ''" @click="LoginQb()">
                  <!-- 链接钱包 -->
                  Linked wallet
                </div>
              </div>
            </div>
          </div>
          <img
            src="@/assets/images/openNavBtn.png"
            class="openNavBtn"
            @click="routerBoxShow = !routerBoxShow"
          />
        </div>
        <!-- 移动端侧边导航 -->
        <div
          class="mobile-routerBox"
          v-show="routerBoxShow"
          @click="routerBoxShow = false"
        >
          <div class="routerBox" @click.stop="">
            <a
              :href="'#' + item.path"
              :class="['routerItem',crrent==index ? 'active' : '']"
              v-for="(item, index) in routerList"
              :key="index"
              @click="hanlder(index)"
            >
              <div>
                <!-- <img :src="item.icon" alt="" /> -->
                <span>{{ item.name }}</span>
              </div>
              <img
                src="@/assets/images/right.png"
                v-if="$route.path != item.path"
                class="rightIcon"
              />
            </a>
            <!-- <a> 
              <div>
                <span>{{ '切换语言' }}</span>
              </div>
            </a> -->
          </div>
        </div>
        <!-- 右边主体 -->
        <main>
          <!-- <head></head> -->
          <!-- <div class="layout-head">
            <div class="address" v-if="MyAddress != ''">
              {{ MyAddress.replace(/(.{8}).*(.{8})/, '$1...$2') }}
            </div>
            <div class="address" v-if="MyAddress == ''" @click="LoginQb()">
              Linked wallet
            </div>
          </div> -->
  
          <div class="content">
            <router-view></router-view>
          </div>
        </main>
        <Bottom></Bottom>
        <!-- 注册弹窗 -->
        <div class="registerModel" v-if="WhetherToregister">
          <div class="Registerpopup">
            <div class="registerTitle">注册</div>
            <div class="lable">邀请人地址</div>
            <input
              type="text"
              placeholder="请输入邀请人地址"
              v-model="InviteAddress"
            /><br />
            <div class="btns">
              <button class="btn" @click="WhetherToregister = false">取消</button>
              <button class="btn" @click="ConfirmRegistration()">确定</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-layout">
          <div class="mobile-layout-header">
            <img class="logo" src="@/assets/images/home/home_logo.png" alt="" />
            <div class="searh">
                <input type="text" class="input-set" v-model="input" placeholder="搜索NFT">
                <div class="button" @click="search(input)"><i class="el-icon-search"></i></div>
            </div>
            <img
              src="@/assets/images/openNavBtn.png"
              class="openNavBtn"
              @click="routerBoxShow = !routerBoxShow"
            />
          </div>
                <!-- 右边主体 -->
          <main>
            <!-- <head></head> -->
            <!-- <div class="layout-head">
              <div class="address" v-if="MyAddress != ''">
                {{ MyAddress.replace(/(.{8}).*(.{8})/, '$1...$2') }}
              </div>
              <div class="address" v-if="MyAddress == ''" @click="LoginQb()">
                Linked wallet
              </div>
            </div> -->
  
            <div class="content">
              <router-view></router-view>
            </div>
          </main>
          <!-- <Bottom v-if="['/buyDetail','/auctionDetail'].indexOf(router_name) == -1"></Bottom> -->
          <div
              class="mobile-routerBox"
              v-show="routerBoxShow"
              @click="routerBoxShow = false"
            >
              <div class="routerBox" @click.stop="">
                <a
                  :href="'#' + item.path"
                  :class="['routerItem',crrent==index ? 'active' : '']"
                  v-for="(item, index) in routerList"
                  :key="index"
                  @click="hanlder(index)"
                >
                  <div>
                    <!-- <img :src="item.icon" alt="" /> -->
                    <span>{{ item.name }}</span>
                  </div>
                  <img
                    src="@/assets/images/right.png"
                    v-if="$route.path != item.path"
                    class="rightIcon"
                  />
                </a>
                <a class="routerItem" @click="changeLang"> 
                  <div>
                    <!-- <img :src="item.icon" alt="" /> -->
                    <span>{{ $t(`home.switchLang`) }}</span>
                  </div>
                </a>
              </div>
            </div>
            <el-dialog
              title=""
              :visible.sync="dialogVisible"
              width="60%"
              >
              <el-radio-group @input="selectradio(radio2)" v-model="radio2" size="medium">
                <el-radio-button label="zh_CN" >{{$t('header.chinese')}}</el-radio-button>
                <el-radio-button label="en_US">{{$t('header.english')}}</el-radio-button>
              </el-radio-group>
            </el-dialog>
       </div>
    </div>
  </template>
  
  <script>
  import './mobile.css'
  // import { Swiper, SwiperSlide } from 'swiper';
  // Import Swiper styles
  // import 'swiper/css';
  // import 'swiper/css/pagination';
  import Bottom from '../../components/bottom.vue'
  import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
  import Swiper from 'swiper';
  export default {
    name: 'layout',
    data () {
      return {
        // modules: [Pagination],
        routerList: [
          {
            //name: '首页',
            name:this.$t('header.home'),
            path: '/home',
            icon: require('../../assets/images/nav/home.png')
          },
          {
            //name: '私募',
            name:this.$t('header.nftMarket'),
            path: '/Privateplacement',
            icon: require('../../assets/images/fire.png')
          },
          {
            name: this.$t('header.nftAuction'),
            path: '/farms',
            icon: require('../../assets/images/nav/farms.png')
          },
          // {
          //   name: 'NFT market',
          //   path: '/nftMarket',
          //   icon: require('../../assets/images/nav/nftMarket.png')
          // },
          {
            // name: 'NFT 盲盒',
            name:this.$t('header.personalCenter'),
            path: '/blindBox',
            icon: require('../../assets/images/nav/blindBox.png')
          },
          //  {
          //   name: 'NFT 挖矿',
          //   path: '/mining',
          //   icon: require('../../assets/images/nav/mining.png')
          // },
          // {
          //   name: '铸造',
          //   path: '/Casting',
          //   icon: require('../../assets/images/nav/Casting.png')
          // },
          // {
          //   name: 'Game fi',
          //   path: '/gameFi',
          //   icon: require('../../assets/images/nav/gameFi.png')
          // },
          // {
          //   //name: '项目介绍',
          //   name:'Project introduction',
          //   path: '/projectInfo',
          //   icon: require('../../assets/images/nav/projectInfo.png')
          // },
          {
            // name: '我的社区',
            name:this.$t('header.aboutUs'),
            path: '/myCommunity',
            icon: require('../../assets/images/nav/myCommunity.png')
          },
          // {
          //   // name: '基金会',
          //   name:'foundation',
          //   path: '/foundation',
          //   icon: require('../../assets/images/nav/foundation.png')
          // },
          // {
          //   // name: '元宇宙',
          //   name:'metaverse',
          //   path: '/yuanUniverse',
          //   icon: require('../../assets/images/nav/yuanUniverse.png')
          // }
        ],
        routerBoxShow: false,
        MyAddress: '', // 我的地址
        InviteAddress: '', //邀请地址
        WhetherToregister: false, //是否注册
        input:'',
        list:[],
        router_name:'',
        crrent:0,
        dialogVisible:false,
        radio2:localStorage.getItem('lang') || 'zh_CN'
      }
    },
    components:{
      Bottom
    },
    watch: {
      $route (to,from) {
        this.router_name = to.path;
        console.log(this.router_name,this.router_name == '/buyDetail')
        if (
          this.$route.path === '/blindBox' ||
          this.$route.path === '/blindBoxInfo'
        ) {
          document.querySelector('.layout').style.background = '#1d2329'
        } else {
          document.querySelector('.layout').style.background =
            'linear-gradient(180deg, #a1c4fd, #c2e9fb)'
        }
      }
    },
    computed: {
      shift_lang(){
        let data = localStorage.getItem('lang')
        if(data=='zh_CN' || data==undefined){
          return this.$t('header.chinese')
        }else{
          return this.$t('header.english')
        }
      }
    },
    mounted () {
      console.log('登录')
      this.LinkBNB()
      this.myswiper()
    },
  
    methods: {
      selectradio(data){
        console.log('选中的值',data)
        localStorage.setItem('lang',data);
        location.reload()
      },
      //切换语言
      changeLang(){
        this.dialogVisible = true
      },
      //搜索
      search(tokenId){
        this.$router.push({ path: "home"});
        const APIURL = 'https://api.thegraph.com/subgraphs/name/zhidaluo/wand'
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        const tokensQuery = `
          query {
            itemListeds(first: 10, where: {tokenId: "${tokenId}"}) {
              blockNumber
              blockTimestamp
              id
              nftAddress
              price
              seller
              tokenId
              transactionHash
            }
          }
        `
        const client = new ApolloClient({
          uri: APIURL,
          cache: new InMemoryCache()
        })
        client.query({
            query: gql(tokensQuery),
          })
          .then((data)=>{
              console.log('data=',data);
              setTimeout(()=>{
                loading.close();
              },1000);
              this.list = data.data.itemListeds;
              this.$router.push({ path: "search_page", query: {name:JSON.stringify(this.list)} }); 
            }
          )
          .catch((err) => {
            console.log('err',err);
            setTimeout(()=>{
              this.$message({message:'请输入tokenId查找NFT',type:'warning'})
              loading.close();
            },1000);
          })
      },
      myswiper: function() {
                  var swiper = new Swiper('.swiper-container', {
                      pagination: {
                          el: '.swiper-pagination',
                      },
                  });
          },
  
      hanlder(index){
        this.crrent = index;
        this.routerBoxShow = false;
      },
      handleCommand(command) {
        localStorage.setItem('lang',command);
        location.reload()
      },
      loginSuccessful (e) {
        this.MyAddress = e
        console.log('登录成功回来了')
      },
  
      // 提交注册
      ConfirmRegistration () {
        if (this.InviteAddress == '') {
          console.log('请输入邀请地址')
          return
        }
        this.registerABI(this.InviteAddress)
        console.log('点击了注册')
      },
  
      LoginQb () {
        this.LinkBNB()
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import url("../../../node_modules/swiper/css/swiper.css");
  @media only screen and (max-width: 780px) {
    $design-width:750; //设计稿width
    @function pxttrem($px) {
      @return $px/$design-width*23.4375+rem;//23.4375
    }
    .mobile-layout{
      // height: 100vh;
      background: #F7F7F7;
    }
    .active{
      width: 100% !important;
      height: pxttrem(120) !important;
      line-height: pxttrem(120) !important;
      background: #D8BE7A !important;
      color: #fff !important;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
    }
    .mobile-layout-header{
      display: flex;
      justify-items: center;
      padding-top: pxttrem(10);
      height: pxttrem(96);
      // line-height: pxttrem(176);
      background: #D8BE7A;
    }
    .mobile-layout .logo{
        height: pxttrem(80);
        width: pxttrem(90);
        margin-left: pxttrem(32);
      }
      .input-set{
        height: pxttrem(48);
        font-size: pxttrem(24);
        padding-left: pxttrem(20);
        // margin-left: pxttrem(80);
      }
      .button{
      height: pxttrem(48);
      width: pxttrem(48);
      line-height: pxttrem(48);
      background: #b9b9b9;
      // line-height: pxttrem(48);
      text-align: center;
      i{
        width: pxttrem(48);
        height: pxttrem(48);
      }
    }
      .openNavBtn{
        width: pxttrem(48);
        height: pxttrem(48);
        margin-right: pxttrem(32);
        display: block !important;
      }
    .mobile-layout .searh{ 
      width: pxttrem(452);
      height: pxttrem(48);
      background: #FFFFFF;
      box-shadow: 0px 3px 16px 1px rgba(0,0,0,0.1);
      border-radius: 2px 2px 2px 2px;
      opacity: 1;
      border: 1px solid #FFFFFF;
      display: flex;
      align-items: center;
    }
    
  }
  @media (min-width: 780px) {
    .layout{
      display: block;
    }
    .mobile-layout{
      display: none;
    }
  }
  .layout {
    /* width: 100vw;
    height: 100vh;
    display: flex;
    background: linear-gradient(180deg, #a1c4fd, #c2e9fb); */
    display: flex;
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: 64px;
    background: #D8BE7A;
    box-shadow: 0px 3px 16px 1px rgba(0,0,0,0.08);
    opacity: 1;
    display: flex;
    z-index: 10;
    /* overflow-x: scroll; */
  }
  .sidebar-container{
    // width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .sidebar::-webkit-scrollbar {
      display: none; 
  }
  .sidebar .projectName {
    /* font-size: 32px; */
    display: flex;
    font-weight: bold;
    color: #333333;
    display: flex;
    align-items: center;
    /* margin: 47px 0 48px 32px; */
  }
  .sidebar .projectName .logo{
    width: 70px;
    height: 60px;
  }
  
  .sidebar .projectName .searh .input-set{
    width: 243px;
    height: 32px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px 1px rgba(255,255,255,0.16);
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    font-weight: 400;
    font-size: 12px;
    font-family: Segoe UI-Regular, Segoe UI;
    padding-left: 12px;
  }
  
  .sidebar .projectName .searh .button{
    cursor: pointer;
    width: 58px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
    font-family: Segoe UI-Regular, Segoe UI;
    font-weight: 400;
    color: #FFF333;
    line-height: 32px;
    background: rgba(51,51,51,0.8);
    border-radius: 0px 0px 0px 0px;
    position: absolute;
    right: 0px;
  }
  .sidebar .projectName .searh{
    display: flex;
    align-items: center;
    width: 243px;
    height: 32px;
    padding:0 50px;
    position: relative;
  }
  .openNavBtn {
    display: none;
  }
  .sidebar .nav {
    display: flex;
    margin-left: 20px;
  }
  .sidebar .left-item{
  
  }
  .left-item .layout-head {
    /* width: calc(100% - 32px); */
    /* width: 100%; */
    /* height: 110px; */
    margin-left: 60px;
    /* background-color: rgb(201, 110, 110); */
    border-radius: 0px 0px 8px 24px;
    display: flex;
    align-items: center;
  }
  .left-item .layout-head .address {
    /* width: 100px; */
    height: 30px;
    padding: 0 10px;
    /* margin-left: 60%;*/
    line-height: 30px; 
    text-align: center;
    /* background: #ffffff; */
    border: 1px solid #000;
    cursor: pointer;
    border-radius: 8px;
    font-size: 14px;
  }
  .sidebar .nav .navItem {
    /* width: 110px; */
    margin: 0 20px;
    height: 56px;
    // line-height: 56px;
    /* margin-left: 24px;
    margin-bottom: 5px; */
    /* background: #ccc; */
    /* border-radius: 12px; */
    display: flex;
    align-items: center;
    color: #999999;
  }
  .navActive {
    border-bottom: 2px solid #000;
    /* border-radius: 0; */
    color: #000 !important;
    height: 12.2vw;
    line-height: 12.2vw;
    background: #D8BE7A;
    font-weight: bold;
    /* box-shadow: 0px 7px 16px 0px rgba(1, 6, 28, 0.08);
    background: linear-gradient(180deg, #a1c4fd, #c2e9fb); */
  }
  .sidebar .nav .navItem img {
    /* width: 17px;
    height: 17px;
    margin: 0 12px 0 20px; */
  }
  .sidebar .nav .navItem span {
    font-size: 14px;
    /* color: #000; */
  }
  .sidebar .nav .navItem:hover {
    text-decoration: none;
  }
  
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  main .layout-head {
    /* width: calc(100% - 32px); */
    width: 100%;
    height: 110px;
    margin-left: 32px;
    background-color: #fff;
    border-radius: 0px 0px 8px 24px;
    display: flex;
    align-items: center;
  }
  main .layout-head .address {
    width: 240px;
    height: 48px;
    /* margin-left: 60%;
    line-height: 48px; */
    text-align: center;
    background: #ffffff;
    border: 1px solid #1a63da;
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
  }
  main .content {
    flex: 1;
    height: 100vh;
    /* overflow-x: hidden; */
    /* overflow-y: scroll; */
    background: #ffffff;
  }
  .left-item{
    padding: 0 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  /* 2021-12-19注册弹窗 */
  .registerModel {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  .Registerpopup {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 414px;
    height: 289px;
    background: #ffffff;
    border-radius: 12px;
    padding: 0 48px;
    padding-top: 32px;
    box-sizing: border-box;
    color: #333333;
    font-family: Microsoft YaHei;
  }
  .registerTitle {
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  .Registerpopup .lable {
    font-size: 14px;
    margin-top: 60px;
  }
  
  .Registerpopup input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    margin-top: 15px;
    font-size: 16px;
  }
  .Registerpopup .btns {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 56px;
  }
  .Registerpopup .btn {
    width: 100px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #1c64da;
    border-radius: 6px;
    font-size: 14px;
  }
  </style>
  