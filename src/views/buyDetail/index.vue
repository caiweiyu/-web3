<template>
    <div>
        <div class="box">
            <!-- <div class="box-title">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div> -->
            <div class="box-content">
                <div class="box-content-left">
                    <img :src="'https://wand.mypinata.cloud/ipfs/QmUzeXJiSu8tBAejX5EHBG9jFHDibpXwETdDDiSLE6U6SB/'+this.detail_box.tokenId+'.png'" alt="">
                </div>
                <div class="box-content-right">
                    <div class="title">中国黄金简约戒指NFT</div>
                    <div class="content">This commodity is gold palace art...
                    </div>
                    <div class="author">创作者:
                        <img src="../../assets/images/home/author.png" alt="">
                        <span>{{detail_box.seller && detail_box.seller.replace(/(.{4}).*(.{4})/, '$1...$2')}}</span>
                    </div>
                    <div class="author">拥有者:
                        <img src="../../assets/images/home/author.png" alt="">
                        <span>{{detail_box.seller && detail_box.seller.replace(/(.{4}).*(.{4})/, '$1...$2')}}</span>
                    </div>
                    <div class="author">区块链:
                        <span>{{'Binance'}}</span>
                    </div>
                    <div class="author">上传时间:
                        <span class="time">{{ formatDateTime((detail_box.blockTimestamp)*1000) }}</span>
                    </div>
                    <div class="price">
                        <span>{{detail_box.price >= 100000000000000000 ? (Number(detail_box.price)/Math.pow(10,18)) : "less than 0.1" }}BNB</span>
                    </div>
                    <div class="btn" @click="buynow(detail_box)">立即购买</div>
                </div>
            </div>
            <div class="box-container">
                <div class="box-container-left box-line">
                    <div class="describe">详细描述：</div>
                    <div class="detail-box">This commodity is gold palace art...
                    </div>
                </div>
                <div class="box-container-right box-line">
                    <div class="describe">详细描述：</div>
                    <ul class="detail-box fix-col">
                        <li v-for="(item,index) in [0,1,2]" :key="index">
                            <div>{{ index+1 }} {{'x0..165'}}</div>
                            <div>{{ '2022-12-13 13:11' }}</div>
                            <div>{{'120000.00  USDT'}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mobile-box">
            <div class="mobile-box-li">
                <img :src="'https://wand.mypinata.cloud/ipfs/QmUzeXJiSu8tBAejX5EHBG9jFHDibpXwETdDDiSLE6U6SB/'+this.detail_box.tokenId+'.png'" alt="">
                <div class="mobile-box-li-box">
                    <div class="title">中国黄金简约戒指NFT</div>
                    <div class="box-item">{{detail_box.price >= 100000000000000000 ? (Number(detail_box.price)/Math.pow(10,18)) : "less than 0.1" + 'BNB'}}</div>
                </div>
            </div>
            <ul class="mobile-box-liSecond">
                <li class="mobile-box-liSecond-li">
                    <div class="liSecond-header">创作者:</div>
                    <img class="liSecond-img" src="../../assets/images/home/author.png" alt="">
                    <div class="liSecond-content">{{detail_box.seller && detail_box.seller.replace(/(.{4}).*(.{4})/, '$1...$2')}}</div>
                </li>
                <li class="mobile-box-liSecond-li">
                    <div class="liSecond-header">拥有者者:</div>
                    <img class="liSecond-img" src="../../assets/images/home/author.png" alt="">
                    <div class="liSecond-content">{{detail_box.seller && detail_box.seller.replace(/(.{4}).*(.{4})/, '$1...$2')}}</div>
                </li>
            </ul>
            <div class="mobile-box-bottom">
                <div class="mobile-box-bottom-title">购买记录</div>
                <li class="mobile-box-bottom-li" v-for="(item,index) in [0,1,2,3]" :key="index">
                    <div class="liSecond-header">{{index+1}}</div>
                    <div class="liSecond-header">x01..784</div>
                    <div class="liSecond-header">2023-2-11 13:11</div>
                    <div class="liSecond-header">4.00</div>
                </li>
            </div>
            <div class="mobile-box-buy">
                <div class="mobile-box-buy-left"></div>
                <div class="mobile-box-buy-right"  @click="buynow(detail_box)">{{detail_box.price >= 100000000000000000 ? (Number(detail_box.price)/Math.pow(10,18)) : "less than 0.1" }}BNB</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'buyDetail',
    data(){
        return {
            detail_box:{
                price:"0.1",
                tokenId:"0",
                seller:'x'
            }
        }
    },
    mounted(){
        this.detail_box = JSON.parse(this.$route.query.name);
        console.log('详情=',this.detail_box)
    },
    methods:{
        buynow(data){
            console.log('data=',data)
            // return;
            // this.buyNftMarket(0.1,1)
            this.buyNftMarket(data.price,data.tokenId)
        }
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
            // width:22.4375rem;
            height:22.4375rem;
            position: relative;
            img{
                width:22.4375rem;
                height:22.4375rem;
                margin: auto;
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
                    font-size: pxttrem(28);
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
            // width: 100%;
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
        display: block;
        &-title{
            margin-top: 28px;
        }
        &-content{
            width: 1200px;
            margin: 45px auto 0;
            // margin-top: 45px;
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
                    margin-top: 35px;
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
                    margin-top: 60px;
                    cursor: pointer;
                }
            }
        }
        &-container{
            display: flex;
            justify-content: space-between;
            width: 1200px;
            margin: 62px auto 62px;
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
        }   
</style>