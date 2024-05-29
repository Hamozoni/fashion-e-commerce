import {loginSchema} from "../validationSchemas/authSchemas";
import {findUserByEail} from "../data/user";

// import bcrypt from "bcrypt"

export const loginAction = async(formData)=> {

    const data = Object.fromEntries(formData.entries())

    const DataValidation = loginSchema.safeParse(data);

    if(DataValidation.success) {
        const {email,password} = data;

        const existingUser = findUserByEail(email);

        if(existingUser) {


        }
    }else if(DataValidation.error) {
        return {error: JSON.parse(DataValidation.error) }

    }

    return {secces: 'loged in'}

}