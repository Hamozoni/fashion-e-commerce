import {db} from "./db";

export const findUserByEmail = async (email) => {

    try {
        const user = await db.user.findUnique({where: {email}})
        return user
    }catch {
        return null
    }
}

export const findUserById = async (id) => {
    
    try {
        const user = await db.user.findUnique({where: {id}})
        return user
    }catch {
        return null
    }
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