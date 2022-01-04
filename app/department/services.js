const DepartmentMaster = require('./model')
const logTag = `User-Service`

const createUser = (userBody) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(`${logTag} | createUser | userBody => ${JSON.stringify(userBody)}`)
            const userResp = await DepartmentMaster.create(userBody);
            resolve(userResp)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
};

const findSingleUsers = (findUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(`${logTag} | findSingleUsers | findUser => ${JSON.stringify(findUser)}`)
            const userResp = await DepartmentMaster.findOne(findUser);
            resolve(userResp)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const findUsers = (userQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(`${logTag} | findUsers | findUser ==> ${JSON.stringify(userQuery)}`)
            const userResp = await DepartmentMaster.find(userQuery);
            resolve(userResp)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const updateUserById = (userBody) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(`${logTag} | updateUserById | userBody => ${JSON.stringify(userBody)}`)
            const userResp = await DepartmentMaster.findOneAndUpdate({ _id: userBody.id }, userBody, { new: true })
            resolve(userResp)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(`${logTag} | deleteUser | userId => ${JSON.stringify(userId)}`)
            const userResp = await DepartmentMaster.findByIdAndDelete({ _id: userId })
            resolve(userResp)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}


module.exports = { createUser, findSingleUsers, findUsers, updateUserById, deleteUser }
