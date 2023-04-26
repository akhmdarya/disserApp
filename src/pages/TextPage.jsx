import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import styles from '../styles/AudioPage.module.css'
import UploadFile from "../components/image/uploadFile/UploadFile";
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const fileTypes = ["MP3", "WAV"];



const TextPage = () => {
    const [file, setFile] = useState(null);
    const handleChangeFile = (file) => {
        setFile(file);
        console.log(file)
        return file
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{padding: "2rem 2rem", width:"100%"}} >
            <div className={styles.title}>
                <span> Encoding</span>
            </div>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Unicode" {...a11yProps(0)} />
                    {/*<Tab label="Phase coding" {...a11yProps(1)} />*/}
                    {/*<Tab label="Item Three" {...a11yProps(2)} />*/}
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              kek
            </TabPanel>
            {/*<TabPanel value={value} index={1}>*/}
            {/*    Item Two*/}
            {/*</TabPanel>*/}


        </div>
    );
};

export default TextPage;