import React from 'react';
import { Link } from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ProfileImg from '../../assets/icons/profile.jpg'

const styles = (theme) => ({
    root: {
        top: 'auto',
        bottom: 0,
    },
    button: {
        width: '100%',
        textDecoration: 'none'
    },
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
            className={classes.root}
            elevation='0'
            color='#ffffff'
            position='fixed' >

            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                variant='fullWidth'
                centered>
                <Tab key='baseline' id={0} label={<Link className={classes.button} to='/1'><Button large className={classes.button}>Type 0</Button></Link>} />
                <Tab key='6row' id={1} label={<Link className={classes.button} to='/2'><Button large className={classes.button}>Type 1</Button></Link>} />
                <Tab key='select' id={2} label={<Link className={classes.button} to='/3'><Button large className={classes.button}>Type 2</Button></Link>} />
                <Tab key='formixmatch' id={3} label={<Link className={classes.button} to='/4'><Button large className={classes.button}>Type 3</Button></Link> } />
            </Tabs>
        </AppBar>
    </div>);
}

export default  withStyles(styles)(AppFooter);