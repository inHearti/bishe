<template>
  <div class="page">
    <div class="gva-card-box">
      <div class="gva-card gva-top-card">
        <div class="gva-top-card-left">
          <div class="gva-top-card-left-title">
            早安，管理员，请开始一天的工作吧
          </div>
          <div class="gva-top-card-left-dot">
            天津市 天气：霾 温度：9摄氏度 风向：东南 风力：≤3级 空气湿度：52
          </div>
        </div>
        <img src="@/assets/dashboard.png" class="gva-top-card-right" alt />
      </div>
    </div>

    <div class="gva-card-box">
      <el-card class="gva-card quientranceck-">
        <template #header>
          <div class="card-header">
            <span>快捷入口</span>
          </div>
        </template>
        <el-row :gutter="20">
          <el-col
            v-for="(card, key) in toolCards"
            :key="key"
            :span="4"
            :xs="8"
            class="quick-entrance-items"
            @click="go(card.link)"
          >
            <div class="quick-entrance-item">
              <div class="quick-entrance-item-icon" :style="{ backgroundColor: card.bg }">
                <el-icon><Setting :color="card.color" /></el-icon>
              </div>
              <p>{{ card.label }}</p>
            </div>
          </el-col>
        </el-row>

      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>
<script setup>
import { ref } from 'vue';
import {  Setting} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const go =(path)=>{
  router.push(path)
}

const toolCards= ref([
{
          label: '咨询管理',
          icon: 'Avatar',
          name: 'about',
          color: '#5cdbd3',
          bg: 'rgba(92, 219, 211,.3)',
          link:'/information'
        },
        {
          label: '反馈线索',
          icon: 'monitor',
          name: 'user',
          color: '#ff9c6e',
          bg: 'rgba(255, 156, 110,.3)',
          link:'/cluefalse'
        },
        {
          label: '警情通报',
          icon: 'setting',
          name: 'authority',
          color: '#69c0ff',
          bg: 'rgba(105, 192, 255,.3)',
          link:'/policeCase'
        },
        {
          label: '案件总览',
          icon: 'menu',
          name: 'menu',
          color: '#b37feb',
          bg: 'rgba(179, 127, 235,.3)',
          link:'/caselist'
        }, {
          label: '失物招领',
          icon: 'cpu',
          name: 'autoCode',
          color: '#ffd666',
          bg: 'rgba(255, 214, 102,.3)',
          link:'/lostitem'
        },
        {
          label: '积分管理',
          icon: 'document-checked',
          name: 'formCreate',
          color: '#ff85c0',
          bg: 'rgba(255, 133, 192,.3)',
          link:'/integral'
        },
      

      ]
)

</script>

<style lang="scss" scoped>
@mixin flex-center {
  display: flex;
  align-items: center;
}
.page {
  background: #f0f2f5;
  padding: 0;
  .gva-card-box {
    margin-bottom: 20px;
    & + .gva-card-box {
      padding-top: 0px;
    }
  }
  .gva-card {
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 2px;
    height: auto;
    padding: 26px 30px;
    overflow: hidden;
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.03);
  }
  .gva-top-card {
    height: 260px;
    @include flex-center;
    justify-content: space-between;
    color: #777;
    &-left {
      height: 100%;
      display: flex;
      flex-direction: column;
      &-title {
        font-size: 22px;
        color: #343844;
      }
      &-dot {
        font-size: 14px;
        color: #6b7687;
        margin-top: 24px;
      }
      &-rows {
        // margin-top: 15px;
        margin-top: 18px;
        color: #6b7687;
        width: 600px;
        align-items: center;
      }
      &-item {
        + .gva-top-card-left-item {
          margin-top: 24px;
        }
        margin-top: 14px;
      }
    }
    &-right {
      height: 600px;
      width: 600px;
      margin-top: 28px;
    }
  }
  ::v-deep(.el-card__header) {
    padding: 0;
    border-bottom: none;
  }
  .card-header {
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
  }
  .quick-entrance-title {
    height: 30px;
    font-size: 22px;
    color: #333;
    width: 100%;
    border-bottom: 1px solid #eee;
  }
  .quick-entrance-items {
    @include flex-center;
    justify-content: center;
    text-align: center;
    color: #333;
    .quick-entrance-item {
      padding: 16px 28px;
      margin-top: -16px;
      margin-bottom: -16px;
      border-radius: 4px;
      transition: all 0.2s;
      &:hover {
        box-shadow: 0px 0px 7px 0px rgba(217, 217, 217, 0.55);
      }
      cursor: pointer;
      height: auto;
      text-align: center;
      // align-items: center;
      &-icon {
        width: 50px;
        height: 50px !important;
        border-radius: 8px;
        @include flex-center;
        justify-content: center;
        margin: 0 auto;
        i {
          font-size: 24px;
        }
      }
      p {
        margin-top: 10px;
      }
    }
  }
  .echart-box {
    padding: 14px;
  }
}
.dasboard-icon {
  font-size: 20px;
  color: rgb(85, 160, 248);
  width: 30px;
  height: 30px;
  margin-right: 10px;
  @include flex-center;
}
.flex-center {
  @include flex-center;
}

//小屏幕不显示右侧，将登陆框居中
@media (max-width: 750px) {
  .gva-card {
    padding: 20px 10px !important;
    .gva-top-card {
      height: auto;
      &-left {
        &-title {
          font-size: 20px !important;
        }
        &-rows {
          margin-top: 15px;
          align-items: center;
        }
      }
      &-right {
        display: none;
      }
    }
    .gva-middle-card {
      &-item {
        line-height: 20px;
      }
    }
    .dasboard-icon {
      font-size: 18px;
    }
  }
}
</style>
