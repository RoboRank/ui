import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link, Route, useParams } from "react-router-dom";
import Challenge from "../components/Challenge"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function ChallengeContainer(props) {
    const classes = useStyles();
    const [spacing] = React.useState(2);
    const id = parseInt(useParams()["id"]);
    return (
        <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid key={props.location.state.challenge.name} item>
                        <Challenge challenge={props.location.state.challenge} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}