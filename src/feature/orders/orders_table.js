import * as React from "react";
import {Span} from '../orders/orders.styled'
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { ordersApi } from "../../api/order";
import { setOrder } from "../../store/slices/orders/orderSlice";
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'
import TablePagination from "@mui/material/TablePagination";
import styles  from '../orders/order.module.css'


export function OrdersTable(props) {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const state = useSelector(state=>state)
  const dispatch = useDispatch()

  useEffect(() => {
    getOrders()
  },[])
  
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const getOrders = ()=>{
    ordersApi.then(res=>{
      console.log(res)
     
      dispatch(setOrder(res.data.orders))
    }
      ).catch(err=>err)
  }
  return (
    <>
    <TableContainer className={styles.container} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.title} align="center">ID</TableCell>
            <TableCell className={styles.title} align="center">Costumer Id</TableCell>
            <TableCell className={styles.title} align="center">Time</TableCell>
            <TableCell  className={styles.title} align="center">Delivery Address</TableCell>
            <TableCell  className={styles.title} align="center">Amount</TableCell>
            <TableCell  className={styles.title} align="center">Payment method</TableCell>
            <TableCell  className={styles.title} align="center">Contact</TableCell>
            
          </TableRow>
          
        </TableHead>
        <TableBody>
        {
                state.orderSlice.data?.map((item, index)=>(
                  <TableRow key={index}>
                    <TableCell align="center"><Span>{item.id}</Span></TableCell>
    
                    <TableCell align="center"><Span>{item.costumerId}</Span></TableCell>
                    
                    <TableCell align="center"><Span>{item.time}</Span></TableCell>
                    
                    <TableCell align="center">{item.address}</TableCell>
                    <TableCell align="center">{item.amount}</TableCell>
                    <TableCell align="center">{item.paymentMethod}</TableCell>
                    <TableCell align="center">{item.contact}</TableCell>
                    

                  </TableRow>

                ))
              }
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      labelDisplayedRows={() => []}
      sx={{
        ".MuiIconButton-root": {
          display: "none",
        },
        ".MuiTablePagination-actions": {
          margin:0
        },
        ".MuiInputBase-root": {
          marginRight: 2,
          paddingLeft:1
        },
        ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
          marginTop: 2,
          color: "white",
        },
        ".MuiTablePagination-select":{
          backgroundColor: "white",
          marginRight: 0
        }
        
      }}
    />
    </>
  );
}
