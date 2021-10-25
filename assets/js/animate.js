import '../css/Ani.css'
// import Translate from "./xiaoyazi"
import { Translate, Opicity } from "./translate";
// import opicity from "./opicity"
// import { Translate, Opicity } from "../js/xiaoyazi"
import Translate from "./translate"


// export default class Animal {
//     constructor(target) {
//         this.target = target;
//     }

//     animation() {
//         this.target.animation(this.target.animation(this.newArr));
//     }
// }

// export default class Animate {
//     constructor(obj) {
//         this.el = obj.el;
//         this.type = obj.type;
//         this.model = obj.model;
//         this.aa = { 'model': new Translate() };
//         this.aa['model'].animation(this.el);
//     }
//     load() {
//         let obj = {
//             'translate': new Translate(),
//             'opicity': new opicity()
//         }
//     }
// }

// export default class Animate {
//     constructor(obj) {
//         this.el = obj.el;
//         console.log(this.el);
//         this.type = obj.type;
//         console.log(this.type);
//     }
//     load() {
//         if (this.type == 'translate') {
//             this.model = new Translate();
//             this.model.exec(this.el);
//         } else if (this.type == 'opicity') {
//             this.model = new Opicity();
//             this.model.exec(this.el);
//         }
//     }
// }

// export default class Animate {
//     constructor(element) {
//         this.element = element;
//         this.type = element.type;
//     }
//     static create(element) {
//         return new Animate(element);
//     }
//     mount(ele) {
//         let obj = {
//             'translate': new Translate(ele),
//             'opicity': new Opicity(ele)
//         }

//         if (this.type == 'translate') {
//             obj[this.type].add();
//         } else if (this.type == 'opicity') {
//             obj[this.type].add();
//         }
//     }
// }

export default class Animate {
    constructor() {

    }
    static create() {
        return new Animate();
    }
    use(fn) {
        console.log(fn);
    }
    mount(ele) {
        console.log(ele);
    }
}