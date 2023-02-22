/*models sreves the purpose of representing our data and  of managaning our data, svaing it fetching it also updating it
it'd the model which is responsible for your data, it contains all the data related logic*/

// const product = [];
// const e = require('express');
// const fs = require('fs');
// const db = require('../util/database')

const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//export model

module.exports = Product;
// const path = require('path');
// const Cart = require('./cart');
// const rootDir = require('../util/path');

// const p = path.join(rootDir, 'data', 'product.json');

// const getProductFromFile = (cb) => {
//     fs.readFile(p, (err, fileContent) => {
//         if (!err && fileContent.length > 0)
//             return cb(JSON.parse(fileContent));
//         else
//             cb([]);
//     });
// }
// module.exports = class Product{
//     constructor(id, title, imageUrl, description, price)
//     {
//         this.id = id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//     }

//     save()
//     {
//         return (db.execute('INSERT INTO products (title, price, description, imgUrl) VALUES (? , ? , ?, ?)', [this.title, this.price, this.description, this.imageUrl]));
//     }
    // save()
    // {
    //     getProductFromFile((product) => {
    //     if (this.id) {
    //         const existingProductIndex = product.findIndex(prod => prod.id === this.id)
    //         const updatedProduct = [...product];
    //         updatedProduct[existingProductIndex] = this;
    //         fs.writeFile(p,  JSON.stringify(updatedProduct), (err) => {
    //             console.log(err);
    //         }); 
    //     }
    //     else
    //     {
    //         this.id = Math.random().toString();
    //         product.push(this);
    //         fs.writeFile(p,  JSON.stringify(product), (err) => {
    //             console.log(err);
    //         }); 
    //     }
    //     });
    // }

    // static fetchAll(cb)
    // {
    //     getProductFromFile(cb);
    // }
    // static save()
    // {

    // }
    // static fetchAll()
    // {
    //     return (db.execute('SELECT * FROM products'));
    // }
    // static delete(id)
    // {

    // }
    // static delete(id)
    // {
    //     getProductFromFile(prods => {
    //         let produit = prods.find(prod => prod.id === id);
    //         // const prodIndex = prods.findIndex(prod => prod.id === id);
    //         // console.log('>>>>: ',prodIndex);
    //         // prods.splice(prodIndex, 1);
    //         // console.log('prods>>: ',prods);
    //         const updatedProduct = prods.filter(product => id != product.id)
    //         fs.writeFile(p,  JSON.stringify(updatedProduct), (err) => {
    //             if (!err)
    //             {
    //                 console.log(">>> no error found  >> ")
    //                 Cart.deleteItem(id, produit.price);
    //                 console.log(">>> no error found 2  >> ")

    //             }
    //             else
    //                 console.log(err);
    //         }); 
    //     });
    // }

    // static fetchProduct(id)
    // {
    //     return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    // }
    // static fetchProduct(id, cb)
    // {
    //     getProductFromFile(prods => {
    //         const product = prods.find(prod => prod.id === id);
    //         console.log('>>Fetch Prouct Price >>>: ',product.price);
    //         cb(product);
    //     });
    // }
// };