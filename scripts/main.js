// 换标题
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
// 点击更换图片
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.jpeg"){
        myImage.setAttribute("src","images/firefox2.png");
    }else{
        myImage.setAttribute("src","images/firefox-icon.jpeg");
    }
}