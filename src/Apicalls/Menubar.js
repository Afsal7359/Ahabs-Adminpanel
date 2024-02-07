import instance from "./Axiosinstance";

export const AddMenuss = async(payload)=>{
    try {
        const response = await instance.post('menu/add-menu',payload)
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const GetAllMenus = async()=>{
    try {
        const response = await instance.get('menu/get-menu')
        return response.data;
    } catch (error) {
        return error.response.data
    }
}