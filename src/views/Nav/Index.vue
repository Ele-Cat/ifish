<template>
  <Draggable
    :list="apps"
    :animation="100"
    item-key="id"
    class="list-group apps"
    :forceFallback="true"
    ghost-class="ghost"
    @change="onMoveCallback"
    :move="getdata"
  >
    <template #item="{ element }">
      <div class="app" :class="[`column${element.gridSize[1]}-row${element.gridSize[0]}`]">
        <div class="dataset">
          <div class="bookmark" v-if="element.type === 'bookmark'">
            <img :src="element.data.icon" alt="">
            <div class="description" v-if="element.gridSize[1] == 2 && element.gridSize[0] == 1">
              <p>{{element.data.title}}</p>
              <span>{{element.data.description}}</span>
            </div>
          </div>
          <div class="comp" v-else>
            {{element.data.title}}
          </div>
        </div>
        <!-- <p>{{app.data.title}}{{app.gridSize}}{{app.gridPosition}}</p> -->
        <p>{{element.data.title}}</p>
      </div>
    </template>
  </Draggable>
</template>

<script setup>
import { reactive } from "vue";
import Draggable from 'vuedraggable';

const apps = reactive([
  {
    id: "ZGr1TVTtF59q1mne2m2GU",
    type: "bookmark",
    data: {
      id: "649160bf45795c207913c7f5",
      title: "淘宝网",
      url: "https://www.taobao.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/bookmark/648fb79675652244eaa103a1/373144916.png",
      keywords:
        "淘宝,taobao,tao,掏宝,网上购物,C2C,在线交易,交易市场,网上交易,交易市场,网上买,网上卖,购物网站,团购,网上贸易,安全购物,电子商务,放心买,供应,买卖信息,网店,一口价,拍卖,网上开店,网络购物,打折,免费开店,网购,频道,店铺",
      description:
        "淘宝网 - 亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费/点卡充值… 数亿优质商品，同时提供担保交易(先收货后付款)等安全交易保障服务，并由商家提供退货承诺、破损补寄等消费者保障服务，让你安心享受网上购物乐趣！",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["SHOPPING"],
      background: "#F6490E",
      svg: "https://image.picknewtab.com/bookmark-icon/373144916a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [1, 1],
  },
  {
    id: "GDipy6hx-56EkL__MM1E6",
    type: "bookmark",
    data: {
      id: "64981303798d3553735090c5",
      title: "优酷",
      url: "https://www.youku.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1978144947.png",
      keywords: "视频,视频分享,视频搜索,视频播放",
      description:
        "优酷视频,视频服务平台,提供视频播放,视频发布,视频搜索,视频分享",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["VIDEO", "PLAY"],
      background: "#ffffff",
      svg: "https://image.picknewtab.com/bookmark-icon/1978144947a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [4, 1],
  },
  {
    id: "ZD7KSlhCyXR9MSYVMpxkv",
    type: "bookmark",
    data: {
      id: "64981691798d3553735090ce",
      title: "抖音",
      url: "https://www.douyin.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1154532993.png",
      keywords: "抖音,抖音音乐,抖音短视频,抖音官网,amemv,抖音app,抖音app下载",
      description:
        "抖音让每一个人看见并连接更大的世界，鼓励表达、沟通和记录，激发创造，丰富人们的精神世界，让现实生活更美好。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["VIDEO", "LIVE"],
      background: "#130D1A",
      svg: "https://image.picknewtab.com/bookmark-icon/1154532993a.svg",
    },
    gridSize: [1, 2],
    gridPosition: [5, 1],
  },
  {
    id: "gnHA6qclAMyfHmfXKS3uH",
    type: "bookmark",
    data: {
      id: "6497f146b5ddc241a7df585d",
      title: "哔哩哔哩",
      url: "https://www.bilibili.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1704817403.png",
      keywords: "Bilibili,哔哩哔哩,,弹幕视频,B站,bzhan,b,bilibili",
      description:
        "哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["VIDEO"],
      background: "#E76A8D",
      svg: "https://image.picknewtab.com/bookmark-icon/1704817403a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [7, 1],
  },
  {
    id: "T7NMJCjPVuHO1V_VaO9hR",
    type: "bookmark",
    data: {
      id: "64970f3b408c752862322016",
      title: "京东",
      url: "https://www.jd.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/bookmark/648fb79675652244eaa103a1/960980333.png",
      keywords:
        "京东,jd,网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,",
      description:
        "京东JD.COM-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["SHOPPING"],
      background: "#EC141C",
      svg: "https://image.picknewtab.com/bookmark-icon/960980333a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [8, 1],
  },
  {
    id: "Qt9z1pKGkAxbsbwFgcXdN",
    type: "bookmark",
    data: {
      id: "6497eac2c85d9175a5fa8493",
      title: "Github",
      url: "https://www.github.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1652106980.png",
      keywords: "",
      description:
        "GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["PROGRAMMER"],
      background: "#333333",
      svg: "https://image.picknewtab.com/bookmark-icon/1652106980a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [9, 1],
  },
  {
    id: "ZCM3T2KbGUjQJE7hv5Brs",
    type: "bookmark",
    data: {
      id: "6498643971b30b5e3efa396e",
      title: "小红书",
      url: "https://www.xiaohongshu.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/bookmark/648fb79675652244eaa103a1/963826899..png",
      keywords: "",
      description: "2 亿人的生活经验，都在小红书",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["COMMUNITY"],
      background: "#F40603",
    },
    gridSize: [1, 2],
    gridPosition: [4, 2],
  },
  {
    id: "W7Ahwk5hkhSjm6jZuZD4C",
    type: "chatGpt",
    gridSize: [2, 2],
    data: {
      title: "chatGpt",
      styles: {},
    },
    gridPosition: [6, 2],
  },
  {
    id: "TK4rXX0rVcV_kHYC3xLpz",
    type: "bookmark",
    data: {
      id: "6497f1adb5ddc241a7df585e",
      title: "腾讯视频",
      url: "https://v.qq.com/",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1614209366.png",
      keywords:
        "腾讯视频,高清视频,电影,电视剧,综艺,动漫,音乐,高清,视频,在线观看,全网热播",
      description:
        "腾讯视频致力于打造中国领先的在线视频媒体平台，以丰富的内容、极致的观看体验、便捷的登录方式、24小时多平台无缝应用体验以及快捷分享的产品特性，主要满足用户在线观看视频的需求。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["VIDEO"],
      background: "#FFFFFF",
      svg: "https://image.picknewtab.com/bookmark-icon/1614209366a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [8, 2],
  },
  {
    id: "IWroJ1TZJqC9hSsqaTj1a",
    type: "bookmark",
    data: {
      id: "64985984abf1bd2142087da2",
      title: "今日头条",
      url: "https://www.toutiao.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1848460427.png",
      keywords: "",
      description:
        "今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，促使信息创造价值。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["OTHER"],
      background: "#FFFFFF",
    },
    gridSize: [1, 1],
    gridPosition: [9, 2],
  },
  {
    id: "5h9aKn1e2Z_U3pf1OP_AK",
    type: "bookmark",
    data: {
      id: "64985613abf1bd2142087d97",
      title: "有道翻译",
      url: "https://fanyi.youdao.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1369265820.png",
      keywords: "在线即时翻译、免费AI翻译、文档文本翻译、人工翻译、网页翻译",
      description:
        "有道翻译提供即时免费的中文、英语、日语、韩语、法语、德语、俄语、西班牙语、葡萄牙语、越南语、印尼语、意大利语、荷兰语、泰语全文翻译、网页翻译、文档翻译、PDF翻译、DOC翻译、PPT翻译、人工翻译、同传等服务。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["TOOL"],
      background: "#D30A0B",
    },
    gridSize: [1, 1],
    gridPosition: [4, 3],
  },
  {
    id: "jAaDxrzuY-aUTOb1PVopY",
    type: "bookmark",
    data: {
      id: "6498104b798d3553735090c0",
      title: "知乎",
      url: "https://www.zhihu.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1810380193.png",
      keywords: "",
      description:
        "知乎，中文互联网高质量的问答社区和创作者聚集的原创内容平台，于 2011 年 1 月正式上线，以「让人们更好的分享知识、经验和见解，找到自己的解答」为品牌使命。知乎凭借认真、专业、友善的社区氛围、独特的产品机制以及结构化和易获得的优质内容，聚集了中文互联网科技、商业、影视、时尚、文化等领域最具创造力的人群，已成为综合性、全品类、在诸多领域具有关键影响力的知识分享社区和创作者聚集的原创内容平台，建立起了以社区驱动的内容变现商业模式。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["COMMUNITY", "LIFE"],
      background: "#267CE7",
      svg: "https://image.picknewtab.com/bookmark-icon/1810380193a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [5, 3],
  },
  {
    id: "Thd9V1s6vrHuiNa4NbsPH",
    type: "calendar",
    gridSize: [1, 1],
    data: {
      title: "calendar",
      styles: {},
    },
    gridPosition: [8, 3],
  },
  {
    id: "alMI_KdTGK06N_KysYbiq",
    type: "bookmark",
    data: {
      id: "649811cd798d3553735090c2",
      title: "新浪微博",
      url: "https://www.weibo.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1881385693.png",
      keywords: "新浪微博",
      description:
        "随时随地发现新鲜事!微博带你欣赏世界上每一个精彩瞬间,了解每一个幕后故事。分享你想表达的,让全世界都能听到你的心声!",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["COMMUNITY", "LIFE", "PLAY", "SOCIAL"],
      background: "#FCD85B",
      svg: "https://image.picknewtab.com/bookmark-icon/1881385693a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [9, 3],
  },
  {
    id: "x7MLZQEXVWVGL95r1jsCL",
    type: "bookmark",
    data: {
      id: "6498134a798d3553735090c6",
      title: "虎牙",
      url: "https://www.huya.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1049948786.png",
      keywords:
        "lol直播,英雄联盟直播,dota2直播,dnf直播,cf直播,绝地求生直播，王者荣耀直播，球球大作战直播，游戏直播,赛事直播,YY直播,美女直播,户外直播,视频直播,虎牙直播",
      description:
        "虎牙直播是以游戏直播为主的弹幕式互动直播平台，累计注册用户2亿，提供热门游戏直播、电竞赛事直播与游戏赛事直播，手游直播等。包含英雄联盟lol，王者荣耀，绝地求生，和平精英等游戏直播，lol、dota2、dnf等热门游戏直播以及单机游戏、手游等游戏直播。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["LIVE"],
      background: "#FFFFFF",
      svg: "https://image.picknewtab.com/bookmark-icon/1049948786a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [1, 4],
  },
  {
    id: "4d5hI_SZGnZoio7gOytxg",
    type: "bookmark",
    data: {
      id: "649813d5798d3553735090c7",
      title: "今日热榜",
      url: "https://tophub.today",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1242774032.png",
      keywords: "今日热榜,Tophub,热门新闻,今日头条,热搜,热词,新闻聚合,摸鱼",
      description:
        "今日热榜提供各站热榜聚合：微信、今日头条、百度、知乎、V2EX、微博、贴吧、豆瓣、天涯、虎扑、Github、抖音...追踪全网热点、简单高效阅读。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["TOOL", "OTHER"],
      background: "linear-gradient(#D65287, #D7652E)",
      svg: "https://image.picknewtab.com/bookmark-icon/1242774032a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [2, 4],
  },
  {
    id: "55kJd820RlZB_VXzim9F1",
    type: "bookmark",
    data: {
      id: "64984a579b4e3a5335b89dde",
      title: "BOSS直聘",
      url: "https://www.zhipin.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1075754394.png",
      keywords: "重庆招聘,重庆招聘信息,重庆招聘网",
      description:
        "BOSS直聘重庆招聘网站，为求职者提供海量2023年重庆人才招聘信息。BOSS直聘重庆招聘网让求职者与Boss直接开聊、加快面试、即时反馈，找工作就来BOSS直聘和Boss开聊吧！",
      author: {
        id: "648fb71175652244eaa103a0",
        nickname: "null",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: false,
        isVip: false,
      },
      categories: ["RECRUIT"],
      background: "#4FC2BB",
      svg: "https://image.picknewtab.com/bookmark-icon/1075754394a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [3, 4],
  },
  {
    id: "LLEtvdZurwEqP7pmFROwa",
    type: "bookmark",
    data: {
      id: "64984fa9abf1bd2142087d85",
      title: "坚果云",
      url: "https://www.jianguoyun.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1190468067.png",
      keywords: "坚果云,网盘,云盘,云服务,团队协作软件,共享文件夹,坚果云官网",
      description:
        "坚果云是一款提供网盘|云盘|云服务的团队协助软件,可随时随地实现共享文件夹。坚果云网盘支持移动办公,协同办公,文件同步,数据备份,智能管理,在线编辑等功能。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["OFFICE", "DOWNLOAD"],
      background: "#FFFFFF",
      svg: "https://image.picknewtab.com/bookmark-icon/1190468067a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [4, 4],
  },
  {
    id: "rA87zUyC35vZPmh8u7mO5",
    type: "bookmark",
    data: {
      id: "64984fd4abf1bd2142087d86",
      title: "百度贴吧",
      url: "https://tieba.baidu.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1111401683.png",
      keywords: "贴吧,百度贴吧,论坛,兴趣,社区,BBS",
      description:
        "百度贴吧——全球领先的中文社区。贴吧的使命是让志同道合的人相聚。不论是大众话题还是小众话题，都能精准地聚集大批同好网友，展示自我风采，结交知音，搭建别具特色的“兴趣主题“互动平台。贴吧目录涵盖游戏、地区、文学、动漫、娱乐明星、生活、体育、电脑数码等方方面面，是全球领先的中文交流平台，它为人们提供一个表达和交流思想的自由网络空间，并以此汇集志同道合的网友。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["COMMUNITY"],
      background: "#267BFE",
      svg: "https://image.picknewtab.com/bookmark-icon/1111401683a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [5, 4],
  },
  {
    id: "vQ-qfC6ULQPQO-Xvk54ys",
    type: "bookmark",
    data: {
      id: "64985031abf1bd2142087d87",
      title: "包图网",
      url: "https://www.ibaotu.com",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1095961752.png",
      keywords: "包图网，设计素材，设计模板，设计图片，图片素材，图库，素材库",
      description:
        "包图网汇集了各种视觉冲击力强的原创广告图片设计、电商淘宝、企业办公模板、视频、配乐、音效、字体、插画动图、装饰装修等素材，由顶尖的设计师供稿，符合各个行业的商用需求，下载高品质正版素材就到包图网。",
      author: {
        id: "648fb79675652244eaa103a1",
        nickname: "admin",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: true,
        isVip: false,
      },
      categories: ["IMAGE", "DESIGNER"],
      background: "#FEF5C8",
      svg: "https://image.picknewtab.com/bookmark-icon/1095961752a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [6, 4],
  },
  {
    id: "zkdplrpElPGXK57u9Ba2H",
    type: "bookmark",
    data: {
      id: "64b6508a289ca51a787f2288",
      title: "测速网",
      url: "https://www.speedtest.cn/",
      icon: "https://movetab.jianyueku.com/pick-source/img/icon/navigation/1300454754.png",
      keywords:
        "测速,测网速,网速,网络质量,5G网速,5G测速,5G网络,在线测速,网速测试,宽带测速,视频测试,Wi-Fi测速,联通,电信,移动,长城宽带,广电,鹏博士,网速诊断,网络诊断,蹭网检测,路由测试,上网速度,网页打开速度,游戏测速,直播测速,提高网速,宽带提速,网络加速,速度测试,带宽检测,宽带测试,千兆宽带,全屋Wi-Fi,双千兆,三千兆,光纤,ping,speedtest,speed,test,adsl,ftth,iot,internet,tracert,traceroute,IPv6,Wi-Fi 6,6G,网维助手",
      description:
        "测速网（SpeedTest.cn）提供网速测试，网络质量测试，宽带测速，Wi-Fi测速，5G测速，IPv6测速，带宽检测，路由器测速，网关测速，宽带提速，宽带升级，网络加速，内网测速，专网测速，视频测试，游戏测速，直播测速，网络诊断，蹭网检测，物联网监测，网站监测，API监测，Ping测试，路由测试等专业服务，拥有国内外大量高性能测试点，覆盖电信，移动，联通，网通，广电，长城宽带，鹏博士等运营商。",
      author: {
        id: "648fb71175652244eaa103a0",
        nickname: "null",
        avatar: "/images/users/avatar.jpg",
        gender: "未知",
        isAdmin: false,
        isVip: false,
      },
      categories: ["TOOL"],
      background: "#1D2133",
      svg: "https://image.picknewtab.com/bookmark-icon/1300454754a.svg",
    },
    gridSize: [1, 1],
    gridPosition: [7, 4],
  },
]);

const onMoveCallback = (val) => {
  console.log('拖动前的索引 :' + val.moved.newIndex);
  console.log('拖动后的索引 :' + val.moved.oldIndex);
};
const getdata = (val) => {
  console.log(val.draggedContext.element.id);

  console.log(apps);
};
</script>

<style lang="less">
:root {
  --max-page-width: 1360px;
  --grid-size: 5.5rem;
  --border-radius: 8px;
  --icon-fit: contain;
}
body {
  min-height: 100vh;
  background-image: url(https://imgse.com/content/images/system/home_cover_1601010270144_8921bc.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: var(--nav-color);
}
.apps {
  padding: 20px 0 0;
  max-width: var(--max-page-width);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--grid-size));
  grid-template-rows: repeat(auto-fill, var(--grid-size));
  grid-auto-flow: dense;
  grid-auto-rows: var(--grid-size);
  justify-content: center;
  .app {
    position: relative;
    padding: 0 calc(var(--grid-size) / 6) calc(var(--grid-size) / 3);
    .dataset {
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      overflow: hidden;
      cursor: pointer;
      display: flex;
      transition: box-shadow 0.2s ease 0s;
      font-size: calc(var(--grid-size) / 6);
      &:hover {
        transform: scale(1.01);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px, rgba(255, 255, 255, 0.4) 0px 0px 3px;
      }
      .bookmark {
        display: flex;
        background-color: rgba(255, 255, 255, 0.9);
        img {
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          margin: auto;
          overflow-clip-margin: content-box;
          overflow: clip;
          object-fit: var(--icon-fit, cover);
        }
        .description {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3px 6px;
          p {
            text-align: left;
            color: rgb(51, 51, 51);
            font-size: 0.85em;
            font-weight: 500;
            line-height: 1.3;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          span {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 0.6em;
            margin-top: 0.3em;
            color: rgb(102, 102, 102);
            line-height: 1.3;
            word-break: break-all;
          }
        }
      }
      .comp {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: aqua;
      }
    }
    p {
      position: relative;
      left: 0px;
      display: inline-block;
      width: 100%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      pointer-events: none;
      font-size: 0.6rem;
    }
    &.column1-row1 {
      grid-column-start: span 1;
      grid-row-start: span 1;
    }
    &.column2-row1 {
      grid-column-start: span 2;
      grid-row-start: span 1;
    }
    &.column2-row2 {
      grid-column-start: span 2;
      grid-row-start: span 2;
    }
    &.column3-row2 {
      grid-column-start: span 3;
      grid-row-start: span 2;
    }
    &.column4-row2 {
      grid-column-start: span 4;
      grid-row-start: span 2;
    }
  }
}
</style>
