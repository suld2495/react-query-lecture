import { Box, Button, Divider, Typography } from "@mui/material";
import Title from "../components/common/Title";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteBoardMutation, useFetchBoardView } from "../hooks/useBoard";

const BoardView = () => {
  const deleteBoard = useDeleteBoardMutation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: board, isLoading, isFetched } = useFetchBoardView(id);

  const handleDelete = () => {
    deleteBoard.mutate(id);
  };

  if (isFetched && !board) {
    alert('잘못 된 경로입니다.');
    navigate('/');
    return;
  }

  if (isLoading) {
    return null;
  }

  return  (
    <Box>
      <Title>자유 게시판</Title>
      <Box marginBottom="50px">
        <Typography variant="h4" fontWeight="700">{board.subject}</Typography>
        <Typography variant="h6" color="#777" fontWeight="400" marginBlock="45px">{board.date}</Typography>
        <Divider />
        <Typography 
          variant="h6"
          marginTop="45px" 
          color="#222" 
          fontWeight="400"
          whiteSpace="pre-line"
          minHeight="256px"
        >
          {board.content}
        </Typography>
      </Box>
      <Divider />
      <Box marginTop="50px">
        <Box display="flex" gap="10px">
          <Button to="/" LinkComponent={Link} size="large" variant="outlined">목록</Button>
          <Button size="large" variant="contained" color="success" onClick={handleDelete}>삭제</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BoardView;