// console.log('====================================');
// console.log("Connected");
// console.log('====================================');


// *************************** Quantity Button ****************************


let qty= document.querySelector("#quan-input")

function Decrement(){
    if (qty.value <= 1){
        qty.value=1;
    }
    else {
        qty.value= parseInt(qty.value)-1
    }
}

function Increment(){
    qty.value = parseInt(qty.value)+1
}

// *************************** Quantity Button End ****************************


//  ************ Accessing product data through API  *************


let title_contr = document.querySelector(".title")
let title_1_contr = document.querySelector(".title-1")
let price_contr = document.querySelector(".price")
let price_del_contr = document.querySelector(".price-del")
let price_off_contr = document.querySelector(".price-off sup")

let plt1_contr = document.querySelector(".plt1")
let plt2_contr = document.querySelector(".plt2")
let plt3_contr = document.querySelector(".plt3")
let plt4_contr = document.querySelector(".plt4")

let size1_contr = document.querySelector(".size-plt>.size-item:nth-child(1)>label")
let size2_contr = document.querySelector(".size-plt>.size-item:nth-child(2)>label")
let size3_contr = document.querySelector(".size-plt>.size-item:nth-child(3)>label")
let size4_contr = document.querySelector(".size-plt>.size-item:nth-child(4)>label")
let size5_contr = document.querySelector(".size-plt>.size-item:nth-child(5)>label")






const url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448";



var data = fetch(url)
data.then((res)=>res.json())
.then((res)=>{

// title
title_contr.innerText = res.product.vendor
// title-1
title_1_contr.innerText= res.product.title
// price
price_contr.innerText= res.product.price
// price deleted
price_del_contr.innerText= res.product.compare_at_price

// discount %

let list_price = (res.product.compare_at_price).slice(1)
let  selling_price = (res.product.price).slice(1)
let discount =((list_price - selling_price )/list_price) *100

price_off_contr.innerText=parseInt(discount) + "%" +" Off"

// product colors

 // color 1

// console.log(res.product.options[0].values[0].Yellow)
let col1 = res.product.options[0].values[0].Yellow

plt1_contr.style.cssText = `color: ${col1}; background-color:${col1};  `


plt1_contr.addEventListener('mouseover', function(){
    plt1_contr.style.outline = `3px solid ${col1}`
})

plt1_contr.addEventListener('mouseout', function(){
    plt1_contr.style.outline = ``
})

plt1_contr.addEventListener('focus', function(){
    plt1_contr.style.outline = `3px solid ${col1}`
})

// color 2

// console.log(res.product.options[0].values[1].Green)
let col2 = res.product.options[0].values[1].Green

plt2_contr.style.cssText = `color: ${col2}; background-color:${col2};  `


plt2_contr.addEventListener('mouseover', function(){
    plt2_contr.style.outline = `3px solid ${col2}`
})

plt2_contr.addEventListener('mouseout', function(){
    plt2_contr.style.outline = ``
})

plt2_contr.addEventListener('focus', function(){
    plt2_contr.style.outline = `3px solid ${col2}`
})


// color 3

// console.log(res.product.options[0].values[2].Blue)
let col3 = res.product.options[0].values[2].Blue

plt3_contr.style.cssText = `color: ${col3}; background-color:${col3};  `


plt3_contr.addEventListener('mouseover', function(){
    plt3_contr.style.outline = `3px solid ${col3}`
})

plt3_contr.addEventListener('mouseout', function(){
    plt3_contr.style.outline = ``
})

plt3_contr.addEventListener('focus', function(){
    plt3_contr.style.outline = `3px solid ${col3}`
})


// color 4

// console.log(res.product.options[0].values[3].Pink)
let col4 = res.product.options[0].values[3].Pink

plt4_contr.style.cssText = `color: ${col4}; background-color:${col4};  `


plt4_contr.addEventListener('mouseover', function(){
    plt4_contr.style.outline = `3px solid ${col4}`
})

plt4_contr.addEventListener('mouseout', function(){
    plt4_contr.style.outline = ``
})

plt4_contr.addEventListener('active', function(){
    plt4_contr.style.outline = `3px solid ${col4}`
})


// product sizes

size1_contr.innerText=res.product.options[1].values[0]
size2_contr.innerText=res.product.options[1].values[1]
size3_contr.innerText=res.product.options[1].values[2]
size4_contr.innerText=res.product.options[1].values[3]
size5_contr.innerText=res.product.options[1].values[4]


})


// final product data after add to cart operation

var colorIs;
var sizeIs;

function getColor(val){
colorIs= val;
}

function getSize(val){
sizeIs = val
console.log(sizeIs)
}


console.log(`Embrace Sideboard with Color ${colorIs}, Size ${sizeIs} added to cart`);


function proDetail(){
    data_contr = document.querySelector(".ord-det")

    data_contr.style.padding= "7px 1px 7px 10px"

    if (colorIs && sizeIs){

        data_contr.innerText = `Embrace Sideboard with Color ${colorIs} and Size ${sizeIs} added to cart `

    }

    else {
        data_contr.innerText = `Select all required product details`
    }

}



