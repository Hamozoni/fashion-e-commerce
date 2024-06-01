import {findVerificationTokenByEmail} from "./user";
import {v4 as uuid} from "uuid";
import {db} from "./db";

export const generateVerificationToken = async(email)=> {

    const token = uuid();
    const expires = new Date(new Date().getTime() + 3600 * 1000 );

    const exitingToken = await findVerificationTokenByEmail(email);

    if(exitingToken){
        await db.verificationToken.delete({where: {id: exitingToken.id}})
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            token,
            email,
            expires
        }
    });

    return verificationToken;

}


export const findVerificationTokenByEmail = async(email)=> {

    try{
        const verification = await db.verificationToken.findFirst({
            where: {email}
        })

        return verification

    }catch{
        return null
    }

}

export const findVerificationTokenByToken = async(token)=> {

    try{
        const verification = await db.verificationToken.findUnique({
            where: {token}
        })

        return verification

    }catch{
        return null
    }

}