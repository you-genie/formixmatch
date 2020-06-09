import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles/';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

function TextButton(props) {
    const {id, statistics, description} = props;
    return (
        <ButtonBase
            focusRipple
            key={id}>
            <Grid
                direction='column'
                container>
                <Typography variant='subtitle2'>
                    {statistics}
                </Typography>
                <Typography variant='caption'>
                    {description}
                </Typography>
            </Grid>

        </ButtonBase>
    )
}

export default TextButton;