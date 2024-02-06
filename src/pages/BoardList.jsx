import { Box, Button } from "@mui/material";
import Title from "../components/common/Title";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useFetchBoardListQuery } from "../hooks/useBoard";

const BoardList = () => {
  const { data: rows } = useFetchBoardListQuery();
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'subject', headerName: '제목', flex: 1 },
    { field: 'author', headerName: '글쓴이', width: 130 },
    { field: 'date', headerName: '작성시간', width: 90},
  ];

  return (
    <Box>
      <Title>자유 게시판</Title>
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pdateSizeOptions={[5, 10]}
        />
      </Box>
      <Box display="flex" justifyContent="flex-end" paddingTop="30px">
        <Button to="/write" LinkComponent={Link} size="large" variant="contained" color="success">글쓰기</Button>
      </Box>
    </Box>
  )
};

export default BoardList;