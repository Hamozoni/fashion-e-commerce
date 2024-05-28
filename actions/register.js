"use server";

import { error } from "console";

// import bcrypt from "bcrypt";
// import {db} from "../lip/db";
// import {findUserByEmail} from "../data/user"


export const registerAction =  async (formData)=> {

    // const {name,email,password} = formData;
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    const confirmPassword = formData.get("confirm-password")

    console.log(name,email,password,confirmPassword,formData);

    if(password !== confirmPassword) {
        return {error: "passwords are not matches"}
    }

    // const hassedPassword = await bcrypt.hash(password,10);
    
    // const existingUser = await findUserByEmail(email);

    // if(existingUser) {
    //     return {error: "email is already in use"}
    // }

    // await db.user.create({
    //     data: {
    //         name,
    //         email,
    //         password: hassedPassword
    //     }
    // })

    return {success: "user created !"}
}