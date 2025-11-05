/*
加入购物车
1.点击按钮添加
2.购物篮数据增加 渲染数据
*/
let addCat = document.querySelector(".cats")
addCat.addEventListener('click', function (add) {
  let i = add.target.dataset.index
  let clickName = datas[i].name
  let narr = []
  if (add.target.classList.contains('addCat')) {
    datas2.forEach(d2 => {
      d2.num = d2.name == clickName ? (d2.num >= 10 ? 10 : d2.num + 1) : d2.num
      if (d2.name == clickName && d2.num == 10) {
        alert('最多10只')
      }
      narr.push(d2.name)
    })
    if (!narr.includes(clickName)) { datas2.unshift(datas[i]) }
    renderCat()
    pricing()
  }
})

// 加减数量按钮 删除数据
// 动态数据用委托
let myCat = document.querySelector('.myCats')

myCat.addEventListener('click', function (cat) {
  let ind = cat.target.dataset.index
  if (cat.target.classList.contains('reduce')) {
    datas2[ind].num = datas2[ind].num <= 1 ? 1 : datas2[ind].num - 1
    renderCat()
    pricing()
  }

  if (cat.target.classList.contains('add')) {
    datas2[ind].num = datas2[ind].num == 10 ? 10 : datas2[ind].num + 1
    renderCat()
    pricing()
  }
  if (cat.target.classList.contains('del') && confirm('确定删除？')) {
    datas2.splice(ind, 1)
    renderCat()
    pricing()
  }
})


/*
计价
1.商品总价
2.计算运费
2.最后价格 渲染
*/
function pricing () {
  let allPrice = 0
  let costs = 0
  let finalPrice = 0
  datas2.forEach(d => {
    allPrice += d.price * d.num
    costs += d.cost ? d.cost * d.num : 0
  })
  finalPrice = allPrice + costs
  document.querySelector('.itemNum').innerHTML = datas2.length
  document.querySelector('.allPrice').innerHTML = allPrice
  document.querySelector('.costs').innerHTML = costs
  document.querySelector('.sum').innerHTML = finalPrice
}
pricing()

