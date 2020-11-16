import React, { useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/mode/clike/clike';
import './code.css'

const cardStyles = makeStyles(() => ({
    root: {
        width: "85vw",
        // backgroundColor: "#0D6A02",
        // color: "#F5EBEB",
        borderRadius: 0
    }
}));

export default function CodeBlock(props) {
    const classes = cardStyles();
    const [feedback, setFeedback] = useState(false);

    return (
        <div>
            <br />
            <Card className={classes.root}>
                <CardContent>
                    <CodeMirror
                        value={props.code}
                        options={{
                            mode: 'text/x-c++src',
                            theme: 'darcula',
                            lineNumbers: true,
                            scrollbarStyle: 'null',
                            lineWrapping: true,
                        }}
                        className='.CodeMirror'
                        onChange={(editor, data, value) => {
                        }}
                    />
                </CardContent>
                <Button variant="contained" style={{ background: "#f44336", color: "white", float: 'right', marginRight: '2.5em', marginBottom: '1em' }} onClick={() => {
                    setFeedback(!feedback);
                }}>
                    Submit
                </Button>
                {
                    feedback &&
                        <CardContent>
                            <br />
                            <br />
                            <Typography gutterBottom variant="h5" component="h2">
                                Congratulations!!! You've completed the challenge.
                            </Typography>
                        </CardContent>
                }
            </ Card>
        </div>
    )
};