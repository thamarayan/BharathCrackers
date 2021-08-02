require('dotenv').config();
var Product = require('../modals/product');
var mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@cluster0.u8xen.mongodb.net/bharathStore?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology:true });
mongoose.connect('mongodb+srv://bharathcrackers:Rakisuba123@cluster0.u8xen.mongodb.net/bharathStore?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology:true });

var products = [
//     new Product({
//     imagePath : '/images/kids/7cm-sparkler.png',
//     title : '7cm Bobby Crackling',
//     description:'sparklers 10Pcs.',
//     price:'18',
//     category:'kids',
//     brand:'STANDARD'
// }),
// new Product({
//     imagePath : '/images/kids/7cm-sparkler.png',
//     title : '12cm Jimmy Gold',
//     description:'sparklers 10Pcs.',
//     price:'35',
//     category:'kids',
//     brand:'STANDARD'
// }),
// new Product({
//     imagePath : '/images/kids/7cm-sparkler.png',
//     title : '12cm Jimmy Crackling',
//     description:'sparklers 10Pcs.',
//     price:'42',
//     category:'kids',
//     brand:'STANDARD'
// }),
// new Product({
//     imagePath : '/images/kids/7cm-sparkler.png',
//     title : '15cm Gold Sparklers',
//     description:'sparklers 10Pcs.',
//     price:'65',
//     category:'kids',
//     brand:'STANDARD'
// })

// Green Shade already updated
];


var done = 0;
for(var i=0; i<products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}