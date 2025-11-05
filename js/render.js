// 商品栏

let str = ''
let cats = document.querySelector('.cats ul')
datas.forEach((d, index) => {
  str += `
  <li>
     <div class="imgbox" style="background-image: url(${d.img}); "></div>
     <p class="name">${d.name}</p>
     <p class="pricebox">￥<span class="price">${d.price}</span></p>
     <button class="addCat" data-index="${index}">加入我的篮子</button>
   </li>
  `
})

cats.innerHTML = str

function renderItem () {
  let cats = document.querySelector('.cats ul')
  datas.forEach((d, index) => {
    let newLi = document.createElement("li")
    newLi.innerHTML =
      `
     <div class="imgbox" style="background-image: url(${d.img}); "></div>
     <p class="name">${d.name}</p>
     <p class="pricebox">￥<span class="price">${d.price}</span></p>
     <button class="addCat" data-index="${index}">加入我的篮子</button>
    `
    cats.append(newLi)
  })
}
// 滚动效果
let toTop = window.pageYOffset
let right = document.querySelector('.right')
window.onscroll = function () {
  toTop = window.pageYOffset// 实时页面滚动距离
  if (toTop > 150) {
    right.classList.add('fixed')
    document.querySelector('.back').style.opacity = 1
  } else {
    right.classList.remove('fixed')
    document.querySelector('.back').style.opacity = 0
  }
  // 触底自动加载数据
  let winHeight = window.innerHeight// 窗口高度
  let pageHeight = document.documentElement.offsetHeight // 页面内容总高
  if (winHeight + toTop > pageHeight - 50) {
    renderItem()
  }
}
document.querySelector('.back').onclick = function () {
  window.scrollTo({
    top: 150,
    behavior: "smooth"
  })
}

// 购物篮
function renderCat () {
  let str2 = ''
  let cats2 = document.querySelector('.myCats ul')
  datas2.forEach((d, index) => {
    str2 += `
  <li>
    <div class="imgbox" style="background-image: url(${d.img});"></div>
    <div class="detail">
      <p class="name">${d.name}</p>
      <p class="pricebox">￥<span class="price">${d.price}</span></p>
      <p class="cost">${d.cost ? d.cost : 0}</p>
    </div>
    <div class="count">
      <button class="reduce" data-index="${index}">-</button>
      <input type="text" value="${d.num}">
      <button class="add" data-index="${index}">+</button>
      <span class="del" data-index="${index}">删除</span>
    </div>
  </li>
  `
  })
  cats2.innerHTML = str2

}
renderCat()


