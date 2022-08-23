import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {
  Col,
  Row,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = () => {
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
const { loading, error, product } = productDetails
  const { id } = useParams()

  useEffect(() => {
    dispatch(listProductDetails(id))
  },[dispatch,id])

  
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
      <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroupItem>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            ></Rating>
          </ListGroupItem>
          <ListGroupItem>Price : {product.price} rs</ListGroupItem>
          <ListGroupItem>Description : {product.description}</ListGroupItem>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>{product.price} rs</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                className='btn-block'
                type='button'
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
      )}
    </>
  )
}

export default ProductScreen
