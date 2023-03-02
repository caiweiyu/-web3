<template>
  <div class="yuanUniverse">
    <div class="page-head">
      <!-- <img
        class="back"
        src="@/assets/images/back.png"
        @click="$router.back()"
      />
      metaverse -->
      <Navigator :title="'元宇宙'">
        <template v-slot:goBack>
            <i :class="['kou','el-icon-arrow-left']" @click="goBack"></i>
        </template>
    </Navigator>
    </div>
    <div class="textMain">
      元宇宙宣发，代币上链 2023.6.1 8 上线币安智能链，打造二级市场流量数据上线在 bsc链上预售。预售 7 天，每天限量，总预 售 100 亿枚 预售需要用 USDT 代币支付，以竞拍或摇奖所得，数量极其有限，抱着共同富裕的目标前行。 ，需购买 代币进行孵化装备及游戏道具装备道具可参与智力游戏，从中获取代币奖励 这波红利可能会震惊整个元宇宙 2022.01.01 元宇宙世界竞赛日世界游戏生态正式落地马斯克、SHIB 技术团队、FISH WORLD 鱼世界游戏技术团队，及全球顶尖的极客团队、 全球各
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
.yuanUniverse {
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
