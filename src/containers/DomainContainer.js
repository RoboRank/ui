import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Domain from "../components/Domain"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function DomainContainer() {
    const classes = useStyles();
    const [spacing] = React.useState(2);

    const domains = [
        {
            name: "Robot Modeling",
            description: "The details..."
        },
        {
            name: "Rigid-Body Motion"
        },
        {
            name: "Forward Kinematics"
        },
        {
            name: "Inverse Kinematics"
        },
        {
            name: "Dynamics"
        },
        {
            name: "Trajectory Generation"
        },
    ]
    return (
        <Grid container className={classes.root} spacing={3}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {domains.map((domain) => (
                        <Grid key={domain.name} item>
                            <Domain domain={domain} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}