import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
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
        padding: theme.spacing(1),
        width: '100%',
        alignItems: 'center',
        justify: 'center',
    },
    logo: {
        width: '150px',
        [theme.breakpoints.down('xs')]: {
            width: '160px',
            height: '100px'
        },
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
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '0',
            margin: '0',
        },
    },
    grow: {
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
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
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    inputRoot: {
        color: 'inherit',
        [theme.breakpoints.down('xs')]: {
            visibility: 'collapse',
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100px',
        [theme.breakpoints.up('md')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    profile: {
        marginLeft: theme.spacing(1),
    },
    icons: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            visibility: 'hidden',
            display: 'block',
        },
    },
    fadedSearch: {
        display: 'none',
        marginTop: theme.spacing(1),
        width: theme.spacing(6),
        height: theme.spacing(6),
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
        },
    }
}));

function CustomAppBar(props) {
    const classes = useStyles();
    return (
        <Grid
            container lg={12}
            direction='row'
            alignItems='center'
            className={classes.root}>
            <Grid
                item
                xs={12}>
                <AppBar elevation="0" color="transparent" position="static">
                    <ToolBar >
                        <Button
                            className={classes.logo}
                            startIcon={<img src={Logo} className={classes.logo}/>} />
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
                        <div className={classes.icons} >
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
                        </div>
                        <Avatar className={classes.fadedSearch} >
                            <HomeIcon />
                        </Avatar>
                    </ToolBar>
                </AppBar >
            </Grid>

        </Grid>

    );
}

export default  CustomAppBar;