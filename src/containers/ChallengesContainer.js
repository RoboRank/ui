import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import ChallengeCard from "../components/ChallengeCard"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function ChallengesContainer() {
    const classes = useStyles();
    const [spacing] = React.useState(2);
    const id = parseInt(useParams()["id"]);

    let domains = [
        {
            id: 0,
            name: "Robot Modeling",
            description: "The details...",
            challenges: [
                {
                    id: 0,
                    name: "Nomenclature & Topology",
                    description: [
                        "This challenge is aimed at developing familiarity with components and basic concepts in robot modeling. It will help develop domain specific vocabulary. Complete the functions in the code block below in order to return the appropiate solution corresponding to the challenge scene above the code block.",
                        "An overview of the relevant topic is provided below. Use what you know about robotics along with what has been provided to come up with the best solution and then return it from the functions in the code block below."
                    ],
                    image: "https://roborank.s3-us-west-1.amazonaws.com/challenges/dof.PNG",
                    challenge: "https://roborank.s3-us-west-1.amazonaws.com/challenges/mechanisms.PNG",
                    directions: [
                        "Return the proper name of the robot joint or the appropriate number of degrees of freedom of each mechanism.",
                    ]
                },
                {
                    id: 1,
                    name: "know it all"
                }
            ]
        },
        {
            id: 1,
            name: "Rigid-Body Motion",
            description: "The details...",
            challenges: [
                {
                    name: "nomenclature"
                }
            ]
        },
        {
            id: 2,
            name: "Forward Kinematics",
            description: "The details...",
            challenges: [
                {
                    name: "nomenclature"
                }
            ]
        }
    ]

    const domain = domains[id]

    return (
        <Grid container className={classes.root} spacing={3}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {domain.challenges.map((challenge) => {
                        return (
                            <Grid key={challenge.name} item>
                                <ChallengeCard challenge={challenge} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}