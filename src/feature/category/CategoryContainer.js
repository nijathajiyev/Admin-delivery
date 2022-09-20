import { CatagoryHeading } from "./catagory_heading";
import { CatagoryPagnition } from "./catagory_pagnition";
import { CatagoryTable } from "./catagory_table";

function CategoryContainer() {
    return ( 
        <>
        <CatagoryHeading/>
        <CatagoryTable/>
        <CatagoryPagnition/>
        </>

     );
}

export default CategoryContainer;