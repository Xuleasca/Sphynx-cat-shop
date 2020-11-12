const colorButton = document.querySelector(".color-button");
const nameButton = document.querySelector(".name-button");
const changePicButton = document.querySelector(".change-pic");
const discountButton = document.querySelector(".discount");
const name = document.querySelector(".name")
const nakedCatImage = document.getElementById("jumper");
let isCatNaked = true;
let backgroundColor = document.querySelector('body');
let priceContainer = document.querySelector(".price");



// colorButton.addEventListener("click", lalala);
colorButton.addEventListener("click", function(){
  if(backgroundColor.style.backgroundColor === "pink"){
    backgroundColor.style.backgroundColor = "white"
  }else {backgroundColor.style.backgroundColor = "pink"}
    
})


nameButton.addEventListener("click", function(){
    let displayName = prompt("What's your name?")
     name.innerHTML = "Hello "+ displayName + "!";
});


changePicButton.addEventListener("click", function(e){
  console.log("hiii");
  if (isCatNaked){
    nakedCatImage.src = "https://i.ebayimg.com/images/g/jZAAAOSwMrxfVwDf/s-l640.jpg";
    isCatNaked = false;
  } else {
    nakedCatImage.src = "https://i.pinimg.com/originals/57/7c/af/577caf373d1a2a146d09badee6c8ed69.jpg";
    isCatNaked = true;
  }
});

discountButton.addEventListener("click", function(e){
  let priceString = priceContainer.innerHTML;
  let price = parseFloat(priceString.substring(1, priceString.length));
  price = price + price *0.1;
  priceContainer.innerHTML = "£" + price.toFixed(2);
});


