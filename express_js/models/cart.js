
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
                let produit = card.products.find(prod => prod.id === id);
                if (!produit)
                    return ;
                let updatedPrice = card.totalPrice - (produit.qty * price);
                const updatedCard = {...card};
                updatedCard.products = card.products.filter(prod => prod.id !== id);
                updatedCard.totalPrice = updatedPrice;
                fs.writeFile(p, JSON.stringify(updatedCard), err =>{
                    console.log(err);
                })
            }
            else
            {
                console.log(">>>>>: Item not found in Card  >>> : ")
                return ;
            }
        });
    }

    static getCardProduct(cb)
    {
        fs.readFile(p, (err, fileContent) =>{
            let cart = JSON.parse(fileContent);
            if (err)
                cb(null);
            else
                cb(cart);
        });
    }
}