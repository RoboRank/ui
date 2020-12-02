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

import { judge } from '../services/judge';

const cardStyles = makeStyles(() => ({
    root: {
        width: "85vw",
        // backgroundColor: "#0D6A02",
        // color: "#F5EBEB",
        borderRadius: 0
    }
}));

export default function Judge(props) {
    return (
        <Card>
            {props.data.incorrect.map((ans, i) => (
                    <Typography key={i}>
                        {ans + '\n'}
                    </Typography>
                )
            )}
        </Card>
    )
};