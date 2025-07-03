import img1 from "./../../assets/m7.jpeg"
import img2 from "./../../assets/m8.jpeg"
import img3 from "./../../assets/m3.jpeg"
import img4 from "./../../assets/m4.jpeg"
import img5 from "./../../assets/m2.jpeg"
import img6 from "./../../assets/m6.jpeg"
const MenuData = [
    {id: 1,
    title: "Pancake",
    description: "Pancake is a savory dish of Italian origin",
    detailedDescription: "Pancake is a savory dish of Italian origin, made with flour, eggs, and milk, cooked on a griddle or frying pan. It is often served with syrup, butter, or fruit.",
    price:"500",
    discountedPrice:"350",
    rating: 4,
    image:img1,
    onClick:()=>alert('Item added to card')
},
    {id: 2,
    title: "Pasta",
    detailedDescription: "Pasta is a savory dish of western origin, made with wheat flour and water, formed into various shapes and cooked in boiling water.",
    description: "pasta is a savory dish of western origin",
    price:600,
    discountedPrice:470,
    rating: 3.5,
    image:img2
},
    {id: 3,
    title: "Naan",
    detailedDescription: "Naan is a savory dish of Indian origin, made with flour, water, and yeast, cooked in a tandoor oven. It is often served with curries or other Indian dishes.",
    description: "Naan is a savory dish of Indian origin",
    price:100,
    discountedPrice:70,
    rating: 4,
    image:img3
},
    {id: 4,
    title: "Beef Steak",
    detailedDescription: "Beef Steak is a savory dish of American origin, made with beef cut from the animal's muscle, typically grilled or pan-fried. It is often served with sides like potatoes or vegetables.",
    description: "Beef Steak is a savory dish of American origin",
    price:1000,
    discountedPrice:800,
    rating: 5,
    image:img4
},
    {id: 5,
    title: "Chettinad Fish",
    detailedDescription: "Chettinad Fish is a savory dish of Indian origin, made with fish marinated in a blend of spices and cooked in a spicy gravy. It is often served with rice or roti.",
    description: "Chettinad Fish is a savory dish of Indian origin",
    price:1000,
    discountedPrice:800,
    rating: 5,
    image:img5
},
    {id: 6,
    title: "Pastry",
    detailedDescription: "Pastry is a savory dish of American origin, made with a flaky dough filled with sweet or savory ingredients, baked until golden brown. It is often served as a dessert or snack.",
    description: "Pastry is a savory dish of American origin",
    price:1000,
    discountedPrice:800,
    rating: 5,
    image:img6
}
];
 export default MenuData;
    
    
    