
import PRODUCTS from '../data.js'

const Products = () => {
  return (
    <main>
      
      

      <div className="container content">
        <div className="row products-row">
          {PRODUCTS.map( (product) => {
            return (
              <div className="col-lg-4" key={product.id}>
                
                <div className="card">
                  <div className="img-wrap">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.details}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Price: <strong className="price">{product.price}</strong></span>
                      <span>item code:<strong className="price">{product.code}</strong></span>
                     
                    </div>
                  </div>
                </div>

              </div>
            )
          } )}
        </div>
      </div>

    </main>
  )
}

export default Products