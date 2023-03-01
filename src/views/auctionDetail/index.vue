<template>
    <div>
        <div class="box">
        <div class="box-title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="box-content">
            <div class="box-content-left">
                <img :src="'https://wand.mypinata.cloud/ipfs/QmUzeXJiSu8tBAejX5EHBG9jFHDibpXwETdDDiSLE6U6SB/'+detail_box.nftId+'.png'" alt="">
            </div>
            <div class="box-content-right">
                <div class="item-auction">
                <img src="../../assets/images/home/loading.png" class="item-auction-pic" alt="">
                <div class="item-auction-text">{{ (!detail_box.isOver || !status) ? '竞拍中...' : '竞拍结束'}}</div>
                <div class="item-auction-time">
                    <Time @isOverTime="getTimeOver" :isOver=detail_box.isOver :seconds="detail_box.countdown"></Time>
                </div>
                </div>
                <div class="title">中国黄金简约戒指NFT</div>
                <div class="content">This commodity is gold palace art, superior quality, worthy of collection
                </div>
                <div class="author">创作者:
                    <img src="../../assets/images/home/icon.png" alt="">
                    <span>{{detail_box.bidder.replace(/(.{8}).*(.{8})/, '$1...$2')}}</span>
                </div>
                <div class="author">拥有者:
                    <img src="../../assets/images/home/icon.png" alt="">
                    <span>{{detail_box.bidder.replace(/(.{8}).*(.{8})/, '$1...$2')}}</span>
                </div>
                <div class="author">区块链:
                    <span>{{'Binance'}}</span>
                </div>
                <div class="author">上传时间:
                    <span class="time">{{formatDateTime(detail_box.time*1000)}}</span>
                </div>
                <div class="price">
                    <span>{{ detail_box.bidAmount+'usdt'}}</span>
                </div>
                <div class="btn" @click="centerDialogVisible = true">立即竞拍</div>
            </div>
        </div>
        <div class="box-container">
            <div class="box-container-left box-line">
                <div class="describe">详细描述：</div>
                <div class="detail-box">当季新品 中国黄金 5G黄金戒指男女款一对莫比乌斯环情侣对戒999足金指环情人节礼物 
                    莫比乌斯情侣对戒，由于目前国家已经取消了千足金、万足金的命名，所以现在的首饰
                    上是不会出现千足金和万足金标志的了，转而改为“足金999”。所以，黄金的标记有：Au
                    990/Au999、G990/G999、金990/金999、足金999、足金。
                </div>
            </div>
            <div class="box-container-right box-line">
                <div class="describe">详细描述：</div>
                <ul class="detail-box fix-col">
                    <li v-for="(item,index) in [0,1,2]" :key="index">
                        <div>{{ index+1 }} {{'你好'}}</div>
                        <div>{{ '2022-12-13 13:11' }}</div>
                        <div>{{'120000.00  USDT'}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <el-dialog
            title="请输入竞拍USDT数量"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>
                <el-input v-model="input" placeholder="请输入"></el-input>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handlerEnter(detail_box.bidId,detail_box.bidAmount)">确 定</el-button>
            </span>
        </el-dialog>
        </div>
        <div class="mobile-box">
            <div class="mobile-box-li">
                <img :src="'https://wand.mypinata.cloud/ipfs/QmUzeXJiSu8tBAejX5EHBG9jFHDibpXwETdDDiSLE6U6SB/'+this.detail_box.nftId+'.png'" alt="">
                <div class="mobile-box-li-box">
                    <div class="title">黄金足金999挂坠禅悦系列</div>
                    <div class="box-item">{{detail_box.bidAmount}}USDT</div>
                </div>
            </div>
            <ul class="mobile-box-liSecond">
                <li class="mobile-box-liSecond-li">
                    <div class="liSecond-header">拥有者人:</div>
                    <img class="liSecond-img" src="../../assets/images/home/author.png" alt="">
                    <div class="liSecond-content">{{ detail_box.bidder.replace(/(.{8}).*(.{8})/, '$1...$2')}}</div>
                </li>
                <li class="mobile-box-liSecond-li">
                    <div class="liSecond-header">区块链:</div>
                    <img class="liSecond-img" src="../../assets/images/home/author.png" alt="">
                    <div class="liSecond-content">{{ 'Binance' }}</div>
                </li>
                <li class="mobile-box-liSecond-li">
                    <div class="liSecond-header">上架时间:</div>
                    <img class="liSecond-img" src="../../assets/images/home/author.png" alt="">
                    <div class="liSecond-content">{{ formatDateTime(detail_box.time*1000) }}</div>
                </li>
            </ul>
            <div class="mobile-box-bottom">
                <div class="mobile-box-bottom-title">购买记录</div>
                <li class="mobile-box-bottom-li" v-for="(item,index) in detail_list" :key="index">
                    <div class="liSecond-header">{{index+1}}</div>
                    <div class="liSecond-header">{{item.bidder.replace(/(.{4}).*(.{4})/, '$1...$2')}}</div>
                    <div class="liSecond-header">{{ formatDateTime(item.time*1000) }}</div>
                    <div class="liSecond-header">{{ item.bidAmount+'usdt' }}</div>
                </li>
            </div>
            <div class="mobile-box-buy">
                <div class="mobile-box-buy-left"></div>
                <div class="mobile-box-buy-right"  @click="centerDialogVisible = true">{{this.detail_box.bidAmount}}USDT</div>
            </div>
            <el-dialog
                title="请输入竞拍USDT数量"
                :visible.sync="centerDialogVisible"
                width="90%"
                center>
                <span>
                    <el-input v-model="input" placeholder="请输入"></el-input>
                </span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="handlerEnter(detail_box.bidId,detail_box.bidAmount)">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
  </template>
  
  <script>
  import Time from "../../components/time.vue"
  import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
  export default {
      name:'auctionDetail',
      data(){
          return {
              detail_box:{

              },
              centerDialogVisible: false,
              input:0,
              detail_list:[],
              status:false
          }
      },
      components:{
        Time
      },
      methods:{
        handlerEnter(index,price){
            console.log(this.input , price)
            if(this.input <= price){
                this.$message.error('竞拍价格不能低于或者等于当前值');
                return;
            }
            this.inSetAcutionPrice(index,this.input)
            this.centerDialogVisible = false
        },
        getTimeOver(data){
            this.status = data
            console.log('获取状态',data)
        },
        getDataDetail(){
            const APIURL = 'https://api.thegraph.com/subgraphs/name/zhidaluo/englishauction5'
            const tokensQuery = `
                query{
                    bids(where: {nftId: ${this.detail_box.nftId}}) {
                        id
                        bidId
                        bidder
                        bidAmount
                        time
                        blockNumber
                        nftId
                    }
                }
            `
            const client = new ApolloClient({
                uri: APIURL,
                cache: new InMemoryCache(),
            })
            client
                .query({
                query: gql(tokensQuery),
                }).then((data) => {     
                    //bidId  bidAmount
                    this.detail_list = data.data.bids;
                    console.log('竞拍列表=',data)
                 }
                )
                .catch((err) => {
                console.log('err=', err)
                })
        },
      },
      mounted(){
          this.detail_box = JSON.parse(this.$route.query.name);
          this.getDataDetail();
          console.log('this.detail_box=',this.detail_box)
      }
  }
  </script>
  
  <style lang="scss" scoped>
  @media only screen and (max-width: 780px) {
    $design-width:750; //设计稿width
    @function pxttrem($px) {
        @return $px/$design-width*23.4375+rem;//23.4375
    }
    .mobile-box{
        display: block;
        min-height: 100vh;
        background: #F7F7F7;
        &-li{
            width:22.4375rem;
            height:22.4375rem;
            position: relative;
            img{
                width:22.4375rem;
                height:22.4375rem;
            }
            &-box{
                position: absolute;
                bottom: pxttrem(-220);
                width: pxttrem(694);
                height: pxttrem(178);
                left: 50%;
                transform: translate(-50%,-50%);
                background: #FFFFFF;
                box-shadow: 0px 3px 15px 1px rgba(0,0,0,0.07);
                border-radius: 4px 4px 4px 4px;
                opacity: 1;
                .title{
                    margin: pxttrem(24) 0 0 pxttrem(24);
                    font-size: pxttrem(36);
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #333333;
                }
                .box-item{
                    margin: pxttrem(24) 0 0 pxttrem(24);
                    font-size: pxttrem(40);
                    font-family: PingFang SC-Bold, PingFang SC;
                    font-weight: bold;
                    color: #333333;
                }
            }
        }
        &-liSecond{
            margin: pxttrem(170) auto 0;
            width: pxttrem(694);
            height: pxttrem(337);
            background: #FFFFFF;
            border-radius: 4px 4px 4px 4px;
            display: flex;
            flex-direction: column;
            &-li{
                height: pxttrem(84);
                line-height: pxttrem(84);
                display: flex;
                align-items: center;
                border-bottom: 1px solid #DDDDDD;
                .liSecond-header{
                    font-size: pxttrem(28);
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #666666;
                    margin: 0 pxttrem(24);
                }
                .liSecond-img{
                    width: pxttrem(36);
                    height: pxttrem(36);
                    border-radius: 50%;
                }
                .liSecond-content{
                    font-size: pxttrem(28);
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #333333;
                }
            }
        }
        &-bottom{
            margin: pxttrem(24) auto 0;
            width: pxttrem(694);
            min-height: pxttrem(514);
            background: #FFFFFF;
            border-radius: 4px 4px 4px 4px;
            display: flex;
            flex-direction: column;
            &-li{
                height: pxttrem(84);
                line-height: pxttrem(84);
                display: flex;
                align-items: center;
                justify-content: space-around;
                border-bottom: 1px solid #DDDDDD;
                // margin-top: pxttrem(24);
                .liSecond-header{
                    font-size: pxttrem(16);
                    font-family: PingFang SC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #666666;
                    margin: 0 pxttrem(24);
                }

            }
            &-title{
                margin: pxttrem(24) 0 0 pxttrem(24);
                font-size: pxttrem(28);
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #666666;
            }
        }
        &-buy{
            width: 100%;
            height: pxttrem(100);
            background: #fff;
            display: flex;
            justify-content: space-between;
            margin-top: pxttrem(24);
            &-left{
                width: pxttrem(250);
                height: pxttrem(100);
            }
            &-right{
                width: pxttrem(450);
                height: pxttrem(100);
                background: #D8BE7A;
                border-radius: 0px 0px 0px 0px;
                opacity: 1;
                font-size: pxttrem(40);
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                color: #FFFFFF;
                line-height: pxttrem(100);
                text-align: center;
                -webkit-text-stroke: 1px rgba(0,0,0,0);
                text-stroke: 1px rgba(0,0,0,0);
            }
        }
    }
    .box{
        display: none;
    }
}
@media only screen and (min-width: 780px) {
    .mobile-box{
        display: none;
    }
    .box{
      width: 1200px;
      margin: 0 auto;
      &-title{
          margin-top: 24px;
      }
      &-content{
          margin-top: 45px;
          display: flex;
          justify-content: space-between;
          &-left{
              width: 596px;
              height: 596px;
              border-radius: 2px 2px 2px 2px;
              img{
                  width: 596px;
                  height: 596px;
              }
          }
          &-right{
              display: flex;
              flex-direction: column;
              margin-left: 40px;
              .title{
                  margin-top: 20px;
                  font-size: 20px;
                  font-family: Segoe UI-Bold, Segoe UI;
                  font-weight: bold;
                  color: #000000;
              }
              .content{
                  width: 560px;
                  height: 132px;
                  background: #EEEEEE;
                  border-radius: 0px 0px 0px 0px;
                  opacity: 1;
                  padding: 20px;
                  margin-top: 20px;
                  font-family: Segoe UI-Regular, Segoe UI;
                  font-weight: 400;
                  color: #000000;
                  line-height: 24px;
              }
              .author{
                  display: flex;
                  align-items: center;
                  margin-top: 25px;
                  font-size: 12px;
                  font-family: Segoe UI-Regular, Segoe UI;
                  font-weight: 400;
                  color: #666666;
                  .time{
                      color: #000000;
                  }
                  img{
                      width: 24px;
                      height: 24px;
                      border-radius: 50%;
                      margin: 0 8px;
                  }
              }
              .price{
                  font-size: 24px;
                  font-family: Segoe UI-Bold, Segoe UI;
                  font-weight: bold;
                  color: #000000;
                  margin-top: 25px;
              }
              .btn{
                  width: 340px;
                  height: 66px;
                  line-height: 66px;
                  text-align: center;
                  background: #D8BE7A;
                  box-shadow: 0px 3px 15px 1px rgba(216,190,122,0.4);
                  border-radius: 2px 2px 2px 2px;
                  opacity: 1;
                  font-size: 24px;
                  font-family: Segoe UI-Bold, Segoe UI;
                  font-weight: bold;
                  color: #000000;
                  margin-top: 24px;
                  cursor: pointer;
              }
          }
      }
      &-container{
          display: flex;
          justify-content: space-between;
          margin: 62px 0;
          &-left{
              width: 600px;
              background: #EEEEEE;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
          }
          &-right{
              width: 560px;
              background: #EEEEEE;
              border-radius: 0px 0px 0px 0px;
              opacity: 1;
          }
          .box-line{
              .describe{
                  font-size: 14px;
                  font-family: Segoe UI-Regular, Segoe UI;
                  font-weight: 400;
                  color: #666666;
                  margin: 20px 0 0 20px;
              }
              .detail-box{
                  padding: 20px;
              }
              .fix-col{
                  li{
                      display: flex;
                      justify-content: space-between;
                  }
              }
          }
      }
  }
  .item-auction{
    width: 327px;
    height: 28px;
    background: #D8BE7A;
    border-radius: 0px 0px 0px 0px;
    opacity: 0.8;
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
}
  </style>