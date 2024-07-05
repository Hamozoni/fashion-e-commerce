// categories images
import men from "../public/categories/category/men.png";
import women from "../public/categories/category/womem.png";
import kids from "../public/categories/category/kids.png";

// sub categories images

// men images
import menJacket from "../public/categories/subCategory/men/jacket.png";
import menJeans from "../public/categories/subCategory/men/jeans.png";
import menNightWear from "../public/categories/subCategory/men/nightwear.png";
import menShirt from "../public/categories/subCategory/men/shirt.png";
import menTShirt from "../public/categories/subCategory/men/t-shirt.png";
import menShoes from "../public/categories/subCategory/men/shoes.png";
// women images
import womenDress from "../public/categories/subCategory/women/dress.png";
import womenJacket from "../public/categories/subCategory/women/jacket.png";
import womenJeans from "../public/categories/subCategory/women/jeans.png";
import womenNightWear from "../public/categories/subCategory/women/nightWear.png";
import womenShoes from "../public/categories/subCategory/women/shoes.png";
import womenSkirt from "../public/categories/subCategory/women/skirt.png";
// kids
import kidsDress from "../public/categories/subCategory/kids/dress.png";
import kidsJacket from "../public/categories/subCategory/kids/jacket.png";
import kidsJeans from "../public/categories/subCategory/kids/jeans.png";
import kidsShirt from "../public/categories/subCategory/kids/shirt.png";
import kidsShoes from "../public/categories/subCategory/kids/shoes.png";
import kidsTShirt from "../public/categories/subCategory/kids/t-shirt.png";


export const categories = [
    {
        id: 1,
        name: 'men',
        imagePath: men,
        dec: 'Lorem Rebum Magna Amet Lorem Magna Erat Diam Stet. Sadips Duo Stet Amet Amet Ndiam Elitr Ipsum',
        linkPath:'/section?category=men',
        sub: [
            {
                name:'jacket',
                imagePath: menJacket,
                linkPath: '/section?category=men&sub=jacket'
            },
            {
                name:'jeans',
                imagePath: menJeans,
                linkPath: '/section?category=men&sub=jeans'
            },
            {
                name:'nightWear',
                imagePath: menNightWear,
                linkPath: '/section?category=men&sub=nightWear'
            },
            {
                name:'shirt',
                imagePath: menShirt,
                linkPath: '/section?category=men&sub=shirt'
            },
            {
                name:'tShirt',
                imagePath: menTShirt,
                linkPath: '/section?category=men?sub=t-shirt'
            },
            {
                name:'shoes',
                imagePath: menShoes,
                linkPath: '/section?category=men&sub=t-shoes'
            }
        ]
    },
    {
        id: 2,
        name: 'women',
        imagePath: women,
        dec: 'Lorem Rebum Magna Amet Lorem Magna Erat Diam Stet. Sadips Duo Stet Amet Amet Ndiam Elitr Ipsum',
        linkPath:'/section?category=women',
        sub: [
            {
                name:'jacket',
                imagePath: womenJacket,
                linkPath: '/section?category=women&sub=jacket'
            },
            {
                name:'jeans',
                imagePath: womenJeans,
                linkPath: '/section?category=women&sub=jeans'
            },
            {
                name:'nightWear',
                imagePath: womenNightWear,
                linkPath: '/section?category=women&sub=nightWear'
            },
            {
                name:'dress',
                imagePath: womenDress,
                linkPath: '/section?category=women&sub=dress'
            },
            {
                name:'skirt',
                imagePath: womenSkirt,
                linkPath: '/section?category=women&sub=skirt'
            },
            {
                name:'shoes',
                imagePath: womenShoes,
                linkPath: '/section?category=women&sub=shoes'
            }
        ]
    },
    {
        id: 3,
        name: 'kids',
        imagePath: kids,
        dec: 'Lorem Rebum Magna Amet Lorem Magna Erat Diam Stet. Sadips Duo Stet Amet Amet Ndiam Elitr Ipsum',
        linkPath:'/section?category=kids',
        sub: [
            {
                name:'jacket',
                imagePath: kidsJacket,
                linkPath: '/section?categkids&sub=jacket'
            },
            {
                name:'jeans',
                imagePath: kidsJeans,
                linkPath: '/section?category=kids&sub=jeans'
            },
            {
                name:'dress',
                imagePath: kidsDress,
                linkPath: '/section?category=kids&sub=dress'
            },
            {
                name:'t-shirt',
                imagePath: kidsTShirt,
                linkPath: '/section?category=kids&sub=t-shirt'
            },
            {
                name:'shirt',
                imagePath: kidsShirt,
                linkPath: '/section?category=kids&sub=shirt'
            },
            {
                name:'shoes',
                imagePath: kidsShoes,
                linkPath: '/section?category=kids&sub=shoes'
            }
        ]
    }
]

