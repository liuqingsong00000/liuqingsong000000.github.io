// export default class Dark {
//     constructor(obj) {
//         this.arr = obj.targets;
//         this.newArr = this.arr.slice();
//         this.animation(this.newArr);
//     }

//     animation(arr) {
//         var ele = arr.shift();
//         ele.el.classList.add(ele.animationClassName);
//         var _this = this;
//         if (!arr.length) return;
//         var donghua = function() {
//             setTimeout(() => {
//                 _this.animation(arr);
//             })
//         }
//         ele.el.addEventListener('animationstart', donghua)
//     }
// }

// export default class Translate {
//     constructor() {

//     }

//     animation(el) {
//         el.classList.add('donghua');
//         var donghua = function() {
//             // el.classList.remove('donghua')
//             el.removeEventListener('animationstart', donghua);
//         }
//         el.addEventListener('animationstart', donghua)
//     }

//     load() {
//         if (this.type == "translate") {
//             this.model = new Translate();
//             this.model = this.animation();
//         }
//     }
// }

// export default class Translate {
//     constructor() {

//     }

//     exec(el) {
//         el.classList.add('donghua');
//         var donghua = function() {
//             el.removeEventListener('animationstart', donghua);
//         }
//         el.addEventListener('animationstart', donghua)
//     }
// }

// export default class Opicity {
//     constructor() {

//     }

//     exec(el) {
//         el.classList.add('donghua1');
//         var donghua = function() {
//             el.removeEventListener('animationstart', donghua);
//         }
//         el.addEventListener('animationstart', donghua)
//     }
// }