import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LockIcon from '@material-ui/icons/Lock';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TripletAppBar from "./TripletAppBar";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1, 0),
        width: '100%',
        alignItems: 'center',
        justify: 'center',
    },
    id: {
        paddingBottom: theme.spacing(0.5),
    },
    spacing: {
        visibility: 'hidden'
    }
}));

function NameItem(props) {
    const {id, uid} = props;
    const classes = useStyles();
    return (
        <ButtonBase
            focusRipple
            key={uid}>
            <LockIcon style={{fontSize: 14}}/>
            <Typography variant='subtitle2' className={classes.id}>
                {id}
            </Typography>
            <ExpandMoreIcon style={{fontSize: 16}}/>
        </ButtonBase>
    )
}

function ProfileAppBar(props) {
    const {user} = props
    const classes = useStyles();
    const nameItem = NameItem({id:user.id, uid:user.uid});
    const spacingItem = (
        <div className={classes.spacing}>
        <IconButton>
            <MenuIcon />
        </IconButton>
    </div>);
    const menuItem = (
        <IconButton>
            <MenuIcon />
        </IconButton>
    )
    return (
        <TripletAppBar
            item1={spacingItem}
            item2={nameItem}
            item3={menuItem} />
    );
}
ProfileAppBar.defaultProps = {
    user: {
        id: 'itz_sammu_time',
        uid: 0
    }
}
export default  ProfileAppBar;