import React from 'react';
import Chatingbox from './Chatingbox';
import { useParams } from 'react-router-dom';

import { chats } from '../Whatsappchat/Data'; // Importing chats as a named export

const Chatingbox2 = () => {
    const { productId } = useParams();
    const product = chats.find((e) => e.id === Number(productId));
    return (
        <div>
            {product ? <Chatingbox product={product} /> : <p>Product not found</p>}
        </div>
    );
}

export default Chatingbox2;
