import {
  Link,
  Paper,
  Typography
} from "@mui/material";

export default function Footer(props) {
  return (
    <Paper
      sx={{
        width: 1,
        minHeight: "80px",
        // bgcolor: "#f8f8ff",
        bgcolor: "primary.main",
        borderTop: 2,
        borderColor: "secondary.main",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Typography
        variant="h5"
        color="secondary.main"
      >
        <Link
          color="secondary.main"
          href="https://github.com/TurtleWolfe/tmx"
          underline="hover"
        >
          {'© 2022 tmx'}
        </Link>
      </Typography>
    </Paper>
  );
}
