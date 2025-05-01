import { TextField } from "@mui/material";

const Inputfield = ({ label, name, type, value, onChange }) => {
  return (
    <TextField
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
      variant="outlined"
      autoComplete="off"
      sx={{
        backgroundColor: "white",
        borderRadius: "4px",
        "& .MuiOutlinedInput-input": {
          fontSize: "15px",
          fontWeight: "400",
          color: "#777",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#975e64", // Keep the same border color on hover
            },
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#975e64", // Remove focus effect border color
            },
            "& .MuiOutlinedInput-input": {
              backgroundColor: "transparent",
            },
            boxShadow: "none",
            outline: "none",
            // Change the label color on focus
            "& + .MuiInputLabel-root": {
              // color: "#975e64", // Change label color on focus
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.23)", // Default border color
          },
        },
        // Default label color
        "& .MuiInputLabel-root": {
          color: "#777", // Default label color
        },
      }}
    />
  );
};

export default Inputfield;
