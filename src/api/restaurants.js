
import { AxiosMockRequest, MockCreated } from "../mocks";
import Data from "../mocks/restaurants/restaurants.json"
MockCreated.onGet("/restaurants").reply(200, {
    restaurants: Data
      
  });

  MockCreated.onPost("/restaurants").reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([201, { message: "success" }]);
  
        // reject() reason will be passed as-is.
        // Use HTTP error status code to simulate server failure.
  
      }, 1000);
    });
  });

export const restaurantsApi = AxiosMockRequest.get('/restaurants')
export const restaurantsPostApi =(item)=> AxiosMockRequest.post('/restaurants',item)