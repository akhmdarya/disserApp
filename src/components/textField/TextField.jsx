import React from "react";
import Textarea from "@mui/joy/Textarea";
import Box from "@mui/material/Box";
import Subtitle from "../texts/Subtitle";

const TextField = React.forwardRef((props, ref) => {
  return <Box
        sx={{
            width: "27rem",
            py: 2,
            display: "grid",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
        }}
    >
      <div style={{
          paddingTop:"1rem",
          width: "27rem",
      }}>
          {" "}
          <Subtitle>{props.text}</Subtitle>
      </div>
      <textarea readOnly={props.readOnly} rows="4" cols="30" {...props} ref={ref}   ></textarea>
    </Box>






});


export default TextField;