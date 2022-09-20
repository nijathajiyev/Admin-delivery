import { Pagination, TablePagination } from "@mui/material";
import * as React from "react";

export function CatagoryPagnition(props) {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
    setPage(5);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[5, 10, 15]}
      labelDisplayedRows={() => []}
      sx={{
        ".MuiIconButton-root": {
          display: "none",
        },
        ".MuiTablePagination-actions": {
          marginLeft: 0,
        },
        ".MuiInputBase-root": {
          marginRight: 0,
          paddingLeft:1
        },
        ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
          marginTop: 2,
          color: "white",
        },
        ".MuiTablePagination-select": {
          backgroundColor: "white",
          marginRight: 0,
        },
      }}
    />
  );
}
