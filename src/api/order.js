import { AxiosMockRequest, MockCreated } from "../mocks";
import Data from '../mocks/orders/orders.json'
MockCreated.onGet("/orders", ).reply(200, {
  orders: Data
      
  });
  MockCreated.onPost("/orders").reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([201, { message: "success" }]);
  
        // reject() reason will be passed as-is.
        // Use HTTP error status code to simulate server failure.
  
      }, 1000);
    });
  });

  export const ordersApi = AxiosMockRequest.get('/orders')
  export const ordersPostApi =(item)=> AxiosMockRequest.post('/orders',item)