const express = require('express');
const path = require('path');
const app = express();
const handle = require('express-handlebars');
const { rsort } = require('semver');

app.engine('.hbs', handle.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use("/public", express.static(path.join(__dirname, "public"))); 



app.get('/', (req,res) =>{
    res.render('cards', {
        cars: [
            {
                title: "Smart ForTwo",
                photo: "/public/img/smart-nobackg.png", 
                equip: 'EQ Passion o.o - 56CV',
                price: "294",
                delivery: "true",
                isOffer: "true",
                available: "true"
            },
            {
                title: "Volkswagen Polo",
                photo: "/public/img/volf-polo-nobackg.png",  
                equip: "Polo 1.0 - 58CV",
                price: "280",
                delivery: "false",
                isOffer: "true",
                available: "true"
            },
            {
                title: "Fiat Panda",
                photo: "https://console.yorapp.it/public/gallerie/14657/fiat-17pandalounge5ha3fbc-lowaggressive-bianco-gelato-pastello.png",  
                equip: "EQ Passion o.o - 90CV",
                price: "189",
                delivery: "false",
                isOffer: "false",
                available: "false"
            },
            {
                title: "Fiat Panda",
                photo: "https://console.yorapp.it/public/gallerie/14657/fiat-17pandalounge5ha3fbc-lowaggressive-bianco-gelato-pastello.png",  
                equip: "EQ Passion o.o - 90CV",
                price: "189",
                delivery: "false",
                isOffer: "true",
                available: "true"
            },
            {
                title: "Smart ForTwo",
                photo: "/public/img/smart-nobackg.png",
                equip: "EQ Passion o.o - 95CV",
                price: "294",
                delivery: "true",
                isOffer: "false",
                available: "true"
            },
            {
                title: "Volkswagen Polo",
                photo: "/public/img/volf-polo-nobackg.png",  
                equip: "Polo 2.0 - 58CV",
                price: "297",
                delivery: "false",
                isOffer: "false",
                available: "false"
            }
        ]
    });
})

app.listen(4000, () =>{
    console.log('Server is starting at port ', 4000);
});

