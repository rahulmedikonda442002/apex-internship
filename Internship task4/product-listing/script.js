let products=[
{name:"Laptop",category:"Electronics",price:50000,rating:4.5},
{name:"Phone",category:"Electronics",price:30000,rating:4.8},
{name:"Shirt",category:"Clothing",price:1500,rating:4.1}
];

function displayProducts(items){
    let productList=document.getElementById("productList");
    productList.innerHTML="";

    items.forEach(product=>{
        productList.innerHTML+=`
        <div class="product">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ${product.rating}</p>
        </div>`;
    });
}

function filterProducts(){
    let value=document.getElementById("filter").value;

    if(value==="all"){
        displayProducts(products);
    }else{
        displayProducts(products.filter(p=>p.category===value));
    }
}

function sortProducts(){
    let value=document.getElementById("sort").value;
    let sorted=[...products];

    if(value==="price"){
        sorted.sort((a,b)=>a.price-b.price);
    }else{
        sorted.sort((a,b)=>b.rating-a.rating);
    }

    displayProducts(sorted);
}

displayProducts(products);