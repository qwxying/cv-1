let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
 /**
  * 你好，我叫江滔，我是一名前端工程师。
  * 接下来，我要演示一下我的前端功底。
  * 首先，我要准备一个div：
  * */

#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}

/* *
 * 接下来，我要把div变成一个太极图。
 * 注意看好了。
 * 首先，把div变成一个圆。
 * */
#div1{
  border-radius:50%;
  box-shadow: 0 0 5px rgba(0,0,0,618);
  border:none;
}

/* *
 * 太极是阴阳形成的
 * 一黑一白
 * */
#div1{
  background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/**再加上灵珠和魔丸**/
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}




`;
let string2 = "";
let string3 = `
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
`;
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);
    if (n + 1 < string.length) {
      n += 1;
      step();
    }
  }, 0);
};

step();
