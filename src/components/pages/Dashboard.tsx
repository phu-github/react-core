import React, { FC } from 'react';

interface DashboardProps {
    title?: string;
}

const Dashboard: FC<DashboardProps> = ({ title }) => {
    return (
        <>
            <h1>Dashboard</h1>
        </>
    );
};

export default Dashboard;