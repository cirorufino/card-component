const express = require('express');
const path = require('path');
const app = express();
const handle = require('express-handlebars');
const { rsort } = require('semver');

app.engine('.hbs', handle.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use("/public", express.static(path.join(__dirname, "public"))); //importare css in handlebars 
//app.use("/public", express.static(path.join(__dirname, "public"))); 

//Routes

app.get('/', (req,res) =>{
    res.render('cards', {
        cars: [
            {
                title: "Smart ForTwo",
                photo: "/public/img/smart-nobackg.png", 
                equip: 'EQ Passion o.o - 56CV',
                price: "294"
            },
            {
                title: "Volkswagen Polo",
                photo: "/public/img/volf-polo-nobackg.png",  
                equip: "Polo 1.0 - 58CV",
                price: "280"
            },
            {
                title: "Fiat Panda",
                photo: "https://console.yorapp.it/public/gallerie/14657/fiat-17pandalounge5ha3fbc-lowaggressive-bianco-gelato-pastello.png",  
                equip: "EQ Passion o.o - 90CV",
                price: "189"
            },
            {
                title: "Fiat Panda",
                photo: "https://console.yorapp.it/public/gallerie/14657/fiat-17pandalounge5ha3fbc-lowaggressive-bianco-gelato-pastello.png",  
                equip: "EQ Passion o.o - 90CV",
                price: "189"
            },
            {
                title: "Smart ForTwo",
                photo: "/public/img/smart-nobackg.png",
                equip: "EQ Passion o.o - 95CV",
                price: "294"
            },
            {
                title: "Volkswagen Polo",
                photo: "/public/img/volf-polo-nobackg.png",  
                equip: "Polo 2.0 - 58CV",
                price: "297"
            }
        ]
    });
})

app.listen(4000, () =>{
    console.log('Server is starting at port ', 4000);
});

/*
https://xd.adobe.com/view/78c63ff8-c99b-4922-5a13-680de4dc2bff-0ef7/screen/0b628e21-3f1c-4400-8484-29bf13fff67c/

Sgasgas2021!

https://codepen.io/

*/