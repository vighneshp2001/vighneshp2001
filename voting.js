// let person=[
//     {name:"vighnesh",age:23,place:"kottarakara",qualification:"degree"},
//     {name:"amal",age:17,place:"kollam",qualification:+1},
//     {name:"vinayak",age:16,place:"kundara",qualification:"sslc"},
//     {name:"balu",age:18,place:"varkala",qualification:+2},
//     {name:"aswin",age:20,place:"puthoor",qualification:"degree"}
// ];
// let notligible=[];

// for (let i = 0; i < person.length; i++)
//     if (person[i].age<18) {
//         notligible.push(person[i])
//     } 
//     console.log(notligible,"not eligible for voting");
    
        
let product=[
    {device:"mobailphone",price:20000},
    {device:"laptop",price:35000},
    {device:"headset",price:3000},
    {device:"charger",price:1000},
    {device:"powerbank",price:2000}
];
function electronicdevice(product) {
let highprice=[];
let lowprice=[];

for (let i = 0; i < product.length; i++) 
    if (product[i].price<10000) {
        lowprice.push(product[i]);
    }
    else {
        highprice.push(product[i]);
    }
    console.log (lowprice,"have low price");
    console.log(highprice,"have high price");
}
   electronicdevice(product)


   


