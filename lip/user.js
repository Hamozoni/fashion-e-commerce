import {db} from "./db";

export const findUserByEmail = async (email) => {

    try {
        const user = await db.user.findUnique({where: {email}})
        return user
    }catch {
        return null
    }
    finally {
        await db.$disconnect()
    }
}

export const findUserById = async (id) => {
    
    try {
        const user = await db.user.findUnique({where: {id}})
        return user
    }catch {
        return null
    }
    finally {
        await db.$disconnect()
    }
}

export const findUserAddressByEmail = async (email) => {
    
    try {
        const address = await db.userAddress.findUnique({where: {email}})
        return address
    }catch {
        return null
    }
    finally {
        await db.$disconnect()
    }
}

