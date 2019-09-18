fetchProducts=(done)=>{
    $.get('/api/products',(data)=>done(data));
}

createProductCart=(product)=>{
    return $(`<div class="col-4 card mx-2 my-2 p-2 justify-content-center">
            <div class="card-body">
                <h4 class="card-title">${product.name}</h4>
                <div class="product-manufacturer">${product.manufacturer==""?"-----":product.manufacturer}</div> 
                <div class="row">
                    <div class="col m-3 p-3"><b>Rs.${product.price}</b></div>
                    <button class="btn btn-primary col m-3 p-1">Buy</button>
                </div>
            </div>
        </div>
        `
    )
}

addProduct=(name,price, manufacturer,done)=>{
    $.post('/api/products',{name:name,price:price,manufacturer:manufacturer},(data)=>done(data));
}