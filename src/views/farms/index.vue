<template>
  <div class="PrivateEquityBox">
    <div class="box">
      <Navigator :crrent2="0"></Navigator>
      <Action_products :list="list"></Action_products>
    </div>

  </div>
</template>

<script>
import Navigator from "../../components/navigator_list.vue";
import Action_products from '../../components/action_products.vue'
import { createClient } from 'urql'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
export default {
  name: "farms",
  components: {
    Action_products,
    Navigator
  }, 
  data() {
    return {
      navigator_list:[
        'All','Art','Collectibles','Photography','Sport','Trading card','Utility','Virtual worlds'
      ],
      crrent:0,
      all_list:[
        {amount:1}
      ],
      param:[],
      list:[],
      loading:null
    };
  },
  created(){
    this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    this.getDataList();
  },
  mounted() {
  },
  methods: {
    //
    //获取竞拍列表数据
    getDataList(){
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
      // `
      //   query{
      //     bids(orderDirection: desc, orderBy: bidAmount, first: 1){
      //       bidAmount
      //       bidId
      //       bidder
      //       blockNumber
      //       blockTimestamp
      //       id
      //       nftId
      //       time
      //     }
      //   }
      // `
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
            this.list = res;
            setTimeout(()=>{
              this.loading.close();
            },1000);
            console.log('res=',res)
          }
        )
        .catch((err) => {
          setTimeout(()=>{
            this.loading.close();
          },1000);
          console.log('err=', err)
        })
    
    },
    //下标获取
    hanlder(index){
      this.crrent = index
    },
    // 领取释放
    receiveSf() {
      if (this.AvailableForRelease == 0) {
        this.$message.error("没有可领取的释放");
        return;
      }
      this.receiveSfABI();
    },
  },
};
</script>

<style scoped lang="scss">
  // .PrivateEquityBox{
  //   .box{
  //     width: 1200px;
  //     margin: 0 auto 0;
  //     &-item{
  //       display: flex;
  //       &-li{
  //         cursor: pointer;
  //         width: 102px;
  //         height: 28px;
  //         line-height: 28px;
  //         text-align: center;
  //         font-size: 14px;
  //         font-family: Segoe UI-Regular, Segoe UI;
  //         font-weight: 400;
  //         color: #999999;
  //         border: 1px solid #666666;
  //       }
  //       &-li:not(first-child){
  //         margin-left:40px;
  //       }
  //       .active{
  //         background: #FFF333;
  //         box-shadow: 0px 3px 16px 1px rgba(0,0,0,0.08);
  //         border-radius: 0px 0px 0px 0px;
  //         color: #000000;
  //         border: 1px solid transparent;
  //       }
  //     }
  //     .sort{
  //       margin: 24px 0 0 0;
  //     }
  //   }
  // }
</style>
