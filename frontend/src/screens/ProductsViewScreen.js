import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductsViewScreen = () => {
  const dispatch = useDispatch()

  const { keyword } = useParams()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  return (
    <>
      {!keyword}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Link to='/' className='btn btn-primary'>
            Go back
          </Link>
          <Row>
            {products.map((product) => (
              <Col
                key={product._id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className='align-items-stretch d-flex'
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default ProductsViewScreen
