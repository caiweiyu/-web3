<template>
  <div> 
    <div class="mobile-blindBox">
        <div class="mobile-blindBox-header">
          <div class="mobile-blindBox-header-content">
              <img class="icon" src="../../assets/images/home/icon.png" alt="">
              <div class="icon-title">address:{{ address.replace(/(.{6}).*(.{4})/, '$1...$2') }}</div>
              <div class="icon-content">
                  <div class="icon-content-left">
                    <div class="icon-content-left-top">{{ bnbBalance }}</div>
                    <div class="icon-content-left-bottom">资产(BNB)</div>
                  </div>
                  <div class="icon-content-left">
                    <div class="icon-content-left-top">{{ usdtBalance }}</div>
                    <div class="icon-content-left-bottom">资产(USDT)</div>
                  </div>
                  <div class="icon-content-left">
                    <div class="icon-content-left-top">{{ wandBalance }}</div>
                    <div class="icon-content-left-bottom">资产(Wand)</div>
                  </div>
                  <!-- <div class="icon-content-content">|</div> -->
                  <div class="icon-content-left">
                    <div class="icon-content-left-top">{{ buyNumber }}</div>
                    <div class="icon-content-left-bottom">已购买</div>
                  </div>
              </div>
          </div>
        </div>
        <div class="mobile-blindBox-box">
          <ul class="mobile-blindBox-box-ul">
             <li :class="['mobile-blindBox-box-ul-li',crrent == index ? 'active' : '']" @click="hanlderClick(index)" v-for="(item,index) in navigator_list" :key="index">
              {{ item }}
             </li>
          </ul>
        </div>
    </div>
    <!--:vloading="isLoading"-->
    <Product v-if="crrent==0" :list="list" :vloading="isLoading"></Product>
    <div  v-else-if="crrent==1" v-loading="isLoading2">
      <Action_products :list="list2"></Action_products>
    </div>
    <My_Collect_list v-else-if="crrent==2"></My_Collect_list>
  </div>
</template>

<script>
import Product from '../../components/my_products.vue'
import Action_products from '../../components/action_products.vue'
import My_Collect_list from '../../components/myCollect_list.vue'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { mapState } from "vuex";
export default {
    name:'personalInfo',
    components:{
        Product,
        Action_products,
        My_Collect_list
    },
    data(){
      return {
        MyAddress:'', //我的地址
        navigator_list:['我的NFT','我参与的','我的收藏'],
        crrent:0,
        list:[],
        isLoading:true,
        isLoading2:true
      }
    },
    computed:{
      ...mapState({
          address:(state) => state.user.address,
          buyNumber:(state) => state.user.buyNumber,
          bnbBalance:(state) => state.user.bnbBalance,
          usdtBalance:(state) => state.user.usdtBalance,
          wandBalance:(state) => state.user.wandBalance,
      })
    },
    created(){
      this.getUSDTblance();
      this.getMyNftList();
      this.getDataList();
      //获取wand平台代币
      this.getBlancewand()
    },
    methods:{
      //我的NFT
      async getMyNftList(){
          const APIURL = 'https://api.thegraph.com/subgraphs/name/zhidaluo/nft1'
          const tokensQuery = `
            query {
              transfers(where: {to: "${this.address}"}) {
                transactionHash
                blockNumber
                blockTimestamp
                id
                to
                tokenId
              }
            }
          `
          const client =await new ApolloClient({
            uri: APIURL,
            cache: new InMemoryCache()
          })
          client.query({
            query: gql(tokensQuery),
          })
          .then((data)=>{
              this.list = data.data.transfers;
              this.$store.commit('user/commitbuyNumber',this.list.length)
              setTimeout(()=>{
                this.isLoading = false;
              },1000)
            }
          )
          .catch((err) => {
            setTimeout(()=>{
                this.isLoading = false;
              },1000)
            console.log('err=', err)
          })
      },
      //获取我参与的竞拍列表数据
      async getDataList(){
          const APIURL = 'https://api.thegraph.com/subgraphs/name/zhidaluo/englishauction5'
          const tokensQuery = `
                query {
                  bids(where: {bidder: "${this.address}"}) {
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
                console.log('我参与竞拍列表=',data)
                //bidId  bidAmount
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
                setTimeout(()=>{
                  this.isLoading2 = false;
                },1000);
                console.log('res=',res)
              }
            )
            .catch((err) => {
              setTimeout(()=>{
                this.isLoading2 = false;
              },1000);
              console.log('err=', err)
            })
      },
      loginSuccessful (e) {
        this.MyAddress = e
        console.log('登录成功回来了')
      },
      hanlderClick(index){
        this.crrent = index;
      }
    },
    mounted(){
      console.log('地址=',this.MyAddress)
    }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 780px) {
  $design-width:750; //设计稿width
  @function pxttrem($px) {
    @return $px/$design-width*23.4375+rem;//23.4375
  }
  .mobile-blindBox{
    display: block;
    // min-height: 100vh;
    background: #F7F7F7;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    &-header{
      width: 100%;
      height: pxttrem(324);
      position: relative;
      background: rgba(216, 190, 122, 0.88);
      border-radius: 0px 0px 0px 0px;
      &-content{
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        width: pxttrem(694);
        min-height: pxttrem(390);
        background: #FFFFFF;
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        .icon{
          width: pxttrem(80);
          height: pxttrem(80);
          margin: pxttrem(28) auto 0;
        }
        .icon-title{
          margin: pxttrem(24) auto 0;
          text-align: center;
          width: 100%;
        }
        .icon-content{
          margin: pxttrem(24) auto 0;
          text-align: center;
          width: pxttrem(638);
          height: pxttrem(158);
          background: #F2F2F2;
          border-radius: 0px 0px 0px 0px;
          opacity: 1;
          align-items: center;
          display: flex;
          justify-content: space-around;
          text-align: center;
          &-left{
            text-align: center;
            &-top{
              margin: pxttrem(24) pxttrem(24) pxttrem(15) pxttrem(24);
              font-size: pxttrem(36);
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #333333;
              -webkit-text-stroke: 1px rgba(0,0,0,0);
            }
            &-bottom{
              font-size: pxttrem(28);
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #666666;
              -webkit-text-stroke: 1px rgba(0,0,0,0);
            }
          }
        }
      }
    }
    &-box{
      &-ul{
        display: flex;
        margin: pxttrem(160) auto 0;
        &-li{
          width: pxttrem(160);
          height: pxttrem(64);
          margin-left: pxttrem(40);
          line-height: pxttrem(64);
          background: #DDDDDD;
          border-radius: 2px 2px 2px 2px;
          opacity: 1;
          text-align: center;
          font-size: pxttrem(28);
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
        }
        .active{
          width: pxttrem(160);
          height: pxttrem(64);
          line-height: pxttrem(64);
          text-align: center;
          background: #D8BE7A;
          font-size: pxttrem(28);
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #FFFFFF;
        }
      }
    }
  }
  .blindBox{
    display: none;
  }
}
@media only screen and (min-width: 780px) {
  .mobile-blindBox{
    display: none;
  }
  .blindBox{
    display: block;
    width: 980px;
    min-height: 600px;
    margin: 0 auto;
    position: relative;
    .tip_box{
      width: 980px;
      height: 234px;
      background: #FFFFFF;
      box-shadow: 0px 3px 16px 1px rgba(0,0,0,0.1);
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      position: relative;
      top: -20px;
      .avter{
        // margin: 20px auto 12px;
        &_box{
          margin: 0 auto;
          padding: 20px 0 12px 0;
          width: 40px;
          height: 40px;
        }
        .text{
          text-align: center;
        }
      }
      .details{
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
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
            margin-top: 12px;
          }
        }
      }
    }
  }
}

</style>