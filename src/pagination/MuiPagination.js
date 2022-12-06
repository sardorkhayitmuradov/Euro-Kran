import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { pagination } from "../pagination/pagination";

const MuiPagination = ({ setSliderdb }) => {
  const pageSize = 6;

  const [pagin, setPagin] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    pagination.getData({ from: pagin.from, to: pagin.to }).then((res) => {
      console.log(res);
      setPagin({ ...pagin, count: res.count });
      setSliderdb(res.data);
    });
  }, [pagin.from, pagin.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagin({ ...pagin, from: from, to: to });
  };
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      sx={{
        margin: "40px 0",
      }}
    >
      <Pagination
        count={Math.ceil(pagin.count / pageSize)}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default MuiPagination;
