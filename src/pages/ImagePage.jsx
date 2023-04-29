import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "../styles/AudioPage.module.css";

import ImageComponentLSB from "../components/image/ImageComponentLSB";
import ImageComponentDCT from "../components/image/ImageComponentDCT";
import { Button } from "@mui/material";
import {baseUrl} from "../config/config";
import ImageComponentTable from "../components/image/ImageComponentTable";
import ImageComponentModifiedLSB from "../components/image/ImageComponentModifiedLSB";
import ImageComponentMedian from "../components/image/ImageComponentMedian";
import ImageComponentGauss from "../components/image/ImageComponentGauss";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ span: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ImagePage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const [report,setReport] = useState([{}])
  const handleGenerate = () => {

      const DecodeFile = async () => {
          await fetch(baseUrl + "/generateReport", {
              method: "GET",

          }).then((resp) => {
              resp.json().then((data) => {
                  setReport(data)
                  setTimeout(() => {
                  }, 0);

                  console.log(report);
                  return report
              });
          });
      };

      DecodeFile();




  };



  return (
    <div style={{ padding: "2rem 2rem", width: "60%" }}>
      <div className={styles.title}>
        <span> Image steganography</span>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="LSB" {...a11yProps(0)} />
          <Tab label="DCT" {...a11yProps(1)} />
          <Tab label="Impoved LSB + AES" {...a11yProps(2)} />
            <Tab label="LSB + Median Filtering" {...a11yProps(3)} />
            <Tab label="LSB + Gauss Filtering" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ImageComponentLSB />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ImageComponentDCT />
      </TabPanel>

        <TabPanel value={value} index={2}>
          <ImageComponentModifiedLSB/>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <ImageComponentMedian/>
        </TabPanel>    <TabPanel value={value} index={4}>
        <ImageComponentGauss/>
    </TabPanel>

      <div
      className={styles.butGen}
      >
        <Button onClick={handleGenerate} variant="contained">
          Generate report
        </Button>

          {report.length>1?
           <div  style={{paddingTop:"1rem"}} >
           <ImageComponentTable report={report}/>
           </div>
          :
           (<></>)
          }

      </div>

      {/*<TabPanel value={value} index={2}>*/}
      {/*    Item Three*/}
      {/*</TabPanel>*/}
    </div>
  );
};

export default ImagePage;
