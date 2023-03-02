<template>
      <!-- nav  -->
      <nav>
        <a href="#">举报</a>
        <a href="#">线索跟踪</a>
        <a href="#">案件总览</a>
        <a href="#">失物招领</a>
    </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
}
nav a {
  width: 50%;
  font-size: 0.3333rem;
  text-decoration: none;
  text-align: center;
  color: #707070;
  font-family: ArialMT;
}
nav a::before {
  content: "";
  display: block;
  width: 1.8533rem;
  height: 1.8533rem;
  margin-left: 50%;
  transform: translateX(-50%);
  background: url(../assets/icon1.png) no-repeat;
  background-size: 1.8533rem 1.8533rem;
}
nav a:nth-child(2)::before {
  background: url(../assets/icon2.png) no-repeat;
  background-size: 1.8533rem 1.8533rem;
}
nav a:nth-child(3)::before {
  background: url(../assets/icon3.png) no-repeat;
  background-size: 1.8533rem 1.8533rem;
}
nav a:nth-child(4)::before {
  background: url(../assets/icon4.png) no-repeat;
  background-size: 1.8533rem 1.8533rem;
}

nav a:nth-child(-n+2) {
  margin-top: 0.6rem;
  margin-bottom: 0.92rem;
}
</style>