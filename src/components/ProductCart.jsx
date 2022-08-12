/** @format */

import React, { useState } from "react";

const ProductCart = () => {
  const [state, setState] = useState({
    products: [
      {
        sno: "AAOO1",
        image:
          "https://cdn.shopify.com/s/files/1/0997/6284/products/Side04_grande.png?v=1655378358",
        name: "DA Vin Watch",
        price: 19000,
        qty: 25,
      },
      {
        sno: "AAOO2",
        image:
          "data:image/jpeg;base64,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",
        name: "SamSung Watch",
        price: 1200,
        qty: 15,
      },
      {
        sno: "AAOO3",
        image:
          "https://media.istockphoto.com/photos/watch-picture-id471712723?k=20&m=471712723&s=612x612&w=0&h=0KCGIGUbondcwPRxjsKDXVKVj-AWYvEqftYQKvLvdw4=",
        name: "Apple Watch",
        price: 2000,
        qty: 2,
      },
      {
        sno: "AAOO4",
        image:
          "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?k=20&m=1180244659&s=612x612&w=0&h=kC3xPwi_AXqWqapmeVro6GhvQ2wcslD6WMgzdJbqZjE=",
        name: "Oppo Watch",
        price: 16000,
        qty: 0,
      },
      {
        sno: "AAOO5",
        image: "https://m.media-amazon.com/images/I/61WixzlVuXL._UL1280_.jpg",
        name: "LG Watch",
        price: 9000,
        qty: 12,
      },
    ],
  });
  let { products } = state;
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="text-success h3">Product Cart</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta
              nisi cumque fugiat repellendus possimus porro quisquam quis saepe,
              neque doloremque deleniti sit similique ipsa amet omnis. Possimus,
              dolorum voluptates!
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            {products.map((product) => {
              return (
                <div className="card shadow-lg mt-3" key={product.sno}>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <h5 className="display-4">{product.name}</h5>
                        <h5 className="display-6">
                          $ {product.price.toFixed(2)}
                        </h5>
                        <h5 className="text-success">
                          {product.qty >= 10 && <span>Available</span>}
                          {product.qty <= 10 && product.qty >= 1 && (
                            <span className="text-warning">
                              Almost Out Of Stock
                            </span>
                          )}
                          {product.qty === 0 && (
                            <span className="text-danger">Out Of Stock</span>
                          )}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCart;
