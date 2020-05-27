import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import userLoader from "./users";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    child: {
        paddingLeft: theme.spacing(6),
        paddingBottom: theme.spacing(-5),
    }
}))

function CommentBox(props) {
    const classes = useStyles();
    const users = userLoader();
    const {comment} = props;
    const user = users[comment.uid];

    return (
        <div>
            <Card
                elevation={0}
                className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar src={user.profile} />
                    }
                    title={user.id}
                    subheader={comment.body}
                    action={
                        <div>
                            <IconButton aria-label='settings'>
                                <ThumbUpIcon />
                            </IconButton>
                            <Typography variant='subheader1'>{comment.likes}</Typography>
                        </div>
                    }
                />
                <div
                    className={classes.child}>
                    {comment.comments.map((child) => (
                        <div>
                            <CommentBox
                                comment={child} />
                        </div>))}
                </div>
            </Card>
        </div>
    )
}

export default CommentBox;