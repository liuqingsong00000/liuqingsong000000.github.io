// import { Ellipsis } from "../../assets/js/toggle";

// let ellipsis = new Ellipsis({
//     el: document.querySelector('.test'),
//     textCount: 80,
//     findAllButtonText: "查有看所",
//     showFindAllButton: true
// })

// ellipsis.exec();


// //作业一：
// var url = new Url('localhost:8080?type=2&id=1&name=xiaoming');
// url.get('type') // 2；
// url.get('id') // 1；
// url.get('name') // xiaoming;

//作业一：
// class Url {
//     constructor(url) {
//         this.url = url;
//     }
//     get(data) {
//         let length = this.url.length;
//         let index = this.url.indexOf("?");
//         let str = this.url.substring(index + 1, length);
//         let index1 = str.indexOf('&');
//         let str1 = str.substring(0, index1);
//         let index2 = str.lastIndexOf('&');
//         let str2 = str.substring(index1 + 1, index2);
//         let str3 = str.substring(index2 + 1, length);
//         let arr1 = str1.split('=');
//         let arr2 = str2.split('=');
//         let arr3 = str3.split('=');
//         if (data == 'type') {
//             return arr1[1];
//         } else if (data == 'id') {
//             return arr2[1];
//         } else if (data == 'name') {
//             return arr3[1];
//         } else {
//             return '输入错误或者没有找到！';
//         }

//     }
// }
// let url = new Url('localhost:8080?type=2&id=1&name=xiaoming');
// console.log(url.get('type'));
// console.log(url.get('id'));
// console.log(url.get('name'));

// //作业二
// var params = {
//     type: '1',
//     id: 1,
//     name: 'xiaoming'
// }

// var url2 = new Url(params)  
// url2.parse() //  type=2&id=1&name=xiaoming
// class Url {
//     constructor(obj) {
//         this.obj = obj;
//     }
//     parse() {
//         let arr = [];
//         let arr1 = [];
//         let str = '';
//         let str1 = '';
//         for (let key in this.obj) {
//             arr.push(key);
//             arr1.push(this.obj[key]);
//         }
//         arr.forEach((e, i) => {
//             str += '&' + arr[i] + '=' + arr1[i];
//         })
//         let length = str.length;
//         str1 = str.substring(1, length);
//         return str1;
//     }
// }

// var url2 = new Url(params)
// console.log(url2.parse());


// class Url {
//     constructor(target) {
//         this.target = target;
//         if (Url.isPlantObject(this.target)) {
//             this.searchParams = '';
//             this.params = {};
//         } else {
//             this.searchParams = this.target.split('?')[1];
//             this.params = this.getParams(this.searchParams);
//         }
//     }

//     parse() {
//         var res = '';
//         if (Url.isPlantObject(this.target)) {
//             for (let key in this.target) {
//                 res += (key + '=' + this.target[key]) + '&'
//             }
//             res = res.substring(0, res.length - 1);
//         }
//         return res;
//     }

//     static isPlantObject(val) {
//         return Object.prototype.toString.call(val).slice(8, -1) == 'Object';
//     }

//     get(name) {
//         return this.params[name];
//     }

//     getParams(str) {
//         var res = {};
//         str.split('&').forEach(item => {
//             let arr = item.split('=');
//             res[arr[0]] = arr[1];
//         })
//         return res;
//     }
// }

// //作业一：
// var str = new String('localhost:8080?type=2&id=1&name=xiaoming&a=131&b=asjdkl');
// console.log(typeof str)
// var url = new Url(str);
// console.log(url.get('type')) // 2；
// console.log(url.get('id')) // 1；
// console.log(url.get('name')) // xiaoming;
// console.log(url.get('a')) // xiaoming;
// console.log(url.get('b')) // xiaoming;


// //作业二
// var params = {
//     type: '1',
//     id: 1,
//     name: 'xiaoming'
// }
// let type = Url.isPlantObject(params);
// console.log(type);
// var url2 = new Url(params)
// let res = url2.parse() //  type=2&id=1&name=xiaoming
// console.log(res);


//作业一：
// var url = new Url('localhost:8080?type=2&id=1&name=xiaoming');
// url.get('type') // 2；
// url.get('id') // 1；
// url.get('name') // xiaoming;


//作业二
// var params = {
//     type: '1',
//     id: 1,
//     name: 'xiaoming'
// }
// var url2 = new Url(params)
// url2.parse() //  type=2&id=1&name=xiaoming