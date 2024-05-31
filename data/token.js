import {findVerificationTokenByEmail} from "./user";
import {v4 as uuid} from "uuid";
import {db} from "../lip/db";

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