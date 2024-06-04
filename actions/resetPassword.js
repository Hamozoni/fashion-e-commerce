"use server";
import { findUserByEmail } from "../lip/user";


export async function resetPasswordAction(formData) {

    const email = formData.get('email')
    

    const existingUser = await findUserByEmail(email);

    if(!existingUser){
        return {error: "email not found"}
    }

    return {success: "email sent"}

}

 