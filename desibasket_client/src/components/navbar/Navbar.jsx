import React from "react";
import { images } from "../../constants";
import { muiIcons } from "../../constants";
import { muiMaterial } from "../../constants";

const Search = muiMaterial.styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: muiMaterial.alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: muiMaterial.alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = muiMaterial.styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = muiMaterial.styled(muiMaterial.InputBase)(
  ({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

const Navbar = () => {
  return (
    <muiMaterial.Box
      sx={{
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderBottom: "1px solid #F2F2F2",
        gap: "20px",
        boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}>
      <muiMaterial.Box
        sx={{
          width: "12%",
          height: " 100%",
          cursor: "pointer",
          margin: "15px",
        }}>
        <img
          src={images.logo}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </muiMaterial.Box>
      <muiMaterial.Box
        sx={{
          width: "18%",
          height: "100%",
          cursor: "pointer",
          margin: "15px",
        }}>
        <h4 style={{ fontWeight: "800" }}>Delivery in 15 minutes</h4>
        <muiMaterial.Box mt="-36px" display="flex" alignItems={"center"}>
          <p
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, soluta
            at necessitatibus officia praesentium veritatis qui adipisci vitae
            voluptate harum eum animi, voluptatum, maxime quaerat est nesciunt?
            Nam, ullam ut.
          </p>
          <muiIcons.ArrowDropDownIcon />
        </muiMaterial.Box>
      </muiMaterial.Box>
      <muiMaterial.Box width="37%" m="15px">
        <Search sx={{ bgcolor: "#E5EBF3", "&:hover": { bgcolor: "#E5EBF3" } }}>
          <SearchIconWrapper>
            <muiIcons.SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </muiMaterial.Box>
      <muiMaterial.Box
        sx={{ cursor: "pointer", fontWeight: "550", width: "10%", m: "15px" }}>
        My Account
      </muiMaterial.Box>
      <muiMaterial.Box width="15%">
        <muiMaterial.Button
          variant="contained"
          size="large"
          sx={{
            fontWeight: "bold",
            fontSize: "13px",
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}>
          <muiIcons.ShoppingCartIcon sx={{ fontSize: "18px" }} /> My Cart
        </muiMaterial.Button>
      </muiMaterial.Box>
    </muiMaterial.Box>
  );
};

export default Navbar;
