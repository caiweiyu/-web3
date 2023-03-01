<template>
  <div>
    <div class="box">
      <div class="header"></div>
      <ul class="tip_box_left">
            <a
              :href="'#' + item.path"
              :class="['tip_box_left_li',crrent == index ? 'active' :'']"
              v-for="(item, index) in nav"
              :key="index"
              @click="deal(index)">
              <span>{{ item.name }}</span>
            </a>
      </ul>
      <div class="blindBox" id="blindBox">
          <div class="tip_box">
              <div class="avter">
                <div class="avter_box">
                  <i class=" el-icon-user-solid" style="font-size: 40px;"></i>
                </div>
                <div class="text">{{ address.replace(/(.{6}).*(.{4})/, '$1...$2') }}</div>
              </div>
              <div class="details">
                  <div class="details_item">
                    <div>{{ buyNumber }}</div>
                    <div class="details_item_box">已购买</div>
                  </div>
                  <div class="details_item">
                    <div>{{ bnbBalance }}</div>
                    <div class="details_item_box">资产(BNB)</div>
                  </div>
                  <div class="details_item">
                    <div>{{ wandBalance }}</div>
                    <div class="details_item_box">资产(Wand)</div>
                  </div>
                  <div class="details_item">
                    <div>{{ usdtBalance }}</div>
                    <div class="details_item_box">资产(USDT)</div>
                  </div>
              </div>
              <el-divider></el-divider>
          </div>
          <!-- <div  v-show="crrent==0">
            <div>| 我的NFT</div>
            <Product></Product>
          </div> -->
      </div>
      <!-- <main>
        <div class="content">
          <router-view></router-view>
        </div>
      </main> -->
    </div>
    <!-- <div class="box-mobile"></div> -->
    <div v-show="crrent==0" class="myNFT">| 我的NFT</div>
    <main>
        <div class="content">
          <router-view></router-view>
        </div>
      </main>
  </div>
</template>

<script>
import "./mobile.scss";
import Product from '../../components/my_products.vue'
import { mapState } from "vuex";
export default {
  name: "blindBox",
  data() {
    return {
      blindBoxList: [],
      all:[
        '个人信息',
        '我参与的',
        '我的收藏',
        // '邀请新人'
      ],
      nav:[
        {
          name:'个人信息',
          path: '/personalInfo',
        },
        {
          name:'我参与的',
          path: '/myParticipation',
        },
        {
          name: '我的收藏',
          path: '/myCollection',
        },
        // {
        //   name:'邀请新人',
        //   path: '/Invitation',
        // },
      ],
      crrent:0
    };
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
  components:{
    Product
  },
  mounted() {
    this.getUSDTblance()
    console.log("进来了");
    // this.AllBlindBoxesABI();
  },
  methods: {
    deal(index){
      this.crrent = index
    }
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 780px) {
  $design-width:750; //设计稿width
  @function pxttrem($px) {
    @return $px/$design-width*23.4375+rem;//23.4375
  }
  .box{
    display: none;
  }
  .box-mobile{
    display: block;
    // height: 100vh;
  }
  .myNFT{
    display: none;
  }
}
@media only screen and (min-width: 780px) {

  .box-mobile{
    display: none;
  }  
  .box{
    display: block;
  }
  .myNFT{
    width: 1200px;
    margin: 10px auto;
    text-align: left;
  }
  .header{
      width: 100%;
      height: 120px;
      // background: #666666;
      background: url('../../assets/images/home/bd.png') center no-repeat;
      background-size: 100% 100%;
  }
  .tip_box_left{
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 160px;
      // height: 160px;
      left: 75px;
      top: 165px;
      z-index: 111;
      box-shadow: 0px 3px 16px 1px rgba(0,0,0,0.1);
      &_li{
        width: 160px;
        height: 40px;
        line-height: 40px;
        background: #FFFFFF;
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        font-size: 12px;
        font-family: Segoe UI-Regular, Segoe UI;
        font-weight: 400;
        color: #666666;
        text-align: center;
        cursor: pointer;
      }
      .active{
        background: #FFF333;
        color: #000000;
        font-weight: bold;
      }
  }
  .blindBox{
    width: 980px;
    // min-height: 600px;
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
  .content{
    flex: 1;
    /* overflow-x: hidden; */
    /* overflow-y: scroll; */
    background: #ffffff;
  }
}
</style>
