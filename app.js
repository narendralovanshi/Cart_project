const conatiner = document.querySelector(".container");
const rendeCartData = document.querySelector(".rendeCartData");
const count = document.querySelector(".count");
const value = document.querySelector(".value");
const can = document.querySelector(".can");
let arr = [];
let calculate = [];

let fetchData = async () => {
  let data = await fetch("https://fakestoreapi.com/products");
  data = await data.json();
  console.log(data);

  data.map((e) => {
    let createImgEle = document.createElement("img");
    let createTitleEle = document.createElement("p");
    let createPriceEle = document.createElement("p");
    let createBtnEle = document.createElement("button");
    let createProduct = document.createElement("div");

    createImgEle.src = e.image;
    createTitleEle.innerHTML = `${e.title.slice(1, 30)}...`;
    createPriceEle.innerHTML = `  Price  :    $${e.price}`;
    createBtnEle.innerHTML = "Add To Cart";

    createImgEle.setAttribute("class", "Imgstyle");
    createTitleEle.setAttribute("class", "Titlestyle");
    createPriceEle.setAttribute("class", "Pricestyle");
    createBtnEle.setAttribute("class", "Btnstyle");
    createProduct.setAttribute("class", "createProduct");

    createProduct.appendChild(createImgEle);
    createProduct.appendChild(createTitleEle);
    createProduct.appendChild(createBtnEle);
    createProduct.appendChild(createPriceEle);
    conatiner.appendChild(createProduct);

    // button click fuctions

    let addToCart = (img, price) => {
      arr.push({});
      count.innerHTML++;
      alert("Product Added To  Cart");
      can.style.display = "flex";

      let cartDivEle = document.createElement("div");
      let cartImgEle = document.createElement("img");
      let cartPriceEle = document.createElement("p");
      let cartTranshEle = document.createElement("i");

      cartImgEle.src = img;
      cartPriceEle.innerHTML = price;

      cartImgEle.setAttribute("class", "cartImgEle");
      cartDivEle.setAttribute("class", "cartDivEle");
      cartTranshEle.setAttribute("class", "fa-solid fa-trash");
      cartTranshEle.addEventListener("click", () => {
        cartDivEle.remove();
        count.innerHTML--;
       
        alert("Product Remove To  Cart");
      });

      cartDivEle.appendChild(cartImgEle);
      cartDivEle.appendChild(cartPriceEle);
      cartDivEle.appendChild(cartTranshEle);
      rendeCartData.appendChild(cartDivEle);

      calculate.push(price);
      let totle = calculate.reduce((first, last) => {
        return first + last;
      });
      value.innerHTML = ` Totle Price : $${totle}`;
    };

    createBtnEle.addEventListener("click", () => addToCart(e.image, e.price));
  });
};

fetchData();
