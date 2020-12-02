import React, { useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Judge from './Judge';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/mode/clike/clike';
import './code.css'

import { judge } from '../services/judge';

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
    const [result, setResult] = useState({
        correct: false,
        incorrect: []
    });
    const [submission, setSubmission] = useState({
        code: "waiting on code..."
    });

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
                            indentUnit: 4
                        }}
                        className='.CodeMirror'
                        onChange={(editor, data, value) => {
                            setSubmission({
                                code: value
                            });
                        }}
                    />
                </CardContent>
                <Button variant="contained" style={{ background: "#f44336", color: "white", float: 'right', marginRight: '2.5em', marginBottom: '1em' }} onClick={() => {
                    judge(props.route, submission)
                        .then(res => {
                            setResult(res);
                            setFeedback(!feedback);
                        })
                }}>
                    Submit
                </Button>
            </ Card>
            {
                feedback && <Judge data={result} />
            }
        </div>
    )
};