import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout";

//处理重复跳转报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
    return routerPush.call(this, location).catch(err => {})
}
//运用实例
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: {
      title: "辉戈  一键发币",
    },
    component: () => import("@/views/tokenIndex"),
  },
  {
    path: "/tokenIndexNext",
    meta: {
      title: "辉戈  一键发币",
    },
    component: () => import("@/views/tokenIndexNext"),
  },
  {
    path: "/tokenIndexEnd",
    meta: {
      title: "辉戈  一键发币",
    },
    component: () => import("@/views/tokenIndexEnd"),
  },
  {
    path: "/gameFi",
    meta: {
      title: "Nft market",
    },
    component: () => import("@/views/gameFi"),
  },
  // {
  //   path: "/",
  //   name: "",
  //   component: layout,
  //   children: [
  //     {
  //       path: "/",
  //       redirect: "/home",
  //     },
  //     {
  //       path: "/home",
  //       meta: {
  //         title: '首页'
  //       },
  //       component: () => import("@/views/home"),
  //     },
  //     {
  //       meta: {
  //         title: '私募'
  //       },
  //       path: "/Privateplacement",
  //       name: "Privateplacement",
        
  //       component: () => import("@/views/Privateplacement"),
  //     },
  //     {
  //       path: "/farms",
  //       name: "farms",
  //       meta: {
  //         title: 'farms'
  //       },
  //       component: () => import("@/views/farms"),
  //     },
  //     {
  //       path: "/buyDetail",
  //       name: "buyDetail",
  //       meta: {
  //         title: 'buyDetail'
  //       },
  //       component: () => import("@/views/buyDetail"),
  //     },
  //     {
  //       path: "/auctionDetail",
  //       name: "auctionDetail",
  //       meta: {
  //         title: 'auctionDetail'
  //       },
  //       component: () => import("@/views/auctionDetail"),
  //     },
  //     {
  //       path: "/search_page",
  //       name: "search_page",
  //       meta: { 
  //         title: "搜索结果",
  //       },
  //       component: () => import("@/views/searchPage"),
  //     },
  //     {
  //       path: "/blindBox",
  //       name: "blindBox",
  //       meta: {
  //         title: "NFT 盲盒",
  //       },
  //       redirect:'/personalInfo',
  //       component: () => import("@/views/blindBox"),
  //       children:[
  //         {
  //           path: "/personalInfo",
  //           name: "personalInfo",
  //           meta: {
  //             title: "个人信息",
  //           },
  //           component: () => import("@/views/personalInfo"),
  //         },
  //         {
  //           path: "/myParticipation",
  //           name: "myParticipation",
  //           meta: {
  //             title: "我参与的",
  //           },
  //           component: () => import("@/views/myParticipation"),
  //         },
  //         {
  //           path: "/myCollection",
  //           name: "myCollection",
  //           meta: {
  //             title: "我的收藏",
  //           },
  //           component: () => import("@/views/myCollection"),
  //         },
  //         {
  //           path: "/Invitation",
  //           name: "Invitation",
  //           meta: {
  //             title: "我的邀请",
  //           },
  //           component: () => import("@/views/Invitation"),
  //         },
  //       ]
  //     },
  //     {
  //       path: "/mining",
  //       name: "mining",
  //       meta: {
  //         title: "NFT 挖矿",
  //       },
  //       component: () => import("@/views/mining"),
  //     },
  //     {
  //       path: "/blindBoxInfo",
  //       name: "blindBoxInfo",
  //       meta: {
  //         title: "盲盒详情",
  //       },
  //       component: () => import("@/views/blindBox/info"),
  //     },
  //     {
  //       path: "/Casting",
  //       name: "Casting",
  //       meta: {
  //         title: "铸造",
  //       },
  //       component: () => import("@/views/Casting"),
  //     },
  //     {
  //       path: "/nftMarket",
  //       name: "nftMarket",
  //       meta: {
  //         title: "Nft market",
  //       },
  //       component: () => import("@/views/nftMarket"),
  //     },
  //     {
  //       path: "/nftMarketInfo",
  //       name: "nftMarketInfo",
  //       meta: {
  //         title: "Nft market详情",
  //       },
  //       component: () => import("@/views/nftMarket/info"),
  //     },
      {
        path: "/projectInfo",
        name: "projectInfo",
        meta: {
          title: "项目介绍",
        },
        component: () => import("@/views/projectInfo"),
      },
  //     {
  //       path: "/ProjectIntroduction",
  //       name: "ProjectIntroduction",
  //       meta: {
  //         title: "项目介绍",
  //       },
  //       component: () => import("@/views/ProjectIntroduction"),
  //     },
  //     {
  //       path: "/myCommunities",
  //       name: "myCommunities",
  //       meta: {
  //         title: "我的社区",
  //       },
  //       component: () => import("@/views/myCommunities"),
  //     },
      {
        path: "/myCommunity",
        name: "myCommunity",
        meta: {
          title: "我的社区",
        },
        component: () => import("@/views/myCommunity"),
      },
      {
        path: "/foundation",
        name: "foundation",
        meta: {
          title: "基金会",
        },
        component: () => import("@/views/foundation"),
      },
      {
        path: "/yuanUniverse",
        name: 'yuanUniverse',
        meta: {
          title: "元宇宙",
        },
        component: () => import("@/views/yuanUniverse"),
      },
  //     {
  //       path: "/Administrator",
  //       name: "Administrator",
  //       meta: { 
  //         title: "管理",
  //       },
  //       component: () => import("@/views/Administrator"),
  //     },
  //     {
  //       path: "*",
  //       meta: {
  //         title: "404",
  //       },
  //       component: () => import("@/views/layout/404"),
  //     },
  //   ],
  // },
];
// yuanUniverse
const router = new VueRouter({
  routes,
});

export default router;
