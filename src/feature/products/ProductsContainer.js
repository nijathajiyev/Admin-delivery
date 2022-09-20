import { ProductHeader } from "./productHeader";
import ProductsCards from "./productsCards";

function ProductsContainer() {
    return ( 
        <div>
         <ProductHeader/>
           <ProductsCards/>
        </div>
     );
}

export default ProductsContainer;