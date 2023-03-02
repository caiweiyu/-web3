<template>
  <div class="projectInfo">
    <div class="page-head">
      <!-- <img
        class="back"
        src="@/assets/images/back.png"
        @click="$router.back()"
      /> -->
      <Navigator :title="'项目介绍'">
        <template v-slot:goBack>
            <i :class="['kou','el-icon-arrow-left']" @click="goBack"></i>
        </template>
    </Navigator>
    </div>
    <div class="textMain">
      一款以元宇宙为背景的 集 FARM, NFT MARKET ,NFT 盲盒，GAME
      FIGHT,METAVERSE（质押挖矿，艺术品
      拍卖，链上游戏，元宇宙）为一体的综合性平台。 它应用了当前最流 行的
      NFT概念，完美地融合了游戏元素和 DeFi 产量耕作，让玩家在玩的同时获得娱乐。
      玩家可以购买或收集各种卡包的 NFT 产品，以获得游戏的体验加成。他们可以在
      许多游戏场景中与获得的能量加成，以增强鱼苗饲养的速度。他们还可以在游戏中通过
      参与 DeFi 收益 培育获得 FISH 代币，在交易市场买卖 NFT 卡，以 FISH
      代币作为支付代币。
      该游戏结合了传统游戏和区块链游戏的特点，为许多只想玩得开心的玩家提供了充满激
      情 的游戏体验，也为想收集和交易 NFT 的玩家提供了一个 NFT
      生态系统。作为链上 资产， FISH WORLD 鱼世界的大多数 NFT 符合币安智能链上的
      BEP721 标准。游戏的一 些数字资产也保存在传统的
      数据库中，为传统玩家享受游戏铺平了道路。 FISH
      鱼世界不仅仅是一款迎合区块链玩家的游戏，更是一款可以将无数传统手机
      游戏玩家引入区块链元宇宙的游戏。
    </div>
  </div>
</template>

<script>
import "./mobile.css";
import Navigator from '../../components/navigator_bar.vue'
export default {
  name: "projectInfo",
  data(){
    return {

    }
  },
  components:{
      Navigator
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped lang="scss">
$design-width:750; //设计稿width
@function pxttrem($px) {
    @return $px/$design-width*20.06817+rem;//23.4375
}
.projectInfo {
  padding-top: pxttrem(62);
  min-height: calc(100vh - 1.65897rem);
  width: 100%;
  background: #000000;
}
.page-head {
  display: none;
}
.textMain {
  width: pxttrem(679);
  // height: 1235px;
  font-size: pxttrem(32);
  margin: auto;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
}
</style>
