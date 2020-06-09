import React from 'react';
import {withStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ProfileImg from '../../assets/icons/profile.jpg';

const styles = (theme) => ({

});

function AppFooter(props) {
    const {classes} = props;
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const profileIcon = (
        <Avatar
            src={ProfileImg} />
    )
    return (<div>
        <AppBar
            elevation='0'
            position='sticky' color='transparent'>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                variant='fullWidth'
                centered>
                <Tab key='home' id={0} icon={<HomeOutlinedIcon />} />
                <Tab key='search' id={1} icon={<SearchOutlinedIcon />} />
                <Tab key='add' id={2} icon={<AddBoxOutlinedIcon />} />
                <Tab key='favorite' id={3} icon={<FavoriteBorderOutlinedIcon />} />
                <Tab key='myFeed' id={4} icon={profileIcon} />
            </Tabs>
        </AppBar>
    </div>);
}

export default  withStyles(styles)(AppFooter);