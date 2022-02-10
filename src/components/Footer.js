import { Paper, Typography } from "@mui/material";

export default function Footer(props) {
  return (
    <Paper
      sx={{
        width: 1,
        minHeight: "80px",
        // bgcolor: "#f8f8ff",
        bgcolor: "primary.main",
        borderTop: 4,
        borderColor: "secondary.main",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" color="secondary.main">
        © 2022 Joy of Coding
      </Typography>
    </Paper>
  );
}
