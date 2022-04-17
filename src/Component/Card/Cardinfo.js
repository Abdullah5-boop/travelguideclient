import React, { useEffect, useState } from 'react';
import CardView from './CardView';

const Cardinfo = () => {
  const [product,setproduct]=useState([]);
  useEffect(()=>{
    fetch('Data.json')
    .then(res=>res.json())
    .then(data=>setproduct(data))
  },[])
    return (
      <div className='d-flex justify-content-center '>
          <div className=' d-flex justify-content-center text-center row container  '>
          {
            product.map(data=><CardView key={data.id} Data={data}></CardView>)
          }
        </div>
      </div>
    );
};

export default Cardinfo;