
const products = [
    {
        name: "parle buiscuit",
        price: 40
    },
    {
        name: "burborn Buiscuit",
        price: 100
    },
    {
        name: "maggie",
        price: 50
    },
    {
        name: "lays",
        price: 30
    },
    {
        name: "kit-cat",
        price: 50
    },
    {
        name: "silk",
        price: 160
    }
]

const dropdown = document.querySelector("#product");
const price = document.querySelector("#price");

for (let val of products) {
    // console.log(val);
    var option = document.createElement("option");
    option.value = val.price;
    option.text = val.name;
    dropdown.appendChild(option);
}

document.querySelector('#product').addEventListener('click', function () {
    // console.log('You selected: ', this.value);
    price.value = this.value;
});



// we have to do it on click by add to cart and send product name , price and quantity

const bill = document.querySelector('table');
const buy = document.querySelector('#buy');
// const qty = document.querySelector('#qty'); 

let i = 1;
buy.addEventListener("click", function () {


    let select = document.getElementById('product');
    let price = select.options[select.selectedIndex].value;
    let productName = select.options[select.selectedIndex].text;

    let selectQuantity = document.getElementById('qty');
    let qty = selectQuantity.options[selectQuantity.selectedIndex].value;

    let present = false;

    let allProductName = document.querySelectorAll(".productName")
    console.log(productName);
    for (var i = 0; i < allProductName.length; i++) {

        // console.log(productName == allProductName[i].childNodes[0].nodeValue.trim());
        if (productName == allProductName[i].childNodes[0].nodeValue.trim()) {

            let quantity =allProductName[i].parentElement.children[1];
            let unitPrice =allProductName[i].parentElement.children[2];
            let toatlPrice =allProductName[i].parentElement.children[3];

            quantity.innerHTML=Number(quantity.innerHTML)+Number(qty);
            //unitPrice.innerHTML=Number(unitPrice.innerHTML)+Number(price);
            toatlPrice.innerHTML=Number(toatlPrice.innerHTML)+(price * qty)


            let total = document.getElementById('total');
            // console.log(total.textContent); 
            total.textContent = Number(total.textContent) + (price * qty);
            //return Number(total.textContent) + (price * qty);

            // console.log(quantity,unitPrice,toatlPrice);



            
            present = true;
        }
    }

    if(present){
        //update qty
        //update total
        //update bill
        
    }


    if (!present) {

        bill.innerHTML += `<tr>
        <td class="productName"> ${productName}</td>
       
        <td> ${qty} </td>     
        <td >  ${price}</td>
        <td id="utotal" >  ${price * qty}</td>
        <td > <i class="fa fa-trash-o delete"></i></td>
        </tr> `;

        total = () => {
            let total = document.getElementById('total');
            // console.log(total.textContent); 
            total.textContent = Number(total.textContent) + (price * qty);
            return Number(total.textContent) + (price * qty);

        }
        totalMinus = (currentItemtotalPrice) => {
            let total = document.getElementById('total');
            //console.log(total.textContent); 

            total.textContent = Number(total.textContent) - currentItemtotalPrice;
            return Number(total.textContent) - currentItemtotalPrice;

        }

        total();


    }


});


bill.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();

        const a = e.target.parentElement.parentElement;
        const currentItemtotalPrice = a.querySelector("#utotal").textContent
        console.log(currentItemtotalPrice);
        total.textContent = totalMinus(currentItemtotalPrice);

        // document.getElementById ( "tdid" ).innerText
        // let total = document.getElementById('total');
        // console.log(total.textContent); 
        // total.textContent = Number(total.textContent)-(price*qty);
    }
})