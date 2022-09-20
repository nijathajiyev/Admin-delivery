import { AxiosMockRequest, MockCreated } from "../mocks";
import Products from "../mocks/products/product.json";
MockCreated.onGet("/products").reply(function (config) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([200, { Products }]);

      // reject() reason will be passed as-is.
      // Use HTTP error status code to simulate server failure.

    }, 1000);
  });
});

MockCreated.onPost("/products").reply(function (config) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([201, { message:"Success!" }]);

      // reject() reason will be passed as-is.
      // Use HTTP error status code to simulate server failure.

    }, 1000);
  });
});

MockCreated.onDelete("/products").reply(function (config) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([204, { message:"Success!" }]);

      // reject() reason will be passed as-is.
      // Use HTTP error status code to simulate server failure.

    }, 1000);
  });
});


export const productsApi = AxiosMockRequest.get("/products");
export const productsPostApi = (item) =>AxiosMockRequest.post("/products", item);
export const productsDeleteApi = (item) =>AxiosMockRequest.delete("/products", item);
