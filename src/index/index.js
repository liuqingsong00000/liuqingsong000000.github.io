import Ani from "../../assets/js/Ani";

var obj = {
    targets: [{
        el: document.querySelector('#ceshi1'),
        animationClassName: 'change'
    }, {
        el: document.querySelector('#ceshi2'),
        animationClassName: 'change'
    }, {
        el: document.querySelector('#ceshi3'),
        animationClassName: 'change'
    }, {
        el: document.querySelector('#ceshi4'),
        animationClassName: 'change'
    }, {
        el: document.querySelector('#ceshi5'),
        animationClassName: 'change'
    }],
    count: 5,
    reversal: 3
};

var arr = obj.targets.slice();

var ani = new Ani(obj, arr);