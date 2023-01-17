<template>
  <div class="container">
          <!-- 네비게이션 바 -->
          <div class="navBar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" class="navBar__img1">
            <p><a href="https://makers.kakao.com/"><img src="https://makers.kakao.com/_nuxt/img/1c983c5.svg" style="width:120px;height:30px;"></a></p>
            <p><a href="https://makers.kakao.com/search"><img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" style="width:40px;height:35px;"></a></p>
          </div>
      
      
          <!-- 탭 메뉴 -->
          <div class="tab">
            <button v-for="tab1 in tab1s" class = "tab-in" @click="ontabclick(tab1.url)">
              {{tab1.txt}}
            </button >
            <button class = "tab-in" onclick="location.href='https://makers.kakao.com/seen'">최근 본</button >
            <button class = "tab-in" onclick="location.href='index.html'">홈</button >
            <button class = "tab-in" onclick="location.href='https://makers.kakao.com/preorder'">오픈예정</button >
            <button class = "tab-in" onclick="location.href='https://makers.kakao.com/my/order'">마이</button >
          </div>
      
          <div class="tab2">
            <div class="box">
              <button class = "box-in" onclick="location.href='index.html'">전체</button>
              <button class = "box-in" onclick="location.href='https://makers.kakao.com/home/new'">신규</button>
              <button class = "box-in" onclick="location.href='https://makers.kakao.com/promotion/301'">1+1 뷰티 어워즈</button>
              <button class = "box-in" onclick="location.href='https://makers.kakao.com/home/category?category=3&displayPosition=DP02&filter=3&sort=RECOMMEND'">푸드</button>
              <button class = "box-in" onclick="location.href='https://makers.kakao.com/home/category?category=4&displayPosition=DP04&filter=4&sort=RECOMMEND'">생활</button>
              <button class = "box-in" onclick="location.href='https://makers.kakao.com/home/category?category=5&displayPosition=DP06&filter=5&sort=RECOMMEND'">가전</button>
              <button class = "box-in" onclick="location.href='https://makers.kakao.com/home/category?category=6&displayPosition=DP05&filter=6&sort=RECOMMEND'">패션</button>
            </div>
          </div>
          
        <div>
          <img src="https://t1.daumcdn.net/makers_smith/file/items/100046790/rounds/f908de41042341e79640c99b79c227e1.jpg?type=thumb&opt=C640x360.i"
          alt="">
          <button class="productBox_badge">NEW</button>
          <!-- <label for="goal">Goal</label> -->
          <h2>{{des1}}</h2>
          <p>{{product_des1}}</p>
          <p class="order"><b>522명이 주문했어요</b></p>
          <!-- <input type="text" id="goal" v-model="enteredValue" /> -->
        <button @click="addGoal">473</button>
        </div>
        <!-- <ul>
          <li v-for="goal in goals">{{ goal }}</li>
        </ul> -->
        
        <div>
          <img src="https://t1.daumcdn.net/makers_smith/file/items/100011940/masters/ed0390b3e55645a2a28b8b2c173fc1e1.jpg?type=thumb&opt=C640x360.i"
          alt="">
          <button class="productBox_badge">NEW</button>
          <h2>{{des2}}</h2>
          <p>{{product_des2}}</p>
          <p class="order"><b>149명이 주문했어요</b></p>
        <button @click="addGoal">396</button>
        </div>
        <div>
          <img src="https://t1.daumcdn.net/makers_smith/file/items/100011890/masters/d056124f551a4d7db20f226c4483734b.jpg?type=thumb&opt=C640x360.i"
          alt="">
          <button class="productBox_badge">NEW</button>
          <h2>{{des3}}</h2>
          <p>{{product_des3}}</p>
          <p class="order"><b>2,459명이 주문했어요</b></p>
        <button @click="addGoal">1,160</button>
        </div>

        <div>
          <img src="https://t1.daumcdn.net/makers_smith/file/items/100046877/rounds/f82fc6df32d14c93b454a3441d12530a.jpg?type=thumb&opt=C640x360.i"
          alt="">
          <button class="productBox_badge">NEW</button>
          <h2>{{des4}}</h2>
          <p>{{product_des4}}</p>
          <p class="order"><b>434명이 주문했어요</b></p>
        <button @click="addGoal">372</button>
        </div>
    </div>  
</template>

<script>
export default {
  data() {
    return {
      tab1s: [{txt:'임팩트', url:"https://makers.kakao.com/seen"}, {txt:'최근 본', url: 'index.html'}],
      des1: '라이언이 들고 온 2023년 행운', 
      des2:'파리 저택에서 온 신년 초대장',
      des3:'아몬드와 귀리의 놀라운 조화',
      des4:'내년에도 좋은 생각',
      product_des1:'어김없이 찾아온 계묘년 한정판 라이언 피규어. 달 위에서 라이언과 토끼가 황금의 행운별을 낚았습니다. 행복이 가득한 한 해를 응원하는 마음을 담았죠. 소중한 분께 혹은 수고한 나에게 선물하세요.',
      product_des2: '레스케이프 호텔의 독특한 객실은 프랑스로 여행을 떠난 기분이죠. 평일 객실 무료 업그레이드 혜택과 입맛을 돋우는 세이보리 라운지 패키지도 준비했습니다.',
      product_des3: '아몬드브리즈와 어메이징오트의 협업해 만든 식물성 음료. 품질 좋은 캘리포니아산 프리미엄 아몬드와 핀란드산 귀리로 만들었죠. 진하고 고소한 맛에 1개당 60kcal로 가볍게 마시기 좋습니다.',
      product_des4:'우리 이웃의 밝은 이야기를 전하는 잡지, 『좋은생각』 1년 구독권이 다시 돌아왔습니다. 선택 가능한 글씨 크기와 매일 1장씩 편하게 읽을 수 있도록 페이지마다 날짜를 기재했죠. 사랑하는 사람에게 매월 안부를 전하세요. 주간 명언 캘린더 구독 선물까지.',
      goals: [],
      enteredValue: '',
      // vueLink: 'https://makers.kakao.com/items/100046790', 
    };
  },
  methods: {
   ontabclick(url1){
     window.location.href = url1
   }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 새롭게 추가  */
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}


.productBox_badge{
  width: 90px;
  margin: 0 auto;
  height: 30px;
  background-color:rgba(18, 1, 1, 0.907);
  color: white;
}


#app {
  margin: 1rem auto;
  max-width: 42rem;
  padding: 1rem;
  box-shadow: 0 2px 8px white;
}

.order {
  color: red;
}

label, input {
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
}

label {
  font-weight: bold;
}

ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
}

/* 탭 부분  */
.navBar {
  height: 60px;
  background-color: white;
  margin: 0;
  display: flex;
  justify-content: space-between;
}

.tab {
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  background-color: white;
  height: 70px;
  margin: auto;
}

.tab2{
  height: 30px;
}

.box {
  display: flex;
  justify-content: space-evenly;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 5px 0.5em;
  height: 20px;
  background-color: white;
}

.box-in{
  background-color: white;
  border-style: groove;
  border-color: rgb(250, 242, 242);
}

.tab-in{
  background-color: white;
  border-style: none;
}



</style>
