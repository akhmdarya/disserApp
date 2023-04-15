import React, {useState} from 'react';
import styles from "./SideNav.module.css"
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {NavLink} from "react-router-dom";


 const navData = [
     {
         id: 1,
         icon: <AudioFileIcon/>,
         text: "Audio",
         link: "/audio"
     },
    {
        id: 0,
        icon: <FormatColorTextIcon/>,
        text: "Text",
        link: "/"
    },

    {
        id: 2,
        icon: <InsertPhotoIcon/>,
        text: "Image",
        link: "statistics"
    },
    // {
    //     id: 3,
    //     icon: <SettingsIcon/>,
    //     text: "Settings",
    //     link: "settings"
    // }
]

const SideNav = () => {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
    }
    return (
        <div className={open?styles.sidenav:styles.sidenavClosed}>
            <button className={styles.menuBtn} onClick={toggleOpen}>
                {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
            </button>
            {navData.map(item =>{
                return <NavLink key={item.id}
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.sideitem
                            }
                            to={item.link}>
                    {item.icon}
                    <span className={styles.linkText}>{item.text}</span>
                </NavLink>
            })}
        </div>
    );
};

export default SideNav;