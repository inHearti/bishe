<template>
  <van-nav-bar title="平安武清" fixed="true" placeholder="true">
    <template #right>
      <span v-show="islogin" @click="gologin">去登录</span>

      <van-image
        round
        width="0.8rem"
        height="0.8rem"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        v-show="!islogin"
      />
      <van-popover
        v-model:show="showPopover"
        :actions="actions"
        @select="onSelect"
        v-show="!islogin"
      >
        <template #reference>
          <span v-show="!islogin">{{ username }}</span>
        </template>
      </van-popover>
    </template>
  </van-nav-bar>
  <van-notice-bar mode="closeable">{{remind.message}}</van-notice-bar>
  <div class="content2">
    <!-- nav  -->
    <nav>
      <div href="#" @click="goreport">举报</div>
      <div href="#" @click="gocluelist">线索跟踪</div>
      <div href="#" @click="gocaselist">案件总览</div>
      <div href="#" @click="golostitem">失物招领</div>
    </nav>

    <!-- 跳转链接 -->
    <div class="interlinkage">
      <a href="https://www.tjwq.gov.cn/"
        ><img src="../assets/img1.png" alt=""
      /></a>
    </div>

    <!-- 失物招领 -->
    <section class="lostitem">
      <!-- 失物招领头部 -->
      <div class="lostitem_hd">
        <h4>
          <img src="../assets/i2.png" alt="" />
          失物招领
        </h4>
        <div @click="golostitem">更多>></div>
      </div>
      <div class="lostitem_bd">
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="10"
          :centeredSlides="true"
          :loop="true"
          navigation
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(o, index) in lostitem" :key="o"
            ><img :src="o.image" alt=""
          /></swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 咨询 -->
    <section class="info">
      <!-- 咨询头部 -->
      <div class="info_hd">
        <h4>
          <img src="../assets/i2.png" alt="" />
          资讯
        </h4>
      </div>
      <div class="info_bd">
        <swiper
          :modules="modules"
          :slides-per-view="2.5"
          :space-between="10"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(o, index) in info" :key="o">
            <a :href="o.info_link">
              <img :src="o.info_image" alt="" />
              <h5>{{ o.info_title }}</h5>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { getlost } from '@/api/lost'
import { getinfo } from '@/api/information'
import { getremind } from '@/api/remind'
import { showToast } from 'vant';
const router = useRouter()

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const islogin = ref(window.localStorage.getItem('user') == null ? true : false)
    const showPopover = ref(false);
    const username = ref(JSON.parse(localStorage.getItem('user')).name)
    // 通过 actions 属性来定义菜单选项
    const actions = [
      { text: '个人信息' },
      { text: '退出登录' },
    ];
    const onSelect = (action) => {
      if (action.text == '退出登录') {
        localStorage.removeItem('user')
        islogin.value = true
      }
    }

    const remind = ref([])
    getremind()
      .then((res) => {
        const arr = []
        res.data.result.forEach((item) => {
          arr.push(item)
        })
        remind.value = arr[0]
      })
      .catch((e) => { })

    //获取失物招领物品信息
    const lostitem = ref([])
    getlost().then((res) => {
      lostitem.value = res.data.result.slice(0, 5)
    })
    //获取资讯信息
    const info = ref([])
    getinfo().then((res) => {
      info.value = res.data.result
    })




    const router = useRouter()
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    const goreport = () => {
      router.push('/report')
    }
    const golostitem = () => {
      router.push('/lostitem')
    }
    const gocaselist = () => {
      router.push('/caselist')
    }
    const gocluelist = () => {
      router.push('/cluelist')
    }
    const gologin = () => {
      router.push('/login')
    }


    return {
      remind,
      username,
      islogin,
      showPopover,
      actions,
      onSelect,
      info,
      lostitem,
      onSwiper,
      onSlideChange,
      goreport,
      golostitem,
      gocaselist,
      gocluelist,
      gologin,
      modules: [Navigation, A11y],
    };
  },
};
</script>


<style lang="scss" scoped>
::v-deep .van-nav-bar__title {
  margin: 0 50px;
  font-size: 20px;
}
::v-deep .van-nav-bar__right {
  padding-right: 35px;
  span {
    padding-left: 5px;
  }
}
.content2 {
  background-color: #eaeaea;
  nav {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    div {
      width: 50%;
      font-size: 0.3333rem;
      text-decoration: none;
      text-align: center;
      color: #707070;
      font-family: ArialMT;
      &:hover {
        cursor: pointer;
      }
      &::before {
        content: "";
        display: block;
        width: 2.5533rem;
        height: 2.5533rem;
        margin-left: 50%;
        transform: translateX(-50%);
        background: url(../assets/icon1.png) no-repeat;
        background-size: 2.5533rem 2.5533rem;
      }
      &:nth-child(2)::before {
        background: url(../assets/icon2.png) no-repeat;
        background-size: 2.5533rem 2.5533rem;
      }
      &:nth-child(3)::before {
        background: url(../assets/icon3.png) no-repeat;
        background-size: 2.5533rem 2.5533rem;
      }
      &:nth-child(4)::before {
        background: url(../assets/icon4.png) no-repeat;
        background-size: 2.5533rem 2.5533rem;
      }
      &:nth-child(-n + 2) {
        margin-top: 0.6rem;
        margin-bottom: 0.92rem;
      }
    }
  }

  .interlinkage {
    text-align: center;
    background-color: white;
    padding: 0.8rem 0 0.5733rem;
    margin-bottom: 0.1333rem;

    img {
      margin: 0 auto;
      width: 9.6267rem;
      height: 2.0267rem;
      border-radius: 2.0267rem;
    }
  }

  // 失物招领
  .lostitem {
    margin-bottom: 0.1333rem;
  }

  .lostitem_hd,
  .info_hd {
    display: flex;
    justify-content: space-between;
    background-color: white;
    h4 {
      margin: 0;
      margin-top: 0.6rem;
      margin-left: 0.2933rem;
      font-size: 0.3733rem;
      color: #333;
      font-family: MicrosoftYaHei-Bold;
      img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 0.24rem;
        margin-bottom: 0.0933rem;
        width: 0.5067rem;
        height: 0.5067rem;
      }
    }
    div {
      margin-top: 0.6267rem;
      margin-right: 0.32rem;
      font-size: 0.2933rem;
      color: #999;
      font-family: MicrosoftYaHei;
    }
  }
  .lostitem_bd,
  .info_bd {
    background-color: white;
    padding: 0.4667rem 0 0.5067rem;
  }

  .info {
    .swiper {
      padding: 0.4667rem 0 0.5067rem 0.3067rem;
    }
    .swiper-slide {
      position: relative;
      overflow: hidden;
      padding-top: 1px;
      opacity: 1;
      transform: scale(1);
      border-radius: 0.1333rem;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      a {
        top: 0;
        position: absolute;
        img {
          width: 37vw;
          height: 32vw;
        }
        h5 {
          padding: 0 0.076rem;
          font-weight: 400;
          font-size: 0.3rem;
          font-family: MicrosoftYaHei;
          color: #333;
        }
      }
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      opacity: 1;
      transform: scale(1);
    }
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 18vh;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
    opacity: 0.4;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    opacity: 1;
    transform: scale(1.1);
  }

  ::v-deep .swiper-button-next,
  ::v-deep .swiper-button-prev {
    &:after {
      font-size: 0.5333rem;
      color: #333 !important;
    }
  }
}
</style>