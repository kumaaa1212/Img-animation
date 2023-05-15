let imagesTtem = [...document.querySelectorAll('.img-wrap')];
console.log(imagesTtem);
let tilte = [...document.querySelectorAll('h2')];
let tiltemessage = document.querySelector('.title');

const setitem = (entries,obs) => {
  entries.map((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('active');
    // else {
    //   entry.target.classList.remove('active');
    // };
    obs.unobserve(entry.target);
  });
};
const options = {
  rootMargin:'0px',
  threshold:0.5,
}

let observer = new IntersectionObserver(setitem, options)
// メインのタイトル
observer.observe(tiltemessage);

// 画像のところ
imagesTtem.map((item,index) =>{
  item.children[0].style.backgroundImage =`url(./images/${index + 1}.jpg)`;
  index % 2 === 0 ? (item.style.left = '55%') : (item.style.left = '5%');
  observer.observe(item);
});
// 画像の上のところ
tilte.map((titles,index) =>{
index % 2 === 0 ? (titles.style.left = '45%') : (titles.style.left = '35%');
observer.observe(titles)
})

// 参考演算位
