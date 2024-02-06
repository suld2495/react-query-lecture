import { Box, Button, Divider, Typography } from "@mui/material";
import Title from "../components/common/Title";
import { Link } from "react-router-dom";

const BoardView = () => {
  return  (
    <Box>
      <Title>자유 게시판</Title>
      <Box marginBottom="50px">
        <Typography variant="h4" fontWeight="700">네이버웍스 비정기 업데이트</Typography>
        <Typography variant="h6" color="#777" fontWeight="400" marginBlock="45px">2024.02.05</Typography>
        <Divider />
        <Typography 
          variant="h6"
          marginTop="45px" 
          color="#222" 
          fontWeight="400"
          whiteSpace="pre-line"
          minHeight="256px"
        >
          {`
            안녕하세요, 네이버웍스입니다.
            
            네이버웍스 비정기 업데이트가 2024년 2월 7일(수)에 진행됩니다.
            자세한 업데이트 사항은 아래 내용을 확인해 주시기 바랍니다.
            
            ■ 업데이트 일정 : 2024년 2월 7일(수) 오후 2시경
            ※ Drive탐색기는 선택 업데이트 방식으로 [작업표시줄 Tray 아이콘 > 정보]에서도 최신 버전으로 업데이트 할 수 있습니다.
          `}
        </Typography>
      </Box>
      <Divider />
      <Box marginTop="50px">
        <Box display="flex" gap="10px">
          <Button to="/" LinkComponent={Link} size="large" variant="outlined">목록</Button>
          <Button size="large" variant="contained" color="success">삭제</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BoardView;