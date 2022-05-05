import React from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
const Inventory = () => {
    const {id} = useParams();
    const [items] = useInventory();
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default Inventory;