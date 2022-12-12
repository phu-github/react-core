import axiosClient from "./axiosClient";

const usertApi = {
    getAll: (params) => {
        const url = '/user';
        return axiosClient.get(url, {params});
    },

    get: (id) =>{
        const url = `/user/${id}`;
        return axiosClient.get(url);
    }

}

export default usertApi;