<template>
  <div class="yuanUniverse">
    <div class="page-head">
      <!-- <img
        class="back"
        src="@/assets/images/back.png"
        @click="$router.back()"
      />
      metaverse -->
      <Navigator :title="'我的社区'">
        <template v-slot:goBack>
            <i :class="['kou','el-icon-arrow-left']" @click="goBack"></i>
        </template>
    </Navigator>
    </div>
    <div class="textMain">
      我的社区 社区是若干社会群体或社会组织聚集在某一个领域里所形成的一个生活上相互关联的大集体，是社会有机体最基本的内容，是宏观社会的缩影。社会学家给社区下出的定义有140多种。社区是具有某种互动关系的和共同文化维系力的，在一定领域内相互关联的人群形成的共同体及其活动区域。 尽管社会学家对社区下的定义各不相同，在构成社区的基本要素上认识还是基本一致的，普遍认为一个社区应该包括一定数量的人口、一定范围的地域、一定规模的设施、一定特征的文化、一定类型的组织。社区就是这样一个“聚居在一定地域范围内的人们所组成的社会
    </div>
  </div>
</template>

<script>
import "./mobile.css";
import Navigator from '../../components/navigator_bar.vue'
export default {
  name: "myCommunity",
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
