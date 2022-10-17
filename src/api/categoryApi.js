import axiosClient from "./axiosClient";

const categorytApi = {
    getAll: (params) => {
        const url = '/category';
        return axiosClient.get(url, {params});
    },

    get: (id) =>{
        const url = `/category/${id}`;
        return axiosClient.get(url);
    }

}

export default categorytApi;