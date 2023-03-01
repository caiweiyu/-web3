
  <template>
    <div v-loading="isLoading">
      <Action_products :list="list"></Action_products>
    </div>
  </template>
    
    <script>
    import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
    import { mapState } from "vuex";
    import Action_products from '../../components/action_products.vue'
    export default {
        name:'myParticipation',
        props:{
            
        },
        data(){
            return {
              list:[],
              isLoading:true
            }
        },
        components: {
          Action_products
        }, 
        computed:{
          ...mapState({
              address:(state) => state.user.address
          })
        },
        mounted(){
          this.getDataList()
          console.log('进入mounted',this.list)
        },
        methods:{
        //获取我参与的竞拍列表数据
        getDataList(){
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
                this.list = res;
                setTimeout(()=>{
                  this.isLoading = false;
                },1000);
                console.log('res=',res)
              }
            )
            .catch((err) => {
              setTimeout(()=>{
                this.isLoading = false;
              },1000);
              console.log('err=', err)
            })
        
        },
        },
    }
    </script>
    
    <style lang="scss" scoped>
    </style>
