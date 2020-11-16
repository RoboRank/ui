import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const cardStyles = makeStyles(() => ({
    root: {
        width: "30vw",
        height: "30vh",
        backgroundColor: "#282c34",
        color: "#D5EC05",
    }
}));

export default function Domain(props) {
    const classes = cardStyles();
    return (
        <Route render={({ history }) => (
            <Card className={classes.root} onClick={() => history.push(`/domains/${props.domain.id}`, props.domain)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={props.domain.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.domain.name}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary" component="p">
                        {props.domain.description}
                    </Typography> */}
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
            </CardActions> */}
            </Card>
        )} />
    )
};