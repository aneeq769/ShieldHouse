import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        mt: "auto",
        py: 2.5,
        px: 2,
        textAlign: "center",
        borderTop: "1px solid rgba(0,184,255,0.36)",
        background: "rgba(8,8,8,0.9)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Copyright@ 2026 All Rights reserved. 
      </Typography>
    </Box>
  );
}
