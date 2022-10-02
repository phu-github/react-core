import React, { FC } from 'react';

interface NotFoundProps {
    title?: string;
}

const NotFound: FC<NotFoundProps> = ({ title }) => {
    return (
        <>
            <h1>NotFound</h1>
        </>
    );
};

export default NotFound;