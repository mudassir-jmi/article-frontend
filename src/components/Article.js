import React, { useState } from 'react'
import axios from 'axios';
// import "./article.css";
import {Box, Button, InputLabel, TextField, Typography} from "@mui/material";

const labelStyles = {mb:1, mt:2, fontSize: '24px', fontWeight:'bold'}
const Article = () => {
  const [inputs, setInputs] = useState({
    title:"",
    keywords: "",
    description: "",
    attachment: ""

  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:4000/api/user/submit", {
      title: inputs.title,
      keywords: inputs.keywords,
      description: inputs.description,
      attachment: inputs.attachment

    }).catch(err=> console.log(err));
    const data = await res.data;
    return data;
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
    sendRequest().then(data=>console.log(data));
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <Box 
        border={3} borderColor="green"
         borderRadius={10}
         boxShadow="10px 10px 20px #ccc"
         padding={3} 
         margin={'auto'} 
         marginTop={3}
         display='flex' 
         flexDirection={'column'} 
         width={'60%'} height={'30%'}>

        <Typography fontWeight={'bold'} padding={3} color="grey" variant="h2" textAlign={'center'}>Post Your Article</Typography>
        <InputLabel sx= {labelStyles}>Article Title: </InputLabel>
        <TextField name="title" onChange={handleChange} value={inputs.title} margin='normal' variant='outlined' />

        <InputLabel sx={labelStyles}>Article Keywords: </InputLabel>
        <TextField name="keywords" onChange={handleChange} value={inputs.keywords}  margin='normal' variant='outlined' />

        <InputLabel sx={labelStyles}>Article Description: </InputLabel>
        <TextField name="description" onChange={handleChange} value={inputs.description}  margin='normal' variant='outlined' />

        <InputLabel sx={labelStyles}>Attachment: </InputLabel>
        {/* <TextField name="attachment" onChange={handleChange} 
        value={inputs.attachment}  margin='normal' variant='outlined' /> */}
          <input type="file" name="attachment" onChange={handleChange} 
          value={inputs.attachment}/>

        {/* <Button variant="contained" component="label">
          Upload File <input type="file" name="attachment" onChange={handleChange} 
          value={inputs.attachment}/>
        </Button> */}
       <Box width="30%" marginLeft="350px" textAlign={'center'}>
         <Button sx={{mt:4, borderRadius:4}} 
          variant="contained" color='warning' type="submit">Submit</Button></Box>
       </Box>
        
    </form>
  </div>
  }

// LrsNZzKLHKIHCfc6
export default Article;