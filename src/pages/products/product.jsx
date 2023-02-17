import './product.scss'
import Chart from '../../components/chart/chart'
import {dataProduct} from '../../data/fakeData'

import React from 'react'

const Product = () => {
  return (
    <div className="product">
      <h3>Product</h3>
      <div className="productTop">        
        <div className="productTopLeft">
          <Chart title="sales performence" data={dataProduct} dataKey="data product" grid />        
        </div>
        <div className="productTopRight">
          <div className="header">
            <img src="https://images.pexels.com/photos/227288/pexels-photo-227288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h3>Chemise</h3>
          </div>
          <div className="body">
            <ul>
              <li><span>id     :</span><span>3456</span></li>  
              <li><span>Sales  :</span><span>3456</span></li>  
              <li><span>Active :</span><span>3456</span></li>
              <li><span>InStock:</span><span>3456</span></li>  
            </ul>            
          </div>
        </div>
      </div>
      <div className="productBottom">
        <h3>Product Edition</h3>
        <form>
          <div className="productBottomLeft">
            <div className="item">
              <label htmlFor="title">the title</label>
              <input type="text" name="title" placeholder="title" />
            </div>
            <div className="item">
              <label htmlFor="price">price</label>
              <input type="number" name="price" placeholder="price" />
            </div>
            <div className="item">
              <label htmlFor="status">status</label>
              <select name="status" id="status" >
                <option value="yes">Activate</option>
                <option value="no">Desactivate</option>
              </select>
            </div>
          </div>
          <div className="productBottomRight">
            <label htmlFor="productImage">
              <img className="productImageUpdate" src="https://images.pexels.com/photos/227288/pexels-photo-227288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </label>
            <input type="file" id="productImage" style={{display:"none"}} />            
            <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product