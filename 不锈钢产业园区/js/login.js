// 1.页面实时刷新
// setTimeout(function(){location.reload()},(2000000000000000000))
// 2.做登录限制
document.getElementById('number').onblur = function () {

    var v = this.value;
    var reg = /^([a-zA-Z]|\d){3,8}$/g;
    if (reg.test(v) == false) {
        alert('账号需为3-8位的数字加字母');
        this.value = '';
    }
};

document.getElementById('pwd').onblur = function () {
    var v = this.value;
    var reg = /^([a-zA-Z]|\d|_){3,8}$/g;
    if (reg.test(v) == false) {
        alert('密码格式为数字字母下划线');
        this.value = '';
    }
}
// document.querySelector('#yzm').addEventListener('mouseup',function() {
//     var val = this.value;
//     console.log(val)
//     var b =this.innerText.trim().split('　').join('')
//     console.log(b)
// })

document.querySelector('#yzm').onclick = function () {
    console.log(111);
    // 当点击验证码的时候，随机产生两个数字加字母的组合，打乱拼接在一起，将内容设置给input
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // 取出arr的两个随机字母
    var zmIndex1 = parseInt(Math.random() * arr.length);
    var zmIndex2 = parseInt(Math.random() * arr.length);
    var sz1 = parseInt(Math.random() * 9);
    var sz2 = parseInt(Math.random() * 9);
    // 设置给input内容框
    this.value = arr[zmIndex1] + sz1 + arr[zmIndex2] + sz2;
}
document.querySelector('#yzm-value').onblur = function (){
    var v = this.value;
    var x = document.querySelector('#yzm').value;
    if(v != x){
       alert('验证码错误');
    }
}








