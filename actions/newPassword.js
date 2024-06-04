"use server";

import { findResetPasswordTokenByToken } from "../lip/token";
import { findUserByEmail } from "../lip/user";

export const newPasswordAction = async (formData)=> {

    console.log(formData);

    const newPassword = formData.get("new_password");
    const confirmPassword = formData.get("confirm_password");
    const token = formData.get("token");

    const existingToken = await findResetPasswordTokenByToken(token);

    if(!existingToken){
        return {error: 'token is not found'}
    }

    const existingUser = await findUserByEmail(existingToken.email);

    if(!existingUser){
        return {error: "email is not found"}
    }



}