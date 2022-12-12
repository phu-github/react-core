import React, { FC, useState, useEffect } from 'react';
import { useTranslation, initReactI18next } from "react-i18next";
import productApi from '../../api/productApi';

interface DashboardProps {
    title?: string;
}

const Dashboard: FC<DashboardProps> = ({ title }) => {
    const {t} = useTranslation();

    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const fetchProductList = async () => {
            try {
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
            <h2>{t('Home')}</h2>
            <h1>{t('Dashboard')}</h1>
        </>
    );
};

export default Dashboard;