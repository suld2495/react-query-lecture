import { Box, Button } from "@mui/material";
import Title from "../components/common/Title";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useFetchBoardListQuery } from "../hooks/useBoard";

const BoardList = () => {
  const navigate = useNavigate();
  const { data: rows } = useFetchBoardListQuery();
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'subject', headerName: '제목', flex: 1 },
    { field: 'date', headerName: '작성시간', width: 200},
  ];

  const handleClick = ({ id }) => {
    navigate(`/view/${id}`);
  };

  return (
    <Box>
      <Title>자유 게시판</Title>
      <Box>
        <DataGrid
          rows={rows || []}
          onRowClick={handleClick}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pdateSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          OnClick
          style={{ cursor: 'pointer' }}
        />
      </Box>
      <Box display="flex" justifyContent="flex-end" paddingTop="30px">
        <Button to="/write" LinkComponent={Link} size="large" variant="contained" color="success">글쓰기</Button>
      </Box>
    </Box>
  )
};

export default BoardList;