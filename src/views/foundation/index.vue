<template>
  <div class="yuanUniverse">
    <div class="page-head">
      <!-- <img
        class="back"
        src="@/assets/images/back.png"
        @click="$router.back()"
      />
      metaverse -->
      <Navigator :title="'基金会'">
        <template v-slot:goBack>
            <i :class="['kou','el-icon-arrow-left']" @click="goBack"></i>
        </template>
    </Navigator>
    </div>
    <div class="textMain">
      基金会（慈善基金会，foundation），是指利用自然人、法人或者其他组织捐赠的财产，以从事公益事业为目的，按照本条例的规定成立的非营利性法人。 基金会分为面向公众募捐的基金会和不得面向公众募捐的基金会。公募基金会按照募捐的地域范围，分为全国性公募基金会和地方性公募基金会。根据《基金会管理条例》规定，基金会必须在民政部门登记方能合法运作，就其性质而言是一种民间非营利组织。 基金会取得成熟发展最早是在美国。美国基金会在20世纪后开始蓬勃发展。1900年的卡耐基基金会和洛克菲勒基金会是最早成立的一批基金会中比较知名的两家。1936年成立的福特基金会，由福特家族资助，拥有数十亿美元，项目遍布全球，影响范围很广。2000年，比尔及梅琳达·盖茨基金会成立，成为全球最大的慈善基金会，旨在促进全球卫生和教育领域的平等。 1、公益性 基金会的公益性集中体现在三个方面：一是基金会源于捐赠，是公益捐赠的制度化和组织化形式；二是基金会有明确的公益宗旨；三是基金会有明确的公益用途，通过各种项目活动使特定群体和整个社会受益。公益性决定了基金会在本质上是一种社会公益组织。 
    </div>
  </div>
</template>

<script>
import "./mobile.css";
import Navigator from '../../components/navigator_bar.vue'
export default {
  name: "foundation",
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
