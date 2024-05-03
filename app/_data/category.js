import men from "../../public/categories/men/men.webp";
import women from "../../public/categories/women/women.jpg";
import kids from "../../public/categories/kids/kids.jpg";

import men_shirts from "../../public/categories/men/men_shirts.jpg";
import men_t_shirts from "../../public/categories/men/men_t-shirts.webp";
import men_accessories from "../../public/categories/men/menAccessories.webp";
import men_activewear from "../../public/categories/men/menActivewear.jpg";
import men_bagsWallets from "../../public/categories/men/menBagsWallets.webp";
import men_cardigansSweaters from "../../public/categories/men/menCardigansSweaters.jpg";
import men_coatsJackets from "../../public/categories/men/menCoatsJackets.jpg";
import men_hoodiesSweatshirts from "../../public/categories/men/menHoodiesSweatshirts.webp";
import men_innerwear from "../../public/categories/men/menInnerwear.jpg";
import men_jeansTrousers from "../../public/categories/men/menJeansTrousers.jpg";
import men_nightwear from "../../public/categories/men/menNightwear.jpg";
import men_shoes from "../../public/categories/men/menShoes.webp";

import women_shoes from "../../public/categories/women/womenShoes.jpg";
import women_accessories from "../../public/categories/women/womenAccessories.webp";
import women_activewear from "../../public/categories/women/womenActivewear.jpg";
import women_bagsWallets from "../../public/categories/women/womenBagsWallets.webp";
import women_beautyPerfumes from "../../public/categories/women/womenBeautyPerfumes.jpg";
import women_cardigansSweaters from "../../public/categories/women/womenCardigansSweaters.jpg";
import women_dressesJumpsuits from "../../public/categories/women/womenDressesJumpsuits.jpg";
import women_hoodiesSweatshirts from "../../public/categories/women/womenHoodiesSweatshirts.avif";
import women_jackets from "../../public/categories/women/womenJackets.jpg";
import women_jeansJeggings from "../../public/categories/women/womenJeansJeggings.jpg";
import women_leggings from "../../public/categories/women/womenLeggings.jpg";
import women_lingerie from "../../public/categories/women/womenLingerie.webp";
import women_maternity from "../../public/categories/women/womenMaternity.webp";
import women_nightwear from "../../public/categories/women/womenNightwear.jpg";
import women_pantsTrousers from "../../public/categories/women/womenPantsTrousers.avif";
import women_plusSize from "../../public/categories/women/womenPlusSize.avif";
import women_topsTees from "../../public/categories/women/womenTopsTees.jpg";
import women_skirts from "../../public/categories/women/womenSkirts.jpg";

export default categoriesData = [
    {
        name : "men",
        image: men,
        subName : [
            {
                name: "T-Shirts", 
                image: men_t_shirts

            },
            {
                name:  "Shirts",
                image: men_shirts 
            },
            {
                name: "Jeans & Trousers",
                image: men_jeansTrousers 
            },
            {
                name:  "Activewear",
                image: men_activewear
            },
            {
                name:  "Cardigans & Sweaters",
                image: men_cardigansSweaters
            },
            {
                name:  "Hoodies & Sweatshirts",
                image: men_hoodiesSweatshirts
            },
            {
                name: "Coats & Jackets",
                image: men_coatsJackets
            },
            {
                name:  "Nightwear",
                image: men_nightwear
            },
            {
                name:  "Innerwear",
                image: men_innerwear
            },
            {
                name:  "Accessories",
                image: men_accessories
            }, 
            {
                name:   "Shoes",
                image: men_shoes
            },           
            {         
                name:  "Bags & Wallets",
                image: men_bagsWallets
            }, 
        ]
    },
    {
        name: "women",
        image: women,
         subName : [
            {
                name: "Tops & Tees",
                image: women_topsTees
            },
            {
                name: "Dresses & Jumpsuits",
                image: women_dressesJumpsuits
            },
            {
                name: "Jeans & Jeggings",
                image: women_jeansJeggings
            },
            {
                name:  "Pants & Trousers",
                image: women_pantsTrousers
            },
            {
                name:   "Leggings",
                image: women_leggings
            },
            {
                name:  "Skirts",
                image: women_skirts
            },
            {
                name:"Cardigans & Sweaters",
                image: women_cardigansSweaters
            },
            {
                name:"Hoodies & Sweatshirts",
                image: women_hoodiesSweatshirts
            },
            {
                name: "Activewear",
                image: women_activewear
            },
            {
                name: "Jackets",
                image: women_jackets
            },
            {
                name: "Lingerie",
                image: women_lingerie
            },
            {
                name: "Nightwear",
                image: women_nightwear
            },
            {
                name:  "Plus Size",
                image: women_plusSize
            },
            {
                name:  "Maternity",
                image: women_maternity
            },
            {
                name: "Shoes",
                image: women_shoes
            },
            {
                name:  "Bags & Wallets",
                image: women_bagsWallets
            },
            {
                name:  "Accessories",
                image: women_accessories
            },
            {
                name:  "Beauty & Perfumes",
                image: women_beautyPerfumes
            },
           
         ]
    },
    {
        name : "kids",
        image: kids,
        subName : [
            "Tops",
            "Dresses",
            "Bottoms",
            "Clothing sets",
            "Nightwear",
            "Rompers & Jumpsuits",
            "Sweaters & Cardigans",
            "Hoodies & Sweatshirts",
            "Coats & Jackets",
            "Shoes",
            "Accessories"
        ]
    }
]