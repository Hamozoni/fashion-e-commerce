import { NextResponse } from 'next/server';
import { db } from  "@/lip/db";
import {ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage';
import { storage } from '@/lip/firebase';

export async function POST (request) {

    const formData  = await request.formData();

    const data = Object.fromEntries(formData.entries());
    const colors = JSON.parse(data.colors);
    const sizes = JSON.parse(data.sizes);
    const specifications = JSON.parse(data.specifications);
    const details = JSON.parse(data.details);

    try {
        const existProduct = await db.product.findUnique({where : {
            serialNumber : details?.serialNumber
        }});
    
        if(!!existProduct){
            return  NextResponse.json("Error the products already added before try another product", { status: 400 })
        }

    }
    catch (error) {
        return  NextResponse.json("opss! something went wrong", { status: 500 })
    }
    finally {
        await db.$disconnect()
     };

//loading product images in public folder

        let images = [];

        const firebaseURL = 'https://firebasestorage.googleapis.com/v0/b/e-commrerce.appspot.com/o/'

        for(let index = 0;index < colors?.length; index++){
            const imageFiles = formData.getAll(`images_${index}`);

            for(let i = 0; i < imageFiles?.length; i++){

                const storageRef = ref(storage,`images/products/${imageFiles[i]?.name}`);
                const snapshot = await uploadBytesResumable(storageRef,imageFiles[i]);
                const imagePath = await getDownloadURL(snapshot.ref);

                images.push({imagePath: imagePath.replace(firebaseURL,''),colorName: colors[index]?.colorName});

                if(index === 0 && i === 0) {
                    details.imagePath = imagePath.replace(firebaseURL,'');
                };

            }
        };

        try {

            const product = await db.product.create({
                  data : {
                      ...details,
                      specifications : {
                          create :specifications
                      },
                      sizes : {
                       create : [...sizes]
                      },
                      colors: {
                         create : [...colors]
                      },
                      images: {
                       create : [...images]
                      }
                  }});
              return NextResponse.json({product},{status: 200});
        }
        catch (error){
           return NextResponse.json("something went wrong", { status: 500 })
        }
        finally {
           await db.$disconnect()
        };

};