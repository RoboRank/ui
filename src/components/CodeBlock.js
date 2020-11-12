import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/mode/clike/clike';

const cardStyles = makeStyles(() => ({
    root: {
        width: "85vw",
        // backgroundColor: "#0D6A02",
        // color: "#F5EBEB",
        borderRadius: 0,
        textAlign: "center"
    }
}));

export default function CodeBlock(props) {
    const classes = cardStyles();
    return (
        <div>
            <br />
            <Card className={classes.root}>
                <CardContent>
                    <CodeMirror
                        value='<h1>I ♥ react-codemirror2</h1>'
                        options={{
                            mode: 'text/x-c++src',
                            theme: 'darcula',
                            lineNumbers: true
                        }}
                        onChange={(editor, data, value) => {
                        }}
                    />
                </CardContent>
            </ Card>
        </div>
    )
};