
const fs = require('fs');
const { parse } = require('path');
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

    static deleteItem(id, price)
    {
        fs.readFile(p, (err, fileContent) =>{
            if (!err)
            {
                let card = JSON.parse(fileContent);
                console.log('Card >>> : ', card);
                let produit = card.products.find(prod => prod.id === id);
                console.log('ProductIndex >>> : ',produit);
                let updatedPrice = card.totalPrice - (produit.qty * price);
                console.log('NewPrice >>> : ',updatedPrice);
            }
        });
    }
}