import React from "react";
import {
  Avatar,
  Box,
  styled,
  Typography,
  Grid,
  Modal,
  Divider,
} from "@mui/material";

export default function Comment(props) {
  return (
    <Modal
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      open={props.Comment}
      onClose={(e) => {
        props.setComment(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={400}
        bgcolor={"background.default"}
        color={"text.primary"}
        p={3}
        borderRadius={5}
      >
        <h2>Comments</h2>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {" "}
              John Doe{" "}
            </Typography>
          </Box>
          <p style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
            Suspendisse congue vulputate lobortis. Pellentesque at interdum
            tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis
            ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus,
            efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque
            et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum,
            mauris mi vehicula urna, nec feugiat quam lectus vitae ex.
          </p>

          <br />
          <p style={{ textAlign: "left", color: "gray" }}>
            posted 1 minute ago
          </p>
        </Grid>

        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </Box>
    </Modal>
  );
}
