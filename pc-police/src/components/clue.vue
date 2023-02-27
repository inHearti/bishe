<template>
  <div class="clue-page">
    <div class="container">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="50">ID</th>
              <th width="400">线索描述</th>
              <th width="220">时间</th>
              <th width="180">地点</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <tr v-for="i in 1" :key="i">
              <td>1</td>
              <td>
                <div class="goods">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/13ab302f8f2c954d873f03be36f8fb03.png"
                    alt=""
                  />
                  <div>
                    <p class="name ellipsis">
                      和手足干裂说拜拜 ingrams手足皲裂修复霜
                    </p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>2023-2-20 10:11</p>
              </td>
              <td class="tc">天津市武清区</td>
              <td class="tc">
                <p><a class="green" href="javascript:;">反馈</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'clue',
}
</script>
<style scoped lang="scss">
.tc {
  text-align: center;
}
.red {
  color: red;
}
.green {
  color: green;
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}

.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.clue-page {
  .cart {
    background: #fff;
    color: #666;
    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }
      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }
}
</style>
