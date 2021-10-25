export class Ellipsis {
    constructor(obj) {
        console.log(obj);
        this.el = obj.el;
        // this.el = props.el;
        this.text = this.el.innerHTML;
        // this.text = this.el.innerHTML;
        this.textCount = obj.textCount;
        // this.textCount = props.textCount;
        this.findAllButtonText = obj.findAllButtonText || "查有看所";
        // this.findAllButtonText = props.findAllButtonText || '查看全文';
        this.ellipsisButtonText = obj.ellipsisButtonText || "收起";
        // this.ellipsisButtonText = props.ellipsisButtonText || '收起';
        this.showFindAllButton = obj.showFindAllButton || false;
        // this.showFindAllButton = props.showFindAllButton || false;
        this.flag = true;
        // this.flag = true; //判断是否显示查看全部按钮的显示状态；
    }
    exec() {
        if (!this.text) throw new Errow('文本不能为空！');
        // if (!this.text) throw new Errow('文本内容不能为空');
        this.el.innerHTML = this.format(this.text, this.textCount);
        // this.el.innerHTML = this.format(this.text, this.textCount);
        if (this.showFindAllButton) {
            this.addButton();
        }
    }
    get buttonText() {
        return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
        // return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
    }
    format(str, num) {
        return str.length < num ? str : (str.substring(0, num) + '...');
        // return str.length < num ? str : (str.substring(0, num) + '...');
    }
    addButton() {
        let a = document.createElement('a');
        // var a = document.createElement('a');
        a.textContent = this.findAllButtonText;
        // a.textContent = this.findAllButtonText;
        a.style.cssText = `
            color:blue;
            cursor:pointer;
        `

        let _this = this;
        a.addEventListener('click', function() {
            _this.flag = !_this.flag;
            // _this.flag = !_this.flag;
            this.textContent = _this.buttonText;
            // this.textContent = _this.buttonText;       
            _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text, _this.textCount) : _this.text;
            // _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text, _this.textCount) : _this.text;
        })
        this.el.appendChild(a, this.el.childNodes[0]);
        // this.el.appendChild(a, this.el.childNodes[0]);
    }

    // exec() {
    //     let show = this.el.nextElementSibling;
    //     let hide = this.el.nextElementSibling.nextElementSibling;
    //     let hideHTML = this.el.innerHTML.toString().substring(0, this.textCount) + '...';
    //     let showHTML = this.el.innerHTML;
    //     let toggle = this.findAllButtonText ? show.innerHTML = this.findAllButtonText : show.innerHTML = '展开';
    //     let length = this.el.innerHTML.toString().length;
    //     if (length > this.textCount) {
    //         this.el.innerHTML = hideHTML;
    //         if (this.showFindAllButton) {
    //             toggle;
    //             show.style.display = 'black';
    //             hide.style.display = 'none';
    //         } else {
    //             show.style.display = 'none';
    //             hide.style.display = 'none';
    //         }
    //     } else {
    //         this.el.innerHTML = showHTML;
    //         if (this.showFindAllButton) {
    //             toggle;
    //             show.style.display = 'none';
    //             hide.style.display = 'none';
    //         }
    //     }

    //     show.addEventListener('click', function() {
    //         this.previousElementSibling.innerHTML = showHTML;
    //         this.style.display = 'none';
    //         this.nextElementSibling.style.display = 'block';
    //     })

    //     hide.addEventListener('click', function() {
    //         this.style.display = 'none';
    //         this.previousElementSibling.style.display = 'block';
    //         this.previousElementSibling.previousElementSibling.innerHTML = hideHTML;
    //     })
    // }
}