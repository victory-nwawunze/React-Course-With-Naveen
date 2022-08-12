/** @format */

import React from "react";
import { useState } from "react";

const ShopingCart = () => {
  const [state, setState] = useState({
    products: [
      {
        sno: "AA001",
        name: "Adex cloth",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&w=1000&q=80",
        price: 10,
        qty: 2,
      },
      {
        sno: "AA002",
        name: "Gucci cloth",
        image:
          "https://image.shutterstock.com/image-photo/children-clothes-hanging-on-hangers-260nw-455876137.jpg",
        price: 30,
        qty: 10,
      },
      {
        sno: "AA003",
        name: "Lebron cloth",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&w=1000&q=80",
        price: 40,
        qty: 19,
      },
      {
        sno: "AA004",
        name: "Cutlist cloth",
        image:
          "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        price: 10,
        qty: 2,
      },
      {
        sno: "AA001",
        name: "Mikelobian cloth",
        image:
          "https://media.istockphoto.com/photos/selection-of-multicolored-shirts-picture-id157532000?k=20&m=157532000&s=612x612&w=0&h=uvLW1W1eHXTac7XCNwDctS3Nz7ohCUQ4YbamtsnCxyI=",
        price: 220,
        qty: 400,
      },
    ],
  });
  let { products } = state;
  const Increement = (productId) => {
    let items = products.map((product) => {
      if (product.sno === productId) {
        return {
          ...product,
          qty: product.qty + 1,
        };
      }
      return product;
    });
    setState((state) => ({
      products: [...items],
    }));
  };
  const Decreement = (productId) => {
    let items = products.map((product) => {
      if (product.sno === productId) {
        return {
          ...product,
          qty: product.qty - 1 > 0 ? product.qty - 1 : 1,
        };
      }
      return product;
    });
    setState((state) => ({
      products: [...items],
    }));
  };
  const TotalAmount = () => {
    let total = 0;
    for (let product of products) {
      total += product.price * product.qty;
    }
    return total;
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="text-success h3">Shoping Cart</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laboriosam aliquam veritatis nulla aliquid ut iste
              explicabo aspernatur sapiente ad repudiandae autem alias, sit
              laborum, dolorem in ea optio repellat!
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <table class="table table-striped text-center">
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
                {products.map((product) => {
                  return (
                    <tr>
                      <th scope="row">{product.sno}</th>
                      <td>
                        <img src={product.image} width={50} height={50} />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price.toFixed(2)}</td>
                      <td>
                        <i
                          onClick={() => Decreement(product.sno)}
                          className="fa fa-minus-square mx-2"
                        />
                        {product.qty}
                        <i
                          onClick={() => Increement(product.sno)}
                          className="fa fa-plus-square mx-2"
                        />
                      </td>
                      <td>{(product.price * product.qty).toFixed(2)}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={4}></td>
                  <td>GrandTotal:</td>
                  <td>{TotalAmount()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopingCart;
