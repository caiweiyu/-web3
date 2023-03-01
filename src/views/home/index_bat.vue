<template>
    <div>
      <div class="home">
          <div class="home-box">
              <!-- <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in advantageData" :key="index"> -->
                  <Slider :pages="pages" :sliderinit="sliderinit">
                    <div>888</div>
                 <!-- slot  -->
                    <!-- <div class="home-item"></div> -->
                  </Slider>
                <!-- </swiper-slide>
              </swiper> -->
              <!-- 如果需要分页器 -->
              <!-- <div class="swiper-pagination"></div> -->
              
              <!-- 如果需要导航按钮 -->
              <!-- <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div> -->
              
              <!-- 如果需要滚动条 -->
              <!-- <div class="swiper-scrollbar"></div> -->
          
            <!-- <div class="swiperBox">
            <div class="swiperBox-left">
              <div class="swiperBox-left-title">{{$tc('home.nftGoldArtCollection')}}</div>
              <div class="swiperBox-left-content">
                {{$tc('home.nftContent')}}
              </div>
              <div class="swiperBox-left-button" @click="nftMarket">
                {{$tc('home.exploreNow')}}
              </div>
            </div>
            <div class="swiperBox-right">
              <div>
                <img class="swiperBox-right-box1 pic-img pic-img1" src="../../assets/images/home/glod1.png"  alt="">
                <img class="swiperBox-right-box1 pic-img" src="../../assets/images/home/glod4.png"  alt="">
              </div>
              <div>
                <img class="swiperBox-right-box2 pic-img" src="../../assets/images/home/glod2.png"  alt="">
                <img class="swiperBox-right-box2 pic-img" src="../../assets/images/home/glod3.png"  alt="">
                <img class="swiperBox-right-box2 pic-img" src="../../assets/images/home/glod5.png"  alt="">
              </div>
            </div>
            <div class="swiper-market">
              <div class="pic-img-box1">
                <img src="../../assets/images/home/more.png" alt="">
                <div>{{$tc('home.nftGoldClassification')}}</div>
              </div>
              <div class="pic-img-box" v-for="(item,index) in glodlist" :key="index">
                <img class="pic-img-box-img" :src="item.img" alt="">
                <div>{{ item.title }}</div>
              </div>
            </div>
          </div> -->
         </div>
        <div class="itemTitle">
          <img class="itemTitle-item" src="../../assets/images/home/left.png" alt="">
          <div class="itemTitle-title">{{ $tc(`home.hotGoldNft`)}}</div>
          <img class="itemTitle-item" src="../../assets/images/home/right.png" alt="">
        </div>
        <div class="itemContent">
            <div :class="['itemContent-box']" v-for="(item,index) in list" :key="index">
              <div class="box-pic">
                <div class="itemContent-box-button" @click="hanlder(item,index)">
                    <img :src="!item.isCollect ? require('../../assets/images/home/false.png') : require('../../assets/images/home/true.png')" alt="">
                </div>
                <img :class="['itemContent-box-img']" :src="'https://wand.mypinata.cloud/ipfs/QmUzeXJiSu8tBAejX5EHBG9jFHDibpXwETdDDiSLE6U6SB/'+item.tokenId+'.png'" alt="">
                <!-- {{item.name}} -->
                <div class="itemContent-box-icon">
                  <img src="../../assets/images/home/author.png" :class="['itemContent-box-icon-img']" alt="">
                  <span class="text">{{ item.seller && item.seller.replace(/(.{8}).*(.{8})/, '$1...$2') }}</span>
                </div>
                <!---->
                <div class="itemContent-box-title">
                  This commodity is gold palace art, superior quality, worthy of collection
                </div>
                <!---->
                <div class="itemContent-box-bottom">
                  <div class="box-left">
                    <div class="box-left-top">BNB</div>
                    <div class="box-left-bottom">{{ item.price >= 100000000000000000 ? (Number(item.price)/Math.pow(10,18)) : "less than 0.1" }}</div>
                  </div>
                  <div class="box-right" @click="buyDetail(item)">
                    {{$tc('home.buyNow')}}
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="look_more" @click="nftMarket">{{ $tc(`home.seeMore`)}}</div>
        <div class="hotNft">
          <div class="itemTitle itemTitle2">
            <img class="itemTitle-item" src="../../assets/images/home/left.png" alt="">
            <div class="itemTitle-title">{{ $tc(`home.nftAuction`) }}</div>
            <img class="itemTitle-item" src="../../assets/images/home/right.png" alt="">
          </div>
          <div class="itemContent">
            <div :class="['itemContent-box','itemContent-box2']" v-for="(item,index) in list2" :key="index">
              <div class="box-pic">
                  <div class="item-auction">
                  <img src="../../assets/images/home/loading.png" class="item-auction-pic" alt="">
                  <div class="item-auction-text">{{ (!item.isOver || !status) ? $tc(`home.auctionNing`) : $tc(`home.auctionEnd`) }}</div>
                  <div class="item-auction-time">
                    <Time @isOverTime="getTimeOver" :isOver=item.isOver :seconds="item.countdown"></Time>
                  </div>
                </div>
                <img :class="['itemContent-box-img']" :src="'https://wand.mypinata.cloud/ipfs/QmUzeXJiSu8tBAejX5EHBG9jFHDibpXwETdDDiSLE6U6SB/'+item.nftId+'.png'" alt="">
                <!-- {{item.name}} -->
                <div class="itemContent-box-icon">
                  <img src="../../assets/images/home/author.png" :class="['itemContent-box-icon-img']" alt="">
                  <span class="text">{{item.bidder && item.bidder.replace(/(.{8}).*(.{8})/, '$1...$2')}}</span>
                </div>
                <!---->
                <div class="itemContent-box-title">
                  This commodity is gold palace art, superior quality, worthy of collection
                </div>
                <!-- <div class="itemContent-box-content">
                  哎呀，好忧愁啊！小企鹅已经3岁了，却迟迟不能脱掉蛋壳，这
                  可怎么办才好呢？哎鸭可不想被人嘲笑；为了隐藏这个.....
                </div> -->
                <div class="itemContent-box-bottom">
                  <div class="box-left">
                    <div class="box-left-top">USDT</div>
                    <div class="box-left-bottom">{{item.bidAmount}}</div>
                  </div>
                  <div class="box-right" @click="buyDetail2">
                    {{$tc('home.auctionNow')}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="look_more" @click="buyDetail2">{{$tc(`home.seeMore`)}}</div>
          </div>
          <!-- <div class="look_more">全部分类 >></div> -->
          <div class="aboutNft">
            <div class="itemTitle itemTitle4">
              <img class="itemTitle-item" src="../../assets/images/home/left.png" alt="">
              <div class="itemTitle-title">{{ $tc(`home.aboutNFT`) }}</div>
              <img class="itemTitle-item" src="../../assets/images/home/right.png" alt="">
            </div>
            <div class="aboutNft-box">
                <!-- <div class="player-container"> -->
                  <!-- <vue-core-video-player 
                    :src="require('../../assets/images/home.mp4')"
                    @loadedmetadata="loaded" 
                    @play="playFunc" 
                    @pause="pauseFunc"
                    @error="errorHandle"
                  >
                  </vue-core-video-player> -->
                  <img :src="require('../../assets/images/about.png')" alt="">
                  <!-- <vue-core-video-player src="./your_video_source.mp4"></vue-core-video-player> -->
                <!-- </div> -->
            </div>
          </div>
      </div>
      <div class="mobile-home">
        <div class="bg">
            <div class="bg-title">
              {{ $tc('home.nftGoldArtCollection') }}
            </div>
            <div class="bg-content">
              {{ $tc('home.nftContent') }}
            </div>
            <div class="index myindex">
            <!-- 轮播图 -->
            <!-- Swiper -->
            <!-- <img src="../../assets/images/home/mobile/1.png" />
            <img class="img_big" src="../../assets/images/home/mobile/2.png" />
            <img src="../../assets/images/home/mobile/3.png" /> -->
              <!-- <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="../../assets/images/home/mobile/1.png" />
                  </div>
                  <div class="swiper-slide">
                    <img src="../../assets/images/home/mobile/2.png" />
                  </div>
                  <div class="swiper-slide">
                    <img src="../../assets/images/home/mobile/3.png" />
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <div class="all_pic">
              <ul class="all_pic_ul">
                <li v-for="(item,index) in arr" :key="index">
                  <img src="../../assets/images/home/mobile/11.png" alt="">
                  <div>{{item.name}}</div>
                </li>
              </ul>
          </div>
          <div class="nft">
            <ul class="hot-nft">
              <li class="hot-nft-left">|{{$tc(`home.hotGoldNft`)}}</li>
              <li class="hot-nft-right" @click="nftMarket">{{$tc(`home.seeMore`)}}
                <i class="el-icon-arrow-right"></i>
              </li>
            </ul>
            <ul class="hot-content">
              <li class="hot-content-li" v-for="(item,index) in myCollectList" :key="index"  @click="buyDetail(item)">
                <div class="img">
                  <img :src="'https://wand.mypinata.cloud/ipfs/QmUzeXJiSu8tBAejX5EHBG9jFHDibpXwETdDDiSLE6U6SB/'+item.tokenId+'.png'" alt="" />
                </div>
                <div class="text">commodity is gold palace art...</div>
                <div class="bnb">BNB</div>
                <div class="price">
                   <div>{{ item.price >= 100000000000000000 ? (Number(item.price)/Math.pow(10,18)) : "less than 0.1" }}</div>
                   <div @click.stop="hanlder(item,index)">
                      <img :src="!item.isCollect ? require('../../assets/images/home/false.png') : require('../../assets/images/home/true.png')" alt="">
                   </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="nft nft-action">
            <ul class="hot-nft">
              <li class="hot-nft-left">|{{$tc(`home.nftAuction`)}}</li>
              <li class="hot-nft-right" @click="buyDetail2">{{$tc(`home.seeMore`)}}
                <i class="el-icon-arrow-right"></i>
              </li>
            </ul>
            <ul class="hot-nft-list">
                <li class="hot-nft-list-li" v-for="(item,index) in list2" :key="index">
                  <div class="img">
                    <img :src="'https://wand.mypinata.cloud/ipfs/QmUzeXJiSu8tBAejX5EHBG9jFHDibpXwETdDDiSLE6U6SB/'+item.nftId+'.png'" alt="" />
                  </div>
                  <div class="text">This commodity is gold palace art...</div>
                  <div class="bnb">USDT</div>
                  <div class="price">{{item.bidAmount}}</div>
                </li>
            </ul>
            </div>
            <!--关于我们-->
            <div class="nft">
              <ul class="hot-nft">
                <li class="hot-nft-left">|{{ $tc(`home.aboutNFT`) }}</li>
                <li class="hot-nft-right">
                  <!-- <i class="el-icon-arrow-right"></i> -->
                </li>
              </ul>
              <div class="playbox">
                <img :src="require('../../assets/images/about.png')" alt="">
              </div>
            </div>
      </div>
    </div>
  
  </template>
  
  <script>
  import "./mobile.css";
  // import { createClient } from 'urql'
  import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
  import Time from "../../components/time.vue"
  import { mapState } from "vuex";
  // import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  // import 'swiper/dist/css/swiper.css'
  // import VueCoreVideoPlayer from 'vue-core-video-player'
  import Slider from 'vue-concise-slider'// 引入slider组件
  export default {
    data() {
      return {
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 500,//滑动判定距离
          thresholdTime: 100,//滑动判定时间
          autoplay:1000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'vertical',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        },
        pages:[
            {
              title: 'slide3',
              style:{
                background:'#4bbfc3',
              },
            },
            {
              title: 'slide3',
              style:{
                background:'#4bbfc3',
              },
            }
        ],
        arr:[
          {name:this.$tc('home.pureGold'),val:'11'},
          {name:this.$tc('home.lottery'),val:'22'},
          {name:this.$tc('home.kGold'),val:'33'},
          {name:this.$tc('home.other'),val:'44'},
        ],
        glodlist:[
          {title:this.$tc('home.pureGold'),img:require("../../assets/images/home/glodx1.png")},
          {title:this.$tc('home.kGold'),img:require("../../assets/images/home/glodx2.png")},
          {title:this.$tc('home.lottery'),img:require("../../assets/images/home/glodx3.png")},
          {title:this.$tc('home.other'),img:require("../../assets/images/home/glodx4.png")}
        ],
        data: [
          {img: require("../../assets/images/home/big-box.png")},
          {img: require("../../assets/images/home/small-box.png")},
          {img: require("../../assets/images/home/big-box.png")},
          {img: require("../../assets/images/home/small-box.png")},
          {img: require("../../assets/images/home/big-box.png")}
        ],
        col: 2,
        loading: false,
        bannerList: [
          require("../../assets/images/homeBanner/banner1.jpg"),
          require("../../assets/images/homeBanner/banner2.jpg"),
        ],
        //nft市场列表
        list:[
          {name:'Gold court art',img: require("../../assets/images/home/pic1.png"),icon:require("../../assets/images/home/test.png"),choose:false},
          {name:'Gold court art',img: require("../../assets/images/home/pic2.png"),icon:require("../../assets/images/home/test.png"),choose:false},
          {name:'Gold court art',img: require("../../assets/images/home/pic3.png"),icon:require("../../assets/images/home/test.png"),choose:false},
          {name:'Gold court art',img: require("../../assets/images/home/pic4.png"),icon:require("../../assets/images/home/test.png"),choose:false},
          {name:'Gold court art',img: require("../../assets/images/home/pic5.png"),icon:require("../../assets/images/home/test.png"),choose:false},
          {name:'Gold court art',img: require("../../assets/images/home/pic6.png"),icon:require("../../assets/images/home/test.png"),choose:false},
        ],
        //竞拍列表
        list2:[
          {name:'Gold court art',img: require("../../assets/images/home/pic7.png"),icon:require("../../assets/images/home/test.png"),pic:require("../../assets/images/home/loading.png")},
          {name:'Gold court art',img: require("../../assets/images/home/pic8.png"),icon:require("../../assets/images/home/test.png"),pic:require("../../assets/images/home/loading.png")},
          {name:'Gold court art',img: require("../../assets/images/home/pic9.png"),icon:require("../../assets/images/home/test.png"),pic:require("../../assets/images/home/loading.png")},
        ],
        swiperidx: 0,
        agentVersion:null,
        id:null,
        imageSrc:"",
        status:false
      };
    },
    created() {
      // this.downloadImg()
      this.getlistall()
      this.getDataList()
      // this.myswiper();
      console.log('我的收藏数据',this.myCollectList)
    },
    computed:{
      ...mapState({
        myCollectList:(state) => state.user.myCollectList
      })
    },
    components:{
        Time,
        Slider
    },
    watch:{
  
    },
    methods: {
      getTimeOver(data){
          this.status = data
      },
      hanlder(item,index){
        item.isCollect = !item.isCollect;
        this.myCollectList[index].isCollect = item.isCollect;
        this.$store.commit('user/commitmyCollectList',this.myCollectList)
      },
      nftMarket(){
        this.$router.push({ path: "Privateplacement"})
      },
      buyDetail(data){
          this.$router.push({ path: "buyDetail", query: {name:JSON.stringify(data)} });
      },
      buyDetail2(){
          this.$router.push({ path: "farms"});
      },
      //获取NFT列表数据
      getDataList(){
        const APIURL = 'https://api.thegraph.com/subgraphs/name/zhidaluo/wand'
        const tokensQuery = `
          query {
            itemListeds{
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
              console.log('data=',data.data.itemListeds);
              let param = data.data.itemListeds;
              let arr = []
              for(let i=0;i<param.length;i++){
                arr.push({
                  // isCollect : (this.myCollectList.length>0 && this.myCollectList[i].isCollect) ? true : false,
                  blockNumber: param[i].blockNumber,
                  blockTimestamp: param[i].blockTimestamp,
                  id: param[i].id,
                  nftAddress: param[i].nftAddress,
                  price: param[i].price,
                  seller: param[i].seller,
                  tokenId: param[i].tokenId,
                  transactionHash: param[i].transactionHash
                })
                
              }
              this.list = arr;
              console.log('nft_list',this.list)
              this.$store.commit('user/commitmyCollectList',this.list)
            }
          )
          .catch((err) => {
            console.log('err=', err);
          })
      
      },
      async getlistall(){
        const APIURL = 'https://api.thegraph.com/subgraphs/name/zhidaluo/englishauction20235'
        const tokensQuery = `
        query {
          bids(orderBy: bidId, first: 4 ) {
            id
            bidId
            time
            blockNumber
            nftId
            bidder
            blockTimestamp
            bidAmount
          }
          starts {
            bidId
            blockTimestamp
            blockNumber
            duration
            id
            nftId
            seller
            startTime
          }
        }`
        const client = new ApolloClient({
          uri: APIURL,
          cache: new InMemoryCache(),
        })
        client
          .query({
            query: gql(tokensQuery),
          })
          .then((data) => {
              console.log('竞拍列表=',data)
              let arr = data.data.bids;
              let res = []
              for(let i=0;i<arr.length;i++){
                res.push({
                  bidAmount:arr[i].bidAmount,
                  bidId:arr[i].bidId,
                  bidder:arr[i].bidder,
                  blockNumber:arr[i].blockNumber,
                  nftId:arr[i].nftId,
                  time:arr[i].time,
                  countdown:((Number(arr[i].time)+86400)-(parseInt(new Date().getTime()/1000))),
                  isOver:((Number(arr[i].time)+86400)-(parseInt(new Date().getTime()/1000))) > 0 ? false : true
                })
              }
              this.list2 = res;
              console.log('res=',res)
            }
          )
          .catch((err) => {
            console.log('err=', err)
          })
      },
      swiperChange(e) {
        this.swiperidx = e;
      },
      loadmore() {
        if (!this.loading) {
          this.loading = true;
          setTimeout(() => {
            this.data = this.data.concat(this.originData, this.originData);
            this.loading = false;
          }, 1000);
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  // @import url("../../../node_modules/swiper/css/swiper.css");
  @media screen and (max-width:780px){
    $design-width:750; //设计稿width
    @function pxttrem($px) {
      @return $px/$design-width*23.4375+rem;//23.4375
    }
    .home{
      display: none;
    }
    .mobile-home{
      display: block;
    }
    .bg{
      // width: pxttrem(750);
      background: url("../../assets/images/home/mobile/home_logo.png") center no-repeat;
      background-size: 100% 100%;
      position: relative;
      width: 100vw;
      height: pxttrem(396);
      // overflow: auto;
      &-title{
        padding-top:pxttrem(52);
        margin-left: pxttrem(32);
        font-size: pxttrem(52);
        font-family: Segoe UI-Bold, Segoe UI;
        font-weight: bold;
        color: #FFFEFD;
      }
      &-content{
        width: pxttrem(648);
        margin-top:pxttrem(32);
        margin-left: pxttrem(32);
        font-size: pxttrem(24);
        font-family: Segoe UI-Regular, Segoe UI;
        font-weight: 400;
        color: #FFFFFF;
      }
      .myindex{
        position: absolute;
        top:pxttrem(260);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        img{
          width: pxttrem(200);
          height: pxttrem(200);
          // margin: 0 pxttrem(20);
        }
        .img_big{
          width: pxttrem(260);
          height: pxttrem(260);
        }
      }
    }
    .all_pic{
      &_ul{
        display: flex;
        justify-content: space-around;
        height: pxttrem(200);
        padding-top: pxttrem(60);
        background: #ffffff;
        img{
          width: pxttrem(120);
          height: pxttrem(120);
        }
        div{
          margin-top: pxttrem(20);
          font-size: pxttrem(28);
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 0px;
          -webkit-text-stroke: 1px rgba(0,0,0,0);
          text-stroke: 1px rgba(0,0,0,0);
          text-align: center;
        }
      }
    }
    .nft{ 
      margin-top: pxttrem(20);
      background: #fff;
      min-height: pxttrem(580);//1818
      .hot-nft{
        // width: pxttrem(650);
        width: 96vw;
        margin: pxttrem(20) auto 0;
        padding-top: pxttrem(30);
        display: flex;
        justify-content: space-between;
        font-size: pxttrem(28);
        .hot-nft-left{
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #D8BE7A;
        }
        .hot-nft-right{
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
      .hot-content{
        margin: pxttrem(24) auto 0;
        // width: pxttrem(650);
        width: 96vw;
        display: flex;
        // padding-top: pxttrem(30);
        flex-wrap: wrap;
        justify-content: space-around;
        // justify-content: space-around;
        .hot-content-li{
          margin-top: pxttrem(20);
          width: pxttrem(310);
          height: pxttrem(520);
          background: rgba(242,242,242,0.91);
          box-shadow: 0px 3px 15px 1px rgba(0,0,0,0.1);
          border-radius: 2px 2px 2px 2px;
          opacity: 1;
          border: 2px solid #D8BE7A;
          .img{
            width: pxttrem(313);
            height: pxttrem(278);
            background: #EEDBAA;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            img{
              width: pxttrem(284.5454545454545);
              height: pxttrem(252.72727272727272);
            }
          }
          .text{
            width: pxttrem(274);
            height: pxttrem(82);
            font-size: pxttrem(28);
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            margin: pxttrem(24) 0 0 pxttrem(12);
          }
          .bnb{
            font-size: pxttrem(24);
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            margin: pxttrem(24) 0 0 pxttrem(12);
           
          }
          .price{
            font-size: pxttrem(32);
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #333333;
            margin: pxttrem(6) 0 0 pxttrem(12);
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: pxttrem(274);
            img{
              width: pxttrem(41);
              height: pxttrem(41);
            }
          }
        }
        
      }
      .playbox{
        margin: pxttrem(20) auto 0;
        width: pxttrem(650);
        height: pxttrem(388);
        background: #CBCBCB;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        border: 1px solid #707070;
        img{
          width: pxttrem(650);
          height: pxttrem(388);
        }
      }
    }
    .nft-action{
      height: pxttrem(600);
      margin-top: pxttrem(20);
      background: #F7F7F7;
    }
    .hot-nft-list{
        // width: 100vw;
        height: pxttrem(550);
        display: flex;
        overflow: auto;
        &-li{
          margin: pxttrem(20) pxttrem(10) 0 pxttrem(10);
          width: pxttrem(310);
          height: pxttrem(520);
          background: rgba(242,242,242,0.91);
          box-shadow: 0px 3px 15px 1px rgba(0,0,0,0.1);
          border-radius: 2px 2px 2px 2px;
          opacity: 1;
          border: 2px solid #D8BE7A;
          .img{
            width: pxttrem(313);
            height: pxttrem(278);
            background: #EEDBAA;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
            img{
              width: pxttrem(284.5454545454545);
              height: pxttrem(252.72727272727272);
            }
          }
          .text{
            width: pxttrem(274);
            height: pxttrem(82);
            font-size: pxttrem(28);
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            margin: pxttrem(24) 0 0 pxttrem(12);
          }
          .bnb{
            font-size: pxttrem(24);
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            margin: pxttrem(24) 0 0 pxttrem(12);
           
          }
          .price{
            font-size: pxttrem(32);
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #333333;
            margin: pxttrem(6) 0 0 pxttrem(12);
          }
        
        }
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
    .swiper-container {
          width: 100%;
          height: 9.375rem;
      }
   
      .swiper-slide {
          text-align: center;
          font-size: 18px;
          // background: #fff;
      width: pxttrem(240);
          height: pxttrem(240);
          /* Center slide text vertically */
          display: flex;
          justify-content: center;
          align-items: center;
      border: 1px solid #ddd;
      }
   
      .swiper-slide img {
          width: pxttrem(240);
          height: pxttrem(240);
      }
  }
  @media screen and (min-width:780px){
    .home {
      width: 100%;
      color: #333333;
    }
    .home-item{
      // margin: 0 auto;
      // padding: 32px 0;
      // width: 1920px;
      width: 100%;
      height: 1015px;
      background: url("../../assets/images/home/bg.png") center no-repeat;
      background-size: 100% 100%;
      position: relative;
    }
    .my-swipe {
      width: 960px;
      height: 499px;
      background: #f6f6f6;
      border-radius: 24px;
      position: relative;
    }
    .swiper-market{
      display: flex;
      align-items: center;
      width: 1200px;
      height: 208px;
      background: #F2F2F2;
      box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
      border-radius: 2px 2px 2px 2px;
      opacity: 1;
      border: 2px solid #C7AA5E;
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%,100%);
      .pic-img-box1{
        width: 290px;
        height: 208px;
        background: url("../../assets/images/home/orange_bg.png") center no-repeat;
        background-size: 100% 100%;
        line-height: 208px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-family: Segoe UI-Bold, Segoe UI;
        font-weight: bold;
        color: #FFFFFF;
        img{
          width: 25px;
          height: 25px;
        }
      }
      .pic-img-box{
          margin-left: 80px;
          cursor: pointer;
          .pic-img-box-img{
            width: 126px;
            height: 126px;
          }
          div{
            text-align: center;
            margin: 8px 0 0 0;
          }
        }
    }
    .swiperItem {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiperItem img {
      width: 100%;
      height: 100%;
    }
    .swiperBox {
      position: relative;
      display: flex;
      width: 1200px;
      margin:auto;
      justify-content: space-between;
    }
    .left-img{
      position: absolute;
      width: 602px;
      height: 581px;
      top: -208px;
      left: -370px;
      z-index: 1;
    }
    .swiperBox-left{
      display: flex;
      flex-direction: column;
      z-index: 2;
    } 
    .even_pic{
        width: 300px;
        height: 300px;
      }
      .odd_pic{
        width: 240px;
        height: 240px;
        margin: 10px 10px 10px 30px;
      }
    .swiperBox-right-bg{
        width: 645px;
        height: 669px;
        background: rgba(255,220,0,0.62);
        border-radius: 0px 0px 0px 0px;
        opacity: 0.69;
        filter: blur(23px);
        position: absolute;
        top: 0;
        left: 0;
    }
    .swiperBox-right{
        width: 560px;
        height: 760px;
        display: flex;
        justify-content: space-between;
        &-box1{
          width: 300px;
          height: 300px;
          margin: 20px 0;
        }
        &-box2{
          margin: 20px 0;
          width: 240px;
          height: 240px;
        }
        .pic-img1{
          margin-top: 70px;
  
        }
      .container_water_fall {
          box-sizing: border-box;
          &.water_content {
            margin: 0 15px;
          }
          .cell_item {
            width: 100%;
            background: #ffffff;
            overflow: hidden;
            box-sizing: border-box;
            border-radius: 6px;
            margin-top: 10px;
            .cell_item_img {
              border-radius: 12px 12px 0 0;
              width: 100%;
              height: auto;
              display: block;
            }
            .item-body {
              //   border: 1px solid #F0F0F0;
              padding: 12px;
              .item-title {
                font-size: 30px;
                color: #333333;
                font-weight: bold;
              }
              .item-footer {
                position: relative;
                display: flex;
                justify-content: left;
                flex-direction: column;
                .avatar {
                  width: 44px;
                  height: 44px;
                  border-radius: 50%;
                  background-repeat: no-repeat;
                  background-size: contain;
                }
                .name {
                  font-size: 22px;
                  color: #fc8800;
                }
                .like {
                  right: 0;
                  display: flex;
                  align-items: center;
  
                  .item_title {
                    font-size: 30px;
                    color: #f63b66;
                  }
                  .item_sold {
                    font-size: 24px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    color: #999;
                  }
                }
              }
            }
          }
        }
    }
    .swiperBox-left-title{
      margin: 180px 0 0 0;
      font-size: 32px;
      font-family: Segoe UI-Bold, Segoe UI;
      font-weight: bold;
      color: #fff;
    }
    .swiperBox-left-content{
      margin: 40px 0 0 0;
      font-size: 16px;
      width: 546px;
      font-family: Segoe UI-Regular, Segoe UI;
      font-weight: 400;
      color: #ffffff;
    }
    .swiperBox-left-button{
      margin: 54px 0 0 0;
      width: 120px;
      height: 40px;
      line-height: 40px;
      background:rgba(0, 0, 0,0.8);
      border-radius: 0px 0px 0px 0px;
      text-align: center;
      font-size: 16px;
      font-family: Segoe UI-Regular, Segoe UI;
      font-weight: 400;
      cursor: pointer;
      color: #fff;
      -webkit-text-stroke: 1px rgba(0,0,0,0);
    }
    .swiperBtn {
      width: 44px;
      height: 44px;
      transform: translate(0, -50%);
      border-radius: 4px;
      z-index: 9;
      position: absolute;
    }
    .swiperBtn img {
      width: 100%;
      height: 100%;
    }
    .swiper-next {
      top: 50%;
      right: 48px;
    }
    .swiper-prev {
      top: 50%;
      left: 48px;
    }
  
    .itemTitle {
      margin: 250px auto 20px;
      text-align: center;
      font-size: 40px;
      font-family: Segoe UI-Bold, Segoe UI;
      font-weight: bold;
      color: #333333;
      display: flex;
      justify-content: center;
      &-item{
        width: 213px;
        height: 53.5px;
      }
      &-title{
        margin: 0 38px;
      }
    }
    .itemContent{
      width: 1200px;
      margin: 0 auto;
      height: auto;
      display: flex;
      flex-flow: wrap;
      &-box{
        width: 368px;
        height: 506px;
        margin: 10px 15px;
        background:url("../../assets/images/home/reduce_bg.png")center no-repeat;
        background-size: 100% 100%;
        opacity: 1;
        .box-pic{
          width: 328px;
          height: 442px;
          margin: 32px 20px;
          background: #fff;
          position: relative;
        }
        .itemContent-box-button{
          position: absolute;
          top: 20px;
          right: 20px;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          cursor: pointer;
          background: rgba(256,256,256,0.46);
          img{
            width: 20px;
            height: 20px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
        &-img{
          width: 328px;
          height: 262px;
        }
        &-icon{
          display: flex;
          align-items: center;
          margin: 9px 0 0 20px;
          &-img{
            border-radius: 50%;
            width: 24px;
            height: 24px;
            background: #FFFFFF;
            opacity: 1;
            border: 1px solid #707070;
          }
          .text{
            margin-left: 6px;
            // width: 50px;
            height: 16px;
            font-size: 12px;
            font-family: Segoe UI-Regular, Segoe UI;
            font-weight: 400;
            color: #666666;
          }
        }
        &-title{
          margin: 16px 0 0 20px;
          font-size: 14px;
          font-family: Segoe UI-Bold, Segoe UI;
          font-weight: bold;
          color: #333333;
        }
        &-content{
          margin: 12px 0 0 20px;
          font-size: 12px;
          font-family: Segoe UI-Regular, Segoe UI;
          font-weight: 400;
          color: #333333;
        }
        &-bottom{
          display: flex;
          justify-content: space-between;
          .box-left{
            margin: 24px 0 0 20px;
            &-top{
              font-size: 12px;
              font-family: Segoe UI-Regular, Segoe UI;
              font-weight: 400;
              color: #D8BE7A;
            }
            &-bottom{
              font-size: 20px;
              font-family: Segoe UI-Bold, Segoe UI;
              font-weight: bold;
              color: #D8BE7A;
            }
          }
          .box-right{
            margin: 39px 24px 0 0;
            width: 98px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background: #D8BE7A;
            box-shadow: 0px 3px 15px 1px rgba(216,190,122,0.4);
            border-radius: 2px 2px 2px 2px;
            opacity: 1;
            font-size: 16px;
            font-family: Segoe UI-Bold, Segoe UI;
            font-weight: bold;
            color: #333333;
            cursor: pointer;
          }
        }
      }
    }
    .look_more{
      margin: 40px auto 0;
      width: 101.71px;
      height: 31.45px;
      line-height: 31.45px;
      background: url("../../assets/images/home/box.png")center no-repeat;
      background-size: 100% 100%;
      text-align: center;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      font-size: 16px;
      font-family: Segoe UI-Regular, Segoe UI;
      font-weight: 400;
      color: #D8BE7A;
      cursor: pointer;
      -webkit-text-stroke: 1px rgba(0,0,0,0);
    }
    .hotNft{
      width: 100%;
      // height: 788px;
      background: rgba(0,0,0,0.03);
    }
    .itemTitle2{
      padding-top: 60px;
      margin: 100px auto 20px;
      text-align: center;
      font-size: 40px;
      font-family: Segoe UI-Bold, Segoe UI;
      font-weight: bold;
      color: #333333;
      display: flex;
      justify-content: center;
    }
    .itemContent-box2{
      position: relative;
    }
    .item-auction{
      width: 328px;
      height: 28px;
      background: #D8BE7A;
      border-radius: 0px 0px 0px 0px;
      opacity: 0.8;
      position: absolute;
      top: 235px;
      left: 0px;
      display: flex;
      align-items: center;
      &-pic{
        width: 18px;
        height: 18px;
        margin-left: 8px;
      }
      &-text{
        font-size: 12px;
        font-family: Segoe UI-Regular, Segoe UI;
        font-weight: 400;
        color: #333333;
        margin-left: 8px;
      }
      &-time{
        font-size: 12px;
        font-family: Segoe UI-Regular, Segoe UI;
        font-weight: 400;
        color: #333333;
        display: flex;
        justify-content: end;
        align-items: center;
        margin-left: 67px;
        // div{
        //   width: 18px;
        //   height: 18px;
        //   line-height: 18px;
        //   text-align: center;
        //   font-size: 12px;
        //   color: #ffffff;
        //   background: #333333;
        // }
      }
    }
    .nftClassify{
      .itemTitle3{
        margin: 60px auto 20px;
        text-align: center;
        font-size: 40px;
        font-family: Segoe UI-Bold, Segoe UI;
        font-weight: bold;
        color: #333333;
        display: flex;
        justify-content: center;
      }
      .nftClassifbox{
        margin: 0 auto;
        width: 1200px;
        display: flex;
        &-item{
          width: 269px;
          height: 355px;
          background: rgba(255,254,232,0.91);
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          border: 1px solid #707070;
          margin: 0 20px;
          img{
            width:269px;
            height: 269px;
          }
          &-text{
            text-align: center;
            margin: 40px auto;
          }
        }
      }
    }
    .aboutNft{
      &-box{
        margin: 48px auto 60px;
        width: 1200px;
        height: 675px;
        background: #CBCBCB;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        border: 1px solid #707070;
        img{
          width: 1200px;
          height: 675px;
        }
      }
    }
    .itemTitle4{
      margin: 80px auto 20px;
      text-align: center;
      font-size: 40px;
      font-family: Segoe UI-Bold, Segoe UI;
      font-weight: bold;
      color: #333333;
      display: flex;
      justify-content: center;
    }
    .FarmsBox {
      width: 960px;
      height: auto;
      display: flex;
      justify-content: space-between;
    }
    .FarmsBox .FarmsItem {
      width: 468px;
      height: 263px;
      background: #ffffff;
      border-radius: 24px;
    }
    .FarmsBox .FarmsItem:nth-child(1) {
      background-image: url(../../assets/images/Farms/farm1.jpg);
      background-size: 100% 100%;
    }
    .FarmsBox .FarmsItem:nth-child(2) {
      background-image: url(../../assets/images/Farms/farm2.jpg);
      background-size: 100% 100%;
    }
    .fishBox {
      display: flex;
      flex-wrap: wrap;
    }
    .fish {
      width: 302px;
      height: 290px;
      background: #fff;
      border-radius: 12px;
      margin-right: 24px;
      margin-bottom: 24px;
    }
    .fishImgBox {
      width: 302px;
      height: 196px;
      background: #fffdeb;
      border-radius: 12px 12px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fishImgBox img {
      width: auto;
      height: 90%;
    }
  
    .fishName {
      font-size: 15px;
      font-weight: bold;
      color: #333333;
      margin-top: 16px;
      margin-bottom: 10px;
    }
    .fishBottom {
      padding: 0 20px;
      box-sizing: border-box;
    }
    .bottomItem {
      display: flex;
      margin-bottom: 5px;
      justify-content: space-between;
      align-items: center;
    }
    .bottomItem span {
      font-size: 12px;
      color: #999999;
    }
    .bottomItem p {
      font-size: 12px;
      color: #333333;
    }
    .fishBox .fish:nth-child(3n) {
      margin-right: 0;
    }
  }
  </style>
  