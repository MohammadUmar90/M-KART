import product from '../m-kartschema/schemas/product';
import banner from '../m-kartschema/schemas/banner';
import { FooterBanner, HeroBanner, Product } from '../components';
import React from 'react'
import { client } from '../lib/client'

const index = ({product,bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      {console.log(bannerData)}
      <div className='products-heading'>
        <h2>Best Selling HeadPhone</h2>
        <p>Speaker of many variation</p>
      </div>
      <div className='products-container'>
        {product?.map((product)=><Product key={product._id} product={product}/>)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async()=>{
  const query = '*[_type == "product"]';
  const product = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props: {product,bannerData}
  }
}

export default index;