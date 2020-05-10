import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PlaceIcon from '@material-ui/icons/Place';
import ShareIcon from '@material-ui/icons/Share';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Logo from '../../assets/icons/logo.svg';
import Profile from '../../assets/icons/profile.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1, 5),
        padding: theme.spacing(0, 10),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.03),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.06),
        },
        margin: theme.spacing(0, 10),
        '&:click': {
            margin: theme.spacing(0, 3),
        },
        width: '50%'
    },
    grow: {
        flexGrow: 1,
    },
    icon:{
        width: theme.spacing(6),
    },
    searchIcon: {
        padding: theme.spacing(0, 3),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        pointerEvents: 'none',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100px',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    profile: {
        marginLeft: theme.spacing(1),
    }
}));

function CustomAppBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar elevation="0" color="transparent" position="static">
                <ToolBar >
                    <Button
                        startIcon={<img src={Logo} width="150px"/>} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder={"검색..."}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'area-label': 'search'}} />
                    </div>
                    <div className={classes.grow} />
                    <IconButton className={classes.icon}>
                        <ShareIcon />
                    </IconButton>
                    <IconButton className={classes.icon}>
                        <HomeIcon />
                    </IconButton>
                    <IconButton className={classes.icon}>
                        <RestaurantIcon />
                    </IconButton>
                    <Avatar className={classes.profile} alt="IZ ON ME" src={Profile} />
                </ToolBar>
            </AppBar >
        </div>

    );
}

export default  CustomAppBar;