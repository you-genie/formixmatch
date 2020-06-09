import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import GridOnIcon from '@material-ui/icons/GridOn';

import GalleryPanel from "../components/Gallery";

const useStyles = makeStyles((theme) => ({

}))

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
                    variant='fullWidth'
                    centered>
                    <Tab icon={<GridOnIcon />}{...a11yProps(0)} />
                    <Tab icon={<AssignmentIndOutlinedIcon />}{...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <GalleryPanel value={value} index={0} dir={theme.direction}>
                Item One
            </GalleryPanel>
            <GalleryPanel value={value} index={1} dir={theme.direction}>
                Item Two
            </GalleryPanel>
        </div>
    )
}

export default GalleryTab;