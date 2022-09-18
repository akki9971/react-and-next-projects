import './custom.css';
import React, { useEffect, useState } from 'react'
import { FetchProducts } from '../Services/FetchProducts'
import { BannerSlider } from './main'
import { AllProducts } from './main/AllProducts'

export const Home = ({ onViewDetailClick,onAddToCartClick }) => {
  const [products, setProducts] = useState()
  const [IsSpinning, setisSpinning] = useState(true)

  useEffect(() => {
    FetchProducts().then((Items) => {
      // console.log('items ', Items);
      setProducts(Items.data);
      setisSpinning(false)
    })

  }, [])
  return (
    <>
      {IsSpinning && <h1 className="text-center">Loading ...</h1>}
      {
        IsSpinning || <>
          <BannerSlider />
          <AllProducts products={products}  onViewDetailClick={onViewDetailClick} onAddToCartClick={onAddToCartClick}/>
        </>
      }
    </>
  )
}
