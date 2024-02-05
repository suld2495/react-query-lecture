import { Box, Button, TextField } from "@mui/material";
import Title from "../components/common/Title";
import { Link } from "react-router-dom";

const BoardWrite = () => {
  return (
    <Box>
      <Title>자유 게시판 글쓰기</Title>
      <Box>
        <Box display="flex">
          <TextField
            variant="standard"
            name="subject"
            label="제목"
            fullWidth
          />
        </Box>
        <Box marginTop="30px" height="500px">
          <TextField
            name="subject"
            label="내용"
            rows={20}
            multiline
            fullWidth
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button to="/" LinkComponent={Link} size="large" variant="outlined">목록</Button>
          <Button type="submit" size="large" variant="contained" color="success">글쓰기</Button>
        </Box>
      </Box>
    </Box>
  )
};

export default BoardWrite;