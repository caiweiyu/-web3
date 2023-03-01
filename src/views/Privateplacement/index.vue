<template>
  <div class="PrivateEquityBox">
    <div class="box">
      <Navigator :crrent2="1"></Navigator>
      <Product :list="list"></Product>
    </div>

  </div>
</template>

<script>
import "./mobile.scss";
import Navigator from "../../components/navigator_list.vue";
import Product from '../../components/product_list.vue'
import { createClient } from 'urql'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { HttpLink } from 'apollo-link-http';
export default {
  name: "Privateplacement",
  components: {
    Product,
    Navigator
  }, 
  data() {
    return {
      list:[],
      loading:null
    };
  },

  mounted() {
    this.loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    this.getDataList();
  },
  methods: {
    //获取NFT列表数据
    getDataList(){
      const APIURL = 'https://api.thegraph.com/subgraphs/name/zhidaluo/wand'
      const tokensQuery = `
        query {
          itemListeds {
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
            this.list = data.data.itemListeds;
            setTimeout(()=>{
              this.loading.close();
            },1000);
          }
        )
        .catch((err) => {
          console.log('err=', err);
          setTimeout(()=>{
            this.loading.close();
          },1000);
        })
    
    },
    //点击下标
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

</style>
