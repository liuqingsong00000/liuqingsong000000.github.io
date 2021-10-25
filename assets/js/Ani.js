import '../css/Ani.css';

export default function Ani(obj, arr) {
    console.log(arr.length);
    setTimeout(function() {
        if (obj.reversal == obj.count) {
            var arr2 = obj.targets.slice().reverse();
            Ani(obj, arr2);
        }
    })
    if (!arr.length) {
        obj.count--;
        var arr1 = obj.targets.slice();
        if (obj.count) {
            Ani(obj, arr1);
        } else {
            return;
        }
    } else {
        var ele = arr.shift();
        if (ele) {
            ele.el.classList.add(ele.animationClassName);
            var donghua = function() {
                ele.el.classList.remove(ele.animationClassName);
                ele.el.removeEventListener('animationend', donghua);
                Ani(obj, arr);
            }
            ele.el.addEventListener('animationend', donghua);
        }
    }
}