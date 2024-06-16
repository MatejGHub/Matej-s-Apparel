import { Products } from "../../components/Products";
import "./Shop.css";

interface Product {
  id: number;
  productName: string;
  productPrice: number;
  productImage: string;
}

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1 className="text-center my-5 fw-bold display-6">Matej's Apparel</h1>{" "}
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9 col-md-9 col-sm-12">
          <div className="row products">
            {Products().map((product: Product) => {
              return (
                <div
                  className="product col-lg-4 col-md-6 col-sm-12 g-3"
                  key={product.id}
                >
                  <div className="card">
                    <img
                      className="img-fluid p-2 rounded-4"
                      src={product.productImage}
                      alt={product.productName}
                    />
                    <div className="card-body">
                      <h3>{product.productName}</h3>
                      <p>${product.productPrice}</p>
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
