import {
  TextField,
  Box,
  Typography,
  Container,
  IconButton,
  Button,
  InputAdornment,
  Modal,
  Tabs,
  Tab,
} from "@mui/material";
import {
  GitHub,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {LoginStyle} from "../style";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LoginRegester() {
  const [stateUpdate, setstateUpdate] = useState(true);
  const [showPassword, setShowPassord] = useState(true);
  const [value, setValue] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  // submit
  const onSubmit = (data) => {
    alert("userData: " + JSON.stringify(data));
  };
  return (
    <Modal
      style={LoginStyle.Modal}
      open={stateUpdate}
      onClose={() => setstateUpdate(false)}
    >
      <Box sx={LoginStyle.Border}>
        {/* <RouterLink to="/register">Get started</RouterLink> */}

        <Container maxWidth="xs" className="form_Container">
          <Typography variant="h4">Sign in</Typography>
          <Typography color="textSecondary">
            Enter your details below.
          </Typography>
          <Box sx={LoginStyle.IconBox}>
            <Button
              variant="outlined"
              style={(LoginStyle.Button, { color: "rgb(223, 62, 48)" })}
            >
              <Google />
            </Button>
            <Button
              variant="outlined"
              style={(LoginStyle.Button, { color: "rgb(117,117,117)" })}
            >
              <GitHub />
            </Button>
          </Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
              aria-label="basic tabs example"
            >
              <Tab label="Signin" {...a11yProps(0)} />
              <Tab label="Signup" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <form
            style={LoginStyle.Form}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Names box */}
            {value === 1 ? (
              <Box
                sx={{
                  display: "grid",
                  gap: 1,
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <TextField
                  variant="outlined"
                  fullWidth
                  type="text"
                  label="First Name"
                  {...register("firstName", { required: true })}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName && "Enter a valid first name"}
                />

                <TextField
                  variant="outlined"
                  fullWidth
                  type="text"
                  label="Last Name"
                  {...register("lastName", { required: true })}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName && "Enter a valid last name"}
                />
              </Box>
            ) : (
              <></>
            )}

            {/* email */}
            <TextField
              variant="outlined"
              fullWidth
              type="email"
              label="Email address"
              {...register("email", { required: true })}
              error={errors.email ? true : false}
              helperText={errors.email && "Enter a valid email address"}
            />

            {/* password */}
            <TextField
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassord(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 15,
              })}
              error={errors.password ? true : false}
              helperText={
                errors.password && "Enter a valid password (5-15 characters)"
              }
            />

            {/* submit */}
            <Button type="submit" variant="contained" disableElevation>
              {value === 1 ? "Register" : "Signin"}
            </Button>
          </form>
        </Container>
      </Box>
    </Modal>
  );
}
