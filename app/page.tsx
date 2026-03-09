import { Typography, Box } from "@mui/material";
import { Form } from "./common/Form";

export default function Profile() {
  return (
    <Box>
      <Typography>Coming Soon, This was deployed automatically!</Typography>
      <Form formData={{ id: "stuff", label: "things" }} />
    </Box>
  );
}
