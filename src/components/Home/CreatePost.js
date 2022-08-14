import React from "react";
import { Image, AddCircleOutline } from "@mui/icons-material";
import {
  Avatar,
  Typography,
  ButtonGroup,
  Button,
  Modal,
  TextField,
  Box,
  Stack,
} from "@mui/material";
import { CreatePostStyle } from "../style";

export default function CreatePost() {
  const [stateUpdate, setstateUpdate] = React.useState(false);
  const [stateFile, setstateFile] = React.useState(null);
  return (
    <>
      <Button
        sx={{ color: "white" }}
        onClick={(e) => {
          setstateUpdate(true);
          setstateFile(null);
        }}
        key="two"
      >
        <AddCircleOutline />
        Post
      </Button>
      <Modal
        style={CreatePostStyle.Modal}
        open={stateUpdate}
        onClose={(e) => setstateUpdate(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={CreatePostStyle.ModalBox}>
          <Typography variant="h5" color="gray" textAlign="center">
            Create post
          </Typography>
          <Box style={CreatePostStyle.ProfileBox}>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 50, height: 50 }}
            />
            <Typography fontWeight={700} variant="span">
              John Doe
            </Typography>
          </Box>

          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="filled"
          />

          {stateFile && (
            // eslint-disable-next-line
            <img height="40%" width="100%" src={stateFile} />
          )}

          <Stack direction="row" fullWidth mt={1} mb={1}>
            <label htmlFor="upload-photo">
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={(event) =>
                  setstateFile(URL.createObjectURL(event.target.files[0]))
                }
              />
              <Image color="secondary" />
            </label>
          </Stack>
          <ButtonGroup fullWidth variant="contained">
            <Button>Post</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}
