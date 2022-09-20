import { AxiosMockRequest, MockCreated } from "../mocks";
import axios from "axios"
import Data from '../mocks/offers/offers.json'
MockCreated.onGet("/offers").reply(200, {
    offers: Data
  });


  MockCreated.onPost("/offers").reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([201, { message: "success" }]);
  
        // reject() reason will be passed as-is.
        // Use HTTP error status code to simulate server failure.
  
      }, 1000);
    });
  });

  export  const offersApi = AxiosMockRequest.get('offers')
  export const offersPostApi =(item)=> AxiosMockRequest.post('/offers',item)