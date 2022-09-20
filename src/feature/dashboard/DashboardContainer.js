
import OrdersChart from "./OrdersChart";
import ProductsChart from "./ProductsChart";
 import RestaurantsChart from "./RestaurantsChart";
import Risks from "./Risks";

 function Dashboardcontainer() {
  
  return (
    <div className="container">
       <div className="row d-flex">
         <ProductsChart />
         <RestaurantsChart />
         <Risks/>
         <OrdersChart/>
       </div>
     </div>
  );
}


export default Dashboardcontainer;