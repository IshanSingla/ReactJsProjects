import {
  Fab,
} from "@mui/material";
import React, { useState } from "react";
import * as material from "@mui/material";
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <material.Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", lg: 30 },
        }}
      >
        <materialFab color="primary" aria-label="add">

          <Add />
        </materialFab>
      </material.Tooltip>
      <material.Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <material.Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <material.Typography variant="h6" color="gray" textAlign="center">
            Create post
          </material.Typography>
          <material.Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <material.Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <material.Typography fontWeight={500} variant="span">
              John Doe
            </material.Typography>
          </material.Box>
          <material.TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <material.Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </material.Stack>
          <material.ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <material.Button>Post</material.Button>
            <material.Button sx={{ width: "100px" }}>
              <DateRange />
            </material.Button>
          </material.ButtonGroup>
        </material.Box>
      </material.Modal>
    </>
  );
};

export default Add;
