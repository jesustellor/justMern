import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';

import useStyles from "./styles";

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const classes = useStyles();

    const handleSubmit = () => {
        
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography varient="h6">Creating a Memory</Typography>
                <TextField name="Creator" varient="outlined" label="Creator"fullWidthvalue={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="Title" varient="outlined" label="Title"fullWidthvalue={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="Message" varient="outlined" label="Message"fullWidthvalue={postData.message}onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="Tags" varient="outlined" label="Tags"fullWidthvalue={postData.tags}onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} />
            </div>
            <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>

        </Paper>
    )
}

export default Form;