import { Box, Typography } from "@mui/material";

const Title = ({ children }) => (
  <Box>
    <Typography 
      variant="h5" 
      marginBottom="30px" 
      fontWeight="700"
      color="#3d3d3d"
    >
      {children}
    </Typography>
  </Box>
)

export default Title;
