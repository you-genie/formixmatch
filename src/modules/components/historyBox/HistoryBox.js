import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    bodyShort: {
        width: '70%'
    },
    bodyFull: {
        width: '100%'
    }
}))

function HistoryBox(props) {
    const classes = useStyles();
    const {lead_profile, content, date, action} = props;
    return (
        <ListItem
            elevation={0}
            className={classes.root}>
            <ListItemAvatar>
                <Avatar src={lead_profile} />
            </ListItemAvatar>
            <Grid
                container
                direction='column'>
                <ListItemText
                    className={action ? classes.bodyShort : classes.bodyFull}
                    secondary={content}>
                </ListItemText>
                <ListItemSecondaryAction>
                    {action}
                </ListItemSecondaryAction>
            </Grid>

        </ListItem>
    )
}

HistoryBox.defaultProps = {
    lead_profile: '/images/2.jpg',
    content: (<div><b>Mingu_frog</b>님과 <b>silver_rain</b>님이 Instagram에서 <b>SeungSeung</b>님을 팔로우했습니다. 게시물을 확인해 보세요.  <Typography variant='caption'>1일</Typography></div>),
}
export default HistoryBox;