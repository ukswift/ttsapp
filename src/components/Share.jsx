import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, Tooltip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { Twitter } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Share({ text }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Share your thoughts (text)">
        <IconButton>
          <ShareIcon
            sx={{ color: "#1565c0" }}
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          />
          {/* Options */}
          {/* </Play> */}
        </IconButton>
      </Tooltip>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${text}`,
              "_blank"
            );
            handleClose();
          }}
          disableRipple
        >
          <Facebook />
          Facebook
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?text=${text}`,
              "_blank"
            );

            handleClose();
          }}
          disableRipple
        >
          <Twitter />
          Twitter
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.open(
              `https://www.linkedin.com/shareArticle?mini=true&url=${text}`,
              "_blank"
            );

            handleClose();
          }}
          disableRipple
        >
          <LinkedIn />
          Linkedin
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
