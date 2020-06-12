import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import HistoryBox from "../components/historyBox/HistoryBox";

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
                    <HistoryBox />
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
        {},
        {}
    ]
}
export default History;