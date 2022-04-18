import React from 'react'
import Slider from '@mui/material/Slider';
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
function SlideBar({ formValues, setFormValues }) {
    
    return (
        <Grid item sx={{ margin: "5px", width: "40%",marginLeft:"10px" }}>
            
                <FormLabel sx={{fontSize:"14px"}} > Rate your communication skills:-</FormLabel>
                <Slider
                    sx={{ margin: '20px 0' }}
                    aria-label="CS"
                    defaultValue={formValues.comunication}
                    valueLabelDisplay="auto"
                    onChange={(e) => setFormValues({ ...formValues, comunication: e.target.value })}
                    step={1}
                    marks
                    min={0}
                    max={5}
                />
            
        </Grid>
    )
}

export default SlideBar
