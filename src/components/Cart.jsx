import React from 'react'
import {useSelector} from 'react-redux'
const Cart = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    }
    useEffect(() => {
      const getProduct = async () => {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    setLoading(false);
    }
    getProduct();
    }, [])
  return (
   <>
        <div className="col-md-4">
           <img className='objects' src={product.image} alt={product.title} height="200px" width="180px"/> 
        </div>
        <div className="col-md-4">
          <h3>{product.title}</h3>
          <p className="lead fw-bolder">{product.qty} X $ {product.price} = $ {product.qty * product.price}</p>
          <button className='btn btn-outlie-dark' onClick={()=> handleButton(product)}><i className='fa fa-minus'></i></button>
          <button className='btn btn-outlie-dark' onClick={()=> handleButton(product)}><i className='fa fa-plus'></i></button>
        </div>
        </>
  )

export default Cart
