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
            id: 0,
            name: "Robot Modeling",
            description: "The details...",
            image: "https://roborank.s3-us-west-1.amazonaws.com/robots.jpg"
        },
        {
            id: 1,
            name: "Rigid-Body Motion",
            description: "The details...",
            image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        },
        {
            id: 2,
            name: "Forward Kinematics",
            description: "The details...",
            image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        },
        {
            id: 3,
            name: "Inverse Kinematics",
            description: "The details...",
            image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        },
        {
            id: 4,
            name: "Dynamics",
            description: "The details...",
            image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        },
        {
            name: "Trajectory Generation",
            image: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
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