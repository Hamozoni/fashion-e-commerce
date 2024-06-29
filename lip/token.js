
import {v4 as uuid} from "uuid";
import {db} from "./db";


export const findVerificationTokenByEmail = async (email)=> {

    try{
        const verification = await db.verificationToken.findFirst({
            where: {email}
        })

        return verification

    }catch{
        return null
    }
    finally {
        await db.$disconnect()
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
    finally {
        await db.$disconnect()
    }

}

export const generateVerificationToken = async(email)=> {

    const token = uuid();
    const expires = new Date(new Date().getTime() + 3600 * 1000 );

    const exitingToken = await findVerificationTokenByEmail(email);

    if(exitingToken){
        await db.verificationToken.delete({where: {id: exitingToken.id}})
    }

    try{
        const verificationToken = await db.verificationToken.create({
            data: {
                token,
                email,
                expires
            }
        });
    
        return verificationToken;

    }catch {
        return null;
    }
    finally {
        await db.$disconnect()
    }


};


export const findResetPasswordTokenByEmail = async (email)=> {

    try{

        const resetPassword = await db.resetPasswordToken.findFirst({where: {
            email
        }});

        return resetPassword

    }
    catch{
        return null;
    }
    finally {
        await db.$disconnect()
    }

};

export const findResetPasswordTokenByToken = async(token)=> {

    try{

        const resetPassword = await db.resetPasswordToken.findFirst({where: {
            token
        }});

        return resetPassword

    }
    catch{
        return null;
    }
    finally {
        await db.$disconnect()
    }

};

export const generateResetPasswordToken = async (email)=> {

    const token = uuid();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const exitingToken = await findResetPasswordTokenByEmail(email);

    if(exitingToken) {
        await db.resetPasswordToken.delete({where: {id: exitingToken.id}})
    }

    try{
        const resetToken = await db.resetPasswordToken.create({
            data: {
                token,
                email,
                expires
            }
        });

        return resetToken;
    }catch {
        return null
    }
    finally {
        await db.$disconnect()
    }

}