// const inventory=[
//     {name:"applle",quantity:2},
//     {name:"banana",quantity:0},
//     {name:"orange",quantity:5}
// ]


// const item= inventory.map(function(currentEl,cuIn, Array){
//     console.log(Array);
// })

// // const inventoryname=inventory.map(item=> item.name)
// // console.log(inventoryname);


// const msg=()=>{
//     console.log("hello");
// }
// msg()


// const number=[1,2,3,4]
// const people = [
//     { name: 'Alice', age: 25, city: 'New York' },
//     { name: 'Bob', age: 30, city: 'San Francisco' },
//     { name: 'Charlie', age: 35, city: 'Los Angeles' },
//     { name: 'David', age: 30, city: 'New York' },
//     { name: 'Eve', age: 40, city: 'San Francisco'}
//   ];

// // const peoplename=people.map(item=> item.name)
// // console.log(peoplename);
// // const peoplecity=people.filter((city)=>city.city==="New York");
// // console.log(peoplecity);
// const peopleage=people.find((personage)=>personage.age===30);
// console.log(peopleage);


// const books = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
//   { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
//   { title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Adventure" },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
// ];

// const booktitle=books.find((titlebook)=>titlebook.title==="1984");
// console.log(booktitle);

// const bookauther=books.find((autherbook)=>autherbook.author==="Harper Lee");
// console.log(bookauther);

// const bookname=books.map((item)=> item.title)
// console.log(bookname);


const menuItems = [
  { 
    id: 1,
    name: "Cheeseburger",
    category: "Main Course",
    price: 10.99,
    description: "Juicy beef patty with cheese, lettuce, tomato, and pickles"
  },
  { 
    id: 2,
    name: "Caesar Salad",
    category: "Appetizer",
    price: 7.50,
    description: "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese"
  },
  { 
    id: 3,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 12.99,
    description: "Classic pizza topped with tomato sauce, mozzarella, and fresh basil"
  },
  { 
    id: 4,
    name: "Chocolate Brownie",
    category: "Dessert",
    price: 5.99,
    description: "Rich chocolate brownie served warm with vanilla ice cream"
  },
  { 
    id: 5,
    name: "Iced Latte",
    category: "Beverage",
    price: 3.99,
    description: "Chilled espresso with milk, served over ice"
  },
  { 
    id: 6,
    name: "Caprese Salad",
    category: "Appetizer",
    price: 8.50,
    description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze"
  },
  { 
    id: 7,
    name: "Grilled Salmon",
    category: "Main Course",
    price: 15.99,
    description: "Fresh salmon fillet grilled to perfection, served with vegetables"
  },
  { 
    id: 8,
    name: "Tiramisu",
    category: "Dessert",
    price: 6.50,
    description: "Traditional Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone"
  },
  { 
    id: 9,
    name: "Margarita",
    category: "Beverage",
    price: 7.99,
    description: "Classic cocktail made with tequila, triple sec, lime juice, and salted rim"
  },
  { 
    id: 10,
    name: "Chicken Wings",
    category: "Appetizer",
    price: 9.99,
    description: "Crispy chicken wings tossed in your choice of sauce: buffalo, barbecue, or teriyaki"
  }
];

const idnumber=menuItems.map((idname)=>idname.id)
console.log(idnumber);
const peoplename=menuItems.map((personname)=>personname.name)
console.log(peoplename);
const categoryname=menuItems.map((namecategory)=>namecategory.category)
console.log(categoryname);
const itemprice=menuItems.map((priceitem)=>priceitem.price)
console.log(itemprice);
const descriptionitem=menuItems.map((iteamdescription)=>iteamdescription.description)
console.log(descriptionitem);
const newcategory=menuItems.filter((categorynew)=>categorynew.category==="Main Course")
console.log(newcategory);
const maincatagory=menuItems.filter((catogorymain)=>catogorymain.category==="Appetizer")
console.log(maincatagory); 
const newword=menuItems.filter((wordnew)=>wordnew.category==="Margrita")
console.log(newword);
