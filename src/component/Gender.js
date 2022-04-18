import React from 'react'
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
function Gender({  formValues, handleInputChange }) {
    return (
        <Grid item sx={{ margin: "10px" }}>
            <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                    name="gender"
                    value={formValues.gender}
                    onChange={handleInputChange}
                    row
                >
                    <FormControlLabel
                        key="male"
                        value="male"
                        control={<Radio size="small" />}
                        label="Male"
                    />
                    <FormControlLabel
                        key="female"
                        value="female"
                        control={<Radio size="small" />}
                        label="Female"
                    />
                    <FormControlLabel
                        key="other"
                        value="other"
                        control={<Radio size="small" />}
                        label="Other"
                    />
                </RadioGroup>
            </FormControl>
        </Grid>
    )
}

export default Gender