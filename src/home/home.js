// import Animal from '../../assets/js/dongwu'
// import Dark from '../../assets/js/xiaoyazi'
// import Animate from '../../assets/js/animate'
// import Translate from '../../assets/js/xiaoyazi'
// import Translate from '../../assets/js/translate'

// new Animal(new Dark({
//     targets: [{
//         el: document.querySelector('#ceshi1'),
//         animationClassName: 'change'
//     }, {
//         el: document.querySelector('#ceshi2'),
//         animationClassName: 'change'
//     }, {
//         el: document.querySelector('#ceshi3'),
//         animationClassName: 'change'
//     }],
//     count: 5,
//     reversal: 3
// }));


// 作业：Translate()   Opicity();
// new Animate({
//     el: document.querySelector('#div1'),
//     model: new Translate()
// })

// 作业二： 
// let animate = new Animate({
//     el: document.querySelector('#div1'),
//     type: 'translate',
// })
// animate.load();

// 作业三： 
// Animate.create({ type: 'opicity', }).mount(document.querySelector('#div1'));

// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animate.create().use(Translate.install).mount(document.querySelector('div'))

// let mdiv = document.querySelector('.section-left');
// let item = mdiv.querySelector('.item');
// let template = mdiv.querySelector('.template');
// articles.forEach(ele => {
//     let cloneDiv = template.content.cloneNode(true);
//     console.log(typeof ele.article);
//     console.log(zhuan(ele.article));
//     cloneDiv.content = ele.article;
//     console.log(cloneDiv.content.innerHTML = ele.article);
//     mdiv.appendChild(cloneDiv);
// })

// let elements = document.querySelectorAll('.centent');
// elements.forEach(ele => {
//     let length = ele.innerHTML.toString().length;
//     let num = 400;
//     if (length > num) {
//         ele.setAttribute('class', 'centent diandiandian');
//         ele.nextElementSibling.style.display = 'black';
//     } else {
//         ele.nextElementSibling.style.display = 'none';
//         ele.innerHTML = ele.innerHTML
//     }
// })

// var show2 = document.querySelectorAll('.show');
// show2.forEach(ele => {
//     ele.addEventListener('click', function() {
//         this.previousElementSibling.setAttribute('class', 'centent');
//         this.style.display = 'none';
//         this.nextElementSibling.style.display = 'block';
//     })
// })

// var hide2 = document.querySelectorAll('.hide');
// hide2.forEach(ele => {
//     ele.addEventListener('click', function() {
//         this.style.display = 'none';
//         this.previousElementSibling.style.display = 'block';
//         this.previousElementSibling.previousElementSibling.setAttribute('class', 'centent diandiandian');
//     })
// })

import articles from '../article_route.js'

let odiv = document.querySelector('.section-left');
let idiv = odiv.querySelector('.template');
let fragment = document.createDocumentFragment();

articles.forEach(ele => {
    let ndiv = idiv.content.cloneNode(true);
    ndiv.querySelector('.text').innerHTML = ele.article;
    fragment.appendChild(ndiv);
})
odiv.appendChild(fragment);


import { Ellipsis } from "../../assets/js/toggle";

let article = document.querySelectorAll('article');
article.forEach(el => {
    console.log(el);
    let ellipsis = new Ellipsis({
        el: el,
        textCount: 120,
        findAllButtonText: "查有看所",
        showFindAllButton: true
    })
    ellipsis.exec();
})


























let show = document.querySelectorAll('.show');
let hide = document.querySelectorAll('.hide');