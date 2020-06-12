import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import HistoryBox from "../components/historyBox/HistoryBox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))
function History(props) {
    const { histories } = props
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List>
                {histories.map((history) => (
                    <HistoryBox
                        lead_profile={history.lead_profile}
                        content={history.content}
                        action={history.action}/>
                ))}
            </List>
        </div>
    );
}

History.propTypes = {
    histories: PropTypes.array
}
History.defaultProps = {
    histories: [
        {},
        {
            lead_profile: "/images/4.jpg",
            content: "으",
            action: (<Button variant="contained" disableElevation color='primary'>팔로우</Button>),
        },
        {
            lead_profile: "/users/3333.jpg",
            content: ":)"
        }
    ]
}
export default History;