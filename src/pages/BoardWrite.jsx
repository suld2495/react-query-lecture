import { Box, Button, TextField } from "@mui/material";
import Title from "../components/common/Title";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSaveBoardMutation } from "../hooks/useBoard";

const BoardWrite = () => {
  const save = useSaveBoardMutation();
  const [form, setForm] = useState({
    subject: '',
    content: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    save.mutate(form);
  };

  return (
    <Box>
      <Title>자유 게시판 글쓰기</Title>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box display="flex">
            <TextField
              variant="standard"
              name="subject"
              label="제목"
              fullWidth
              value={form.subject}
              onChange={handleChange}
            />
          </Box>
          <Box display="flex" marginTop="30px">
            <TextField
              variant="standard"
              name="password"
              label="비밀번호"
              fullWidth
              value={form.password}
              onChange={handleChange}
            />
          </Box>
          <Box marginTop="30px" height="450px">
            <TextField
              name="content"
              label="내용"
              rows={17}
              multiline
              fullWidth
              value={form.content}
              onChange={handleChange}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Button to="/" LinkComponent={Link} size="large" variant="outlined">목록</Button>
            <Button type="submit" size="large" variant="contained" color="success">글쓰기</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
};

export default BoardWrite;