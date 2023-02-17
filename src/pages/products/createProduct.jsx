import './createProduct.scss'


const CreateProduct=()=>{
  return (
    <div className="createProduct">
    <div className="createProdContainer">
      <h3>New Product</h3>
      <form className="createProdForm">
        <div className="formItem">
          <label htmlFor="title">Title</label>
          <input type="text" />
        </div>
        <div className="formItem">
          <label htmlFor="price">Price</label>
          <input type="number" />
        </div>                        
        <div className="formItem">
          <label htmlFor="status">Status</label>
          <select name="status" >
            <option value="null" disabled>...select</option>
            <option value="true">activate</option>
            <option value="true">Desactivate</option>
          </select>
        </div>
        <div className="formItem">
          <button className="submitBtn" >Save</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default CreateProduct