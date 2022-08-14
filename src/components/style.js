export const DrawerStyle ={
    Drawer: {
      width: 240,
      flexShrink: 0,
      opacity: 0.9,
      backgroundColor: "black",
      zInndex:2,
      "& .MuiDrawer-paper": {
        width: 240,
        boxSizing: "border-box",

      },
    },
    Div: {
      display: "flex",
      alignItems: "center",
      padding: 1,
      justifyContent: "flex-end",
    },
    IconButton: {
      display: {  lg: "none" },

    },
  };

  export const LoginStyle= {
    Modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    Border: {
      overflow: "auto",
      backgroundColor: "background.default",
      p: 3,
      borderRadius: 5,
      width: 300,
      height: 440,
    },
    IconBox: {
      my: 1,
      display: "grid",
      gap: 1,
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    Button: {
      padding: "12px 0",
      fontSize: 20,
      borderRadius: 8,
    },
    Form: { marginTop: 2, display: "grid", gap: 6 },
  };


export const NavbarStyle = {
  InputBase: {
    backgroundColor: "#E3E6EA",
    padding: "0 10px",
    width: "50%",
  },
  Avatar: { width: 50, height: 50 },
};

export const CreatePostStyle = {
  ProfileBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  Modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ModalBox: {
    position: "fixed",
    p: 3,
    width: 300,
    height: 500,
    color: "text.primary",
    bgcolor: "background.default",
    borderRadius: 5,
  },
};
