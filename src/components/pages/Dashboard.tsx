import React, { FC, useState, useEffect } from 'react';
import productApi from '../../api/productApi';

interface DashboardProps {
    title?: string;
}

const Dashboard: FC<DashboardProps> = ({ title }) => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                debugger
                const params = { _page: 1, _limit: 10 };
                const response = await productApi.getAll(params);
                console.log('Fetch products successfully: ', response);
                setProductList(response.data);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchProductList();
    }, []);

    console.log("########productList########## ", productList )

    return (
        <>
            <h1>Dashboard</h1>
        </>
    );
};

export default Dashboard;