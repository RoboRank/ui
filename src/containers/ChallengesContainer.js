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
                    route: "joints",
                    name: "Nomenclature & Topology",
                    description: [
                        "This challenge is aimed at developing familiarity with components and basic concepts in robot modeling. It will help develop domain specific vocabulary. Complete the functions in the code block below in order to return the appropiate solution corresponding to the challenge scene above the code block.",
                        "An overview of the relevant topic is provided below. Use what you know about robotics along with what has been provided to come up with the best solution and then return it from the functions in the code block below."
                    ],
                    image: "https://roborank.s3-us-west-1.amazonaws.com/nomenclature.png",
                    notes: [
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/dof.PNG"
                    ],
                    challenges: [
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/mechanisms.PNG",
                    ],
                    directions: [
                        "Return the proper name of the robot joint or the appropriate number of degrees of freedom of each mechanism.",
                    ],
                    code: `#include <iostream>
#include <memory>
#include <stack>
#include <vector>

using namespace std;

vector<string> joints()
{
    vector<string> joint_names;
    /*
        Return the type of one of the joints contained in each frame starting
        from the top and stopping before the last three objects, i.e. ignore
        the last three images.
    */
    return joint_names;
}

vector<int> degrees_of_freedom()
{
    vector<int> dof;
    /*
        Calculate the degrees of freedom of each of the last three objects using
        Grubler's formula. Return it in a vector of ints in the same order as the
        images.
    */
    return dof;
}

int main(int argc, char** argv)
{
    vector<string> js = joints();
    vector<int> dof = degrees_of_freedom();
    for(auto j: js) {
    	cout << j << endl;
    }
    for(auto d: dof) {
        cout << d << endl;
    }
}
                    `
                },
                {
                    id: 1,
                    route: "cspace",
                    name: "Configuration Space",
                    image: "https://roborank.s3-us-west-1.amazonaws.com/moebius_surface.jpg",
                    description: [
                        "The challenge was designed to develop an understanding of configuration space topology. It requires the ability to discern the task spaces and workspaces of different mechanisms and robots and identify the topology of different systems.",
                        "An overview of the relevant topic is provided below. Use what you know about robotics along with what has been provided to come up with the best solution and then return it from the functions in the code block below."
                    ],
                    notes: [
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/c-space-notes-1.png",
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/c-space-notes-2.png"
                    ],
                    challenges: [
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/football.png",
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/soccer-field.png",
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/toroid.png",
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/robot-arm.png",
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/r2d2.png",
                        "https://roborank.s3-us-west-1.amazonaws.com/challenges/3d-printer.png"
                    ],
                    directions: [
                        "Return the appropriate topology of the first three objects in order from the top item to the third item. Then, for the next two items, return the workspace topology. For the last item, return the taskspace topology.",
                        "The code block gives further guidance as the to the formatting requirements."
                    ],
                    code: `#include <iostream>
#include <memory>
#include <stack>
#include <vector>

using namespace std;

vector<string> topology()
{
    vector<string> topologies;
    /*
        Return the topologies of the first three object. Do not worry about the small details of the objects, but instead, infer the topology of the general shape. Use the two character abbreviations of general topological spaces. For example, the string, S2, would refer to a sphere while S1 refers to a circle.
    */
    return topologies;
}

vector<string> workspace()
{
    vector<string> workspace;
    /*
        Return the workspace topologies of the next two items using the same abbreviated format as the topologies() function.
    */
    return workspace;
}

vector<string> taskspace()
{
    vector<string> taskspace;
    /*
        Return the taskspace topology of the last item using the same abbreviated format as the topologies() function.
    */
    return taskspace;
}

int main(int argc, char** argv)
{
    vector<string> top = topology();
    vector<string> ws = workspace();
    vector<string> ts = taskspace();
    for(auto t: top) {
    	cout << t << endl;
    }
    for(auto w: ws) {
        cout << w << endl;
    }
    for(auto s: ts) {
        cout << s << endl;
    }
}
                    `
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