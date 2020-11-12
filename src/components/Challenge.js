import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CodeBlock from './CodeBlock';

const cardStyles = makeStyles(() => ({
    root: {
        width: "85vw",
        backgroundColor: "#0D6A02",
        color: "#F5EBEB",
        borderRadius: 0,
        textAlign: "center"
    },
    root2: {
        width: "85vw",
        backgroundColor: "white",
        color: "black",
        borderRadius: 0
    },
    root3: {
        width: "85vw",
        backgroundColor: "#0D6A02",
        color: "#F5EBEB",
        borderRadius: 0,
        textAlign: "center"
    },
}));

export default function ChallengeCard(props) {
    const classes = cardStyles();
    console.log(props.challenge.image)
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h4">
                        {props.challenge.name}
                    </Typography>
                </CardContent>
            </ Card>
            <Card className={classes.root2}>
                <CardContent>
                    {props.challenge.description.map(para =>
                    (<div>
                        <Typography variant="body2" component="p">
                            {para}
                        </Typography>
                        <br />
                    </div>)
                    )}
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt={props.challenge.name}
                    image={props.challenge.image}
                    title={props.challenge.name}
                />
            </Card>
            <br/>
            <Card className={classes.root3}>
                <CardContent>
                    <Typography variant="h4">
                        Challenge
                    </Typography>
                </CardContent>
            </ Card>
            <Card className={classes.root2}>
                <CardContent>
                    {props.challenge.directions.map(para =>
                    (<div>
                        <Typography variant="body2" component="p">
                            {para}
                        </Typography>
                        <br />
                    </div>)
                    )}
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt={props.challenge.name}
                    image={props.challenge.challenge}
                    title={props.challenge.name}
                />
            </Card>
            <CodeBlock/>
        </div>
    )
};