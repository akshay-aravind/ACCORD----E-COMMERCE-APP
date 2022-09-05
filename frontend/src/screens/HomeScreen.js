import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const { keyword } = useParams()

  // const { pageNumber } = useParams() || 1

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  console.log(products)
  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  return (
    <>
      {!keyword && <ProductCarousel />}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <br></br>
          <h1>Latest Products</h1>
          <div className='products'>
            {products.slice(0, 10).map((product) => (
              <div
                key={product._id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className='cards'
              >
                <Product product={product} />
              </div>
            ))}
            <span className='my-5 p-5'>
              Not the end.
              <br></br>
              <Link to='/productpage' className='btn btn-dark'>
                View All
              </Link>
            </span>
          </div>

          <h1>Iphone</h1>
          <div className='products' id='samsung'>
            {products
              .filter((pro) => pro.brand === 'Apple')
              .map((product) => (
                <div
                  key={product._id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className='cards'
                >
                  <Product product={product} />
                </div>
              ))}
          </div>

          <h1>Samsung Foldables</h1>
          <div className='products' id='samsung'>
            {products
              .filter((pro) => pro.brand === 'SamsungF')
              .map((product) => (
                <div
                  key={product._id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className='cards'
                >
                  <Product product={product} />
                </div>
              ))}
          </div>

          <h1>Samsung Galaxy S Series</h1>
          <div className='products' id='samsung'>
            {products
              .filter((pro) => pro.brand === 'SamsungS')
              .map((product) => (
                <div
                  key={product._id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className='cards'
                >
                  <Product product={product} />
                </div>
              ))}
          </div>
        </>
      )}
    </>
  )
}

export default HomeScreen
