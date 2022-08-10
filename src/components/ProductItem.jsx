/** @format */
import React, { useState } from "react";

const ProductItem = () => {
  let [state, setState] = useState({
    product: {
      sno: "AAOO1",
      image:
        "https://cdn.shopify.com/s/files/1/0997/6284/products/Side04_grande.png?v=1655378358",
      name: "DA Vin Watch",
      price: 19000,
      qty: 2,
    },
  });
  let { product } = state;
  const Incrmeent = () => {
    setState(() => ({
      product: {
        ...state.product,
        qty: state.product.qty + 1,
      },
    }));
  };
  const Decrmeent = () => {
    setState(() => ({
      product: {
        ...state.product,
        qty: state.product.qty - 1 > 0 ? state.product.qty - 1 : 1,
      },
    }));
  };
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(product)}</pre> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">ProductItem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              reprehenderit rem maiores recusandae cum minima amet quos dolorum
              adipisci consequatur accusantium mollitia ullam, repellat
              cupiditate odio? Voluptatibus sed asperiores eum?
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <table class="table table-hover table-striped text-center">
              <thead className="bg-dark text-white">
                <tr>
                  <th scope="col">SNO</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.sno}</td>
                  <td>
                    <img src={product.image} width={50} height={50} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <i
                      onClick={Decrmeent}
                      className="fa fa-minus-square mx-1 fa-1x"
                    />
                    {product.qty}
                    <i
                      onClick={Incrmeent}
                      className="fa fa-plus-square mx-1 fa-1x"
                    />
                  </td>
                  <td>{product.price * product.qty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;
