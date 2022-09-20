import React from "react";
import deleteIcon2 from "../../assets/images/deleteIcon2.svg";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import styles from "./Offers.module.css"
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { offersApi } from "../../api/offers";
import { setOffers } from "../../store/slices/offers/offerSlice";
import { TrashImg, Span, TableTitle, ThText } from "../offers/offers.styled";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TablePagination from "@mui/material/TablePagination";

export function OffersTable(props) {
  const [page, setPage] = React.useState(5);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    if (state.offerSlice.data < 1) {
      getOffers();
    }
  }, []);
  const getOffers = () => {
    offersApi
      .then((res) => {
        dispatch(setOffers(res.data.offers));
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

  // style
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.only("md"));
  const dynamicStyles = {
    ...(matchesSM && { overflowX: "scroll" }),
    ...(matchesMD && { overflowX: "scroll" }),
  };
  return (
    <>
      <TableContainer
        className={styles.table}
        component={Paper}
        sx={{ ...dynamicStyles }}
      >
        <Table aria-aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className={styles.title} align="center">
                ID
              </TableCell>
              <TableCell className={styles.title} align="center">
                Image
              </TableCell>
              <TableCell className={styles.title} align="center">
                Title
              </TableCell>
              <TableCell className={styles.title} align="center">
                Description
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.offerSlice.data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className={styles.info} align="center">
                  <Span>{item.id}</Span>
                </TableCell>
                <TableCell className={styles.info} align="center">
                  <img width={50} height={40} src={item.photo} />
                </TableCell>
                <TableCell className={styles.info} align="center">
                  {item.title}
                </TableCell>
                <TableCell className={styles.info} align="center">
                  {item.description}
                </TableCell>
                <TableCell>
                  <TrashImg>
                    <img src={deleteIcon2} />
                  </TrashImg>
                </TableCell>
              </TableRow>
            ))}
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
          marginRight: 1,
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
