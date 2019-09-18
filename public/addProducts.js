$(
    ()=>{
        let btnProductAdd=$('#btnProductAdd');
        let name=$('#productName');
        let price=$('#productPrice');
        let manufacturer=$('#productManufacturer');
        btnProductAdd.click(()=>{
            console.log(price.val())
            addProduct(name.val(),price.val(),manufacturer.val(),(addedProduct)=>window.alert("New Product added to database: "+addedProduct.name));
        })
    }
)