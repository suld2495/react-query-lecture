import { Box, Button } from "@mui/material";
import Title from "../components/common/Title";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const BoardList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'subject', headerName: '제목', flex: 1 },
    { field: 'author', headerName: '글쓴이', width: 130 },
    { field: 'date', headerName: '작성시간', width: 90},
  ];

  const rows = [
    { id: 1, subject: 'Snow', author: 'Jon', date: 35 },
    { id: 2, subject: 'Lannister', author: 'Cersei', date: 42 },
    { id: 3, subject: 'Lannister', author: 'Jaime', date: 45 },
    { id: 4, subject: 'Stark', author: 'Arya', date: 16 },
    { id: 5, subject: 'Targaryen', author: 'Daenerys', date: null },
    { id: 6, subject: 'Melisandre', author: null, date: 150 },
    { id: 7, subject: 'Clifford', author: 'Ferrara', date: 44 },
    { id: 8, subject: 'Frances', author: 'Rossini', date: 36 },
    { id: 9, subject: 'Roxie', author: 'Harvey', date: 65 },
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