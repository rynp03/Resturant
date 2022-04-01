import { nanoid } from "nanoid";
import Noodles from "./assets/noodles.jpeg";
import Frankie from "./assets/frankie.webp";
import Roti from "./assets/garlicnaan.jpeg";
import Kulcha from "./assets/alookulcha.jpeg";
import Paneer from "./assets/paneertikka.jpeg";
import Pizza from "./assets/pizza.jpeg";
import Soups from "./assets/soups.webp";
import Deserts from "./assets/deserts.jpeg";

const MenuData = [
  {
    id: nanoid(),
    name: "Noodles",
    types:
      "Veg Noodles, Egg Noodles, Italian Noddles, Mexican Noodles, Chicken Noodles, Chinese Noodles",
    price: "250",
    time: "5-10 mins",
    rating: "⭐️⭐️⭐️⭐️",
    photo: Noodles,
  },

  {
    id: nanoid(),
    name: "Frankie",
    types:
      "Veg Frankie, Cheese Frankie, Mexican Frankie, Italian Frankie, Chinese Frankie",
    price: "150",
    time: "10-15 mins",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    photo: Frankie,
  },

  {
    id: nanoid(),
    name: "Roti",
    types:
      "Roti, Butter Roti, Rumali Roti, Tandoori Roti, Garlic Naan, Cheese Naan",
    price: "30",
    time: "10 mins",
    rating: "⭐️⭐️⭐️⭐️",
    photo: Roti,
  },

  {
    id: nanoid(),
    name: "Kulcha",
    types:
      "Aloo Kulcha, Shahi Kulcha, Paneer Kulcha, Butter Kulcha, Desi Ghee Kulcha",
    price: "160",
    time: "10-15 mins",
    rating: "⭐️⭐️⭐️⭐️",
    photo: Kulcha,
  },

  {
    id: nanoid(),
    name: "Paneer Dishes",
    types:
      "Paneer Tikka Masala, Paneer Butter Masala, Paneer Angara, Paneer Handi",
    price: "200",
    time: "12 mins",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    photo: Paneer,
  },

  {
    id: nanoid(),
    name: "Pizza",
    types:
      "Margerita Pizza, Paneer Pizza, Corn Pizza, Thin Crust Pizza, BBQ Paneer Pizza",
    price: "600",
    time: "20 mins",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    photo: Pizza,
  },

  {
    id: nanoid(),
    name: "Starters",
    types: "Chinese Soups, Sizzler, Veg. Soup, Sweet Corn Soup, Noodle Soup",
    price: "100",
    time: "5-8 mins",
    rating: "⭐️⭐️⭐️⭐️",
    photo: Soups,
  },

  {
    id: nanoid(),
    name: "Deserts",
    types: "Brownie with Icrecream, Lava Icecream, Coconut Kheer, Lemon Tart",
    price: "300",
    time: "8-10 mins",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    photo: Deserts,
  },
];

export default MenuData;
