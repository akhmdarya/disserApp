import React from "react";
import Textarea from "@mui/joy/Textarea";
import Box from "@mui/material/Box";

const TextField = React.forwardRef((props, ref) => {
  return <Box
        sx={{
            width: "34rem",
            py: 2,
            display: "grid",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
        }}
    >
      <textarea  rows="5" cols="33" {...props} ref={ref}   ></textarea>
    </Box>






});


export default TextField;