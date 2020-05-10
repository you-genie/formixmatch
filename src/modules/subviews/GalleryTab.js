import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import GalleryPanel from "../components/Gallery";

const useStyles = makeStyles((theme) => ({

}))

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function GalleryTab(props) {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
            <AppBar
                elevation='0'
                position='static' color='transparent'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    centered>
                    <Tab icon={<PhotoLibraryIcon />}{...a11yProps(0)} />
                    <Tab label='IPGV' {...a11yProps(1)} />
                    <Tab label='몰라' {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <GalleryPanel value={value} index={0} dir={theme.direction}>
                Item One
            </GalleryPanel>
            <GalleryPanel value={value} index={1} dir={theme.direction}>
                Item Two
            </GalleryPanel>
            <GalleryPanel value={value} index={2} dir={theme.direction}>
                Item Three
            </GalleryPanel>
        </div>
    )
}

export default GalleryTab;