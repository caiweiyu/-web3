
 <template>
    <div>
      <Product :list="list"></Product>
    </div>
</template>

<script>
import Product from '../../components/myCollect_list.vue'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
export default {
    name:'myCollection',
    props:{

    },
    data(){
        return {
          list:[]
        }
    },
    components:{
      Product
    },
    methods:{
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
              console.log('data=',data.data.itemListeds);
              this.list = data.data.itemListeds;
            }
          )
          .catch((err) => {
            console.log('err=', err);
          })
      
      },
    },
    mounted(){
        this.getDataList()
        console.log(this.list)
    }
}
</script>

<style lang="scss" scoped>
.itemContent{
  width: 980px;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-flow: wrap;
  &-box{
    width: 307px;
    height: 439px;
    margin: 10px 5px;
    background:url("../../assets/images/home/reduce_bg.png")center no-repeat;
    background-size: 100% 100%;
    opacity: 1;
    .box-pic{
      width: 275px;
      height: 388px;
      margin: 24px 16px;
      background: #fff;
      position: relative;
    }
    &-img{
      width: 275px;
      height: 220px;
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
        width: 50px;
        height: 16px;
        font-size: 12px;
        font-family: Segoe UI-Regular, Segoe UI;
        font-weight: 400;
        color: #666666;
      }
    }
    &-title{
      margin: 10px 0 0 20px;
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
        margin: 16px 0 0 20px;
        &-top{
          font-size: 12px;
          font-family: Segoe UI-Regular, Segoe UI;
          font-weight: 400;
          color: #000000;
        }
        &-bottom{
          font-size: 20px;
          font-family: Segoe UI-Bold, Segoe UI;
          font-weight: bold;
          color: #000000;
        }
      }
      .box-right{
        margin: 24px 20px 0 0;
        width: 98px;
        height: 36px;
        line-height: 36px;
        background: #D8BE7A;
        box-shadow: 0px 3px 15px 1px rgba(216,190,122,0.4);
        opacity: 0.8;
        font-size: 16px;
        font-family: Segoe UI-Bold, Segoe UI;
        font-weight: bold;
        color: #000000;
        text-align: center;
      }
    }
  }
}
.itemContent-box2{
  position: relative;
}
.item-auction{
  width: 307px;
  height: 28px;
  background: #FFF32F;
  border-radius: 0px 0px 0px 0px;
  opacity: 0.8;
  position: absolute;
  top: 245px;
//   left: 20px;
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
    align-items: center;
    margin-left: 67px;
    div{
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      font-size: 12px;
      color: #ffffff;
      background: #333333;
    }
  }
}
</style>

