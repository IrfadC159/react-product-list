// Import all images
import samsung from "../assets/MobilePhones/samsung.jpeg";
import iphone from "../assets/MobilePhones/iphone.jpeg";
import oneplus from "../assets/MobilePhones/oneplus.jpeg";
import xiaomi from "../assets/MobilePhones/xiaomi.jpeg";
import realme from "../assets/MobilePhones/realme.jpeg";
import redme from "../assets/MobilePhones/redme.jpeg";

// Data array
const MobilePhones = [
  {
    id: 1,
    model: "Samsung Galaxy S23",
    description: "Flagship phone with excellent performance",
    price: 75000,
    image: samsung,
    qty: 2,
  },
  {
    id: 2,
    model: "iPhone 14",
    description: "Premium phone with top-notch camera",
    price: 120000,
    image: iphone,
    qty: 1,
  },
  {
    id: 3,
    model: "OnePlus 11",
    description: "Smooth performance with fast charging",
    price: 58000,
    image: oneplus,
    qty: 1,
  },
  {
    id: 4,
    model: "Xiaomi Redmi Note 12",
    description: "Value-for-money smartphone",
    price: 18000,
    image: xiaomi,
    qty: 1,
  },
  {
    id: 5,
    model: "realme V27 Pro",
    description: "Stylish phone with great selfie camera",
    price: 32000,
    image: realme,
    qty: 1,
  },
  {
    id: 6,
    model: "redme Reno8",
    description: "Sleek design with good low-light photography",
    price: 35000,
    image: redme,
    qty: 1,
  },
];

export default MobilePhones;
