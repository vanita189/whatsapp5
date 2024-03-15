import React from 'react';
import { useParams } from 'react-router-dom';
import Chatingbox from './Chatingbox';
import {chats} from '../Whatsappchat/Data'
const Product = () => {
  const { productId } = useParams();
  const product = chats.find((e) => e.id === Number(productId));

  return (
    <div>
      {product ? <Chatingbox product={product} /> : <p>Product not found</p>}
    </div>
  );
}

export default Product;