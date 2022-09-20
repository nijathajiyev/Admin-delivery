import { AxiosMockRequest, MockCreated } from "../mocks";
import Data from '../mocks/catagory/catagory.json'



MockCreated.onGet("/catagory").reply(200, {
    catagory: Data
  });

  MockCreated.onPost("/catagory").reply(function (config) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([201, { message: "success" }]);
  
        // reject() reason will be passed as-is.
        // Use HTTP error status code to simulate server failure.
  
      }, 1000);
    });
  });

  export  const catagoryApi = AxiosMockRequest.get('catagory')
  export const catagoryPostApi =(item)=> AxiosMockRequest.post('/catagory',item)