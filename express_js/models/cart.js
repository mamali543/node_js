
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice)
    {
        fs.readFile(p, (err, fileContent) =>{
            let cart = { products: [], totalPrice: 0}
            if (!err && fileContent.length >0)
                cart = JSON.parse(fileContent);
            const existingproductIndex = cart.products.findIndex(prod => id === prod.id);
            let existingproduct = cart.products[existingproductIndex];
            let updatedProduct;
            if (existingproduct)
            {
                updatedProduct = { ...existingproduct };
                updatedProduct.qty += 1; 
                cart.products[existingproductIndex] = updatedProduct;
            }
            else
            {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err =>{
                console.log(err);
            })
        })
    }
}