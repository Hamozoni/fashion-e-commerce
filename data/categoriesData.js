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


const man_women_sizes = [
    {
        id: 1,
        name: 'small',
        shortName: 'S',
        quantity: 0
    },
    {
        id: 2,
        name: 'medium',
        shortName: 'M',
        quantity: 0
    },
    {
        id: 3,
        name: 'large',
        shortName: 'L',
        quantity: 0
    },
    {
        id: 4,
        name: 'X large',
        shortName: 'XL',
        quantity: 0
    },
    {
        id: 5,
        name: 'XX large',
        shortName: '2XL',
        quantity: 0
    },
    {
        id: 6,
        name: 'XXX large',
        shortName: '3XL',
        quantity: 0
    }
];

const kids_sizes = [
    {
        id: 1,
        name: '1 to 2 years',
        shortName: '1-2Y',
        quantity: 0
    },
    {
        id: 2,
        name: '2 to 3 years',
        shortName: '2-3Y',
        quantity: 0
    },
    {
        id: 3,
        name: '3 to 5 years',
        shortName: '3-5Y',
        quantity: 0
    },
    {
        id: 4,
        name: '5 to 7 years',
        shortName: '5-7Y',
        quantity: 0
    },
    {
        id: 5,
        name: '7 to 10 years',
        shortName: '7-10Y',
        quantity: 0
    },
    {
        id: 6,
        name: '10 to 14 years',
        shortName: '10-14Y',
        quantity: 0
    }
]



export const categoriesData = [
    {
        id: 1,
        name: 'men',
        imagePath: men,
        dec: 'Lorem Rebum Magna Amet Lorem Magna Erat Diam Stet. Sadips Duo Stet Amet Amet Ndiam Elitr Ipsum',
        linkPath:'/section?category=men',
        sub: [
            {
                id: 1,
                name:'jacket',
                imagePath: menJacket,
                linkPath: '/men?sub=jacket'
            },
            {
                id: 2,
                name:'jeans',
                imagePath: menJeans,
                linkPath: '/men?sub=jeans'
            },
            {
                id: 3,
                name:'nightWear',
                imagePath: menNightWear,
                linkPath: '/men?sub=nightWear'
            },
            {
                id: 4,
                name:'shirt',
                imagePath: menShirt,
                linkPath: '/men?sub=shirt'
            },
            {
                id: 5,
                name:'tShirt',
                imagePath: menTShirt,
                linkPath: '/men?sub=t-shirt'
            },
            {
                id: 6,
                name:'shoes',
                imagePath: menShoes,
                linkPath: '/men?sub=shoes'
            }
        ],
        sizes: man_women_sizes
    },
    {
        id: 2,
        name: 'women',
        imagePath: women,
        dec: 'Lorem Rebum Magna Amet Lorem Magna Erat Diam Stet. Sadips Duo Stet Amet Amet Ndiam Elitr Ipsum',
        linkPath:'/section?category=women',
        sub: [
            {
                id: 1,
                name:'jacket',
                imagePath: womenJacket,
                linkPath: '/section?category=women&sub=jacket'
            },
            {
                id: 2,
                name:'jeans',
                imagePath: womenJeans,
                linkPath: '/section?category=women&sub=jeans'
            },
            {
                id: 3,
                name:'nightWear',
                imagePath: womenNightWear,
                linkPath: '/section?category=women&sub=nightWear'
            },
            {
                id: 4,
                name:'dress',
                imagePath: womenDress,
                linkPath: '/section?category=women&sub=dress'
            },
            {
                id: 5,
                name:'skirt',
                imagePath: womenSkirt,
                linkPath: '/section?category=women&sub=skirt'
            },
            {
                id: 6,
                name:'shoes',
                imagePath: womenShoes,
                linkPath: '/section?category=women&sub=shoes'
            }
        ],
        sizes: man_women_sizes
    },
    {
        id: 3,
        name: 'kids',
        imagePath: kids,
        dec: 'Lorem Rebum Magna Amet Lorem Magna Erat Diam Stet. Sadips Duo Stet Amet Amet Ndiam Elitr Ipsum',
        linkPath:'/section?category=kids',
        sub: [
            {
                id: 1,
                name:'jacket',
                imagePath: kidsJacket,
                linkPath: '/section?categkids&sub=jacket'
            },
            {
                id: 2,
                name:'jeans',
                imagePath: kidsJeans,
                linkPath: '/section?category=kids&sub=jeans'
            },
            {
                id: 3,
                name:'dress',
                imagePath: kidsDress,
                linkPath: '/section?category=kids&sub=dress'
            },
            {
                id: 4,
                name:'t-shirt',
                imagePath: kidsTShirt,
                linkPath: '/section?category=kids&sub=t-shirt'
            },
            {
                id: 5,
                name:'shirt',
                imagePath: kidsShirt,
                linkPath: '/section?category=kids&sub=shirt'
            },
            {
                id: 6,
                name:'shoes',
                imagePath: kidsShoes,
                linkPath: '/section?category=kids&sub=shoes'
            }
        ],
        sizes: kids_sizes
    }
];

