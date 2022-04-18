import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Gender from "./Gender";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import State from "./State";
import SlideBar from "./SlideBar";
import { useNavigate } from "react-router-dom";
import MuiPhoneNumber from "material-ui-phone-number";
const Add = () => {
  const defaultValues = {
    id: Math.random(),
    name: "",
    mobile: "",
    gender: "",
    email: "",
    address: "",
    state: "",
    city: "",
    date: "",
    password: "",
    cricket: false,
    "kho-kho": false,
    comunication: "",
  };
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("data"));
    let arr = JSON.parse(localStorage.getItem("data"))
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    arr.push(formValues);
    localStorage.setItem("data", JSON.stringify(arr));
    alert("Data added successfully!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "#ffffe6" }}>
      <Grid
        container
        alignItems="center"
        border="1px solid black"
        display="column"
        marginLeft="410px"
        width="500px"
        height="500px"
        marginTop="20px"
        backgroundColor="#ffffe6"
      >
        <FormLabel sx={{ width: "100%", paddingLeft: "20px" }}>
          <h3> Employees Info</h3>
        </FormLabel>

        <Grid item sx={{ margin: "4px" }}>
          <TextField
            required
            id="outlined-required"
            label="Name"
            name="name"
            type="text"
            inputProps={{ style: { fontSize: 15, width: 160 } }}
            InputLabelProps={{ style: { fontSize: 10 } }}
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sx={{ margin: "4px" }}>
          <TextField
            id="outlined-required"
            label="Email"
            name="email"
            type="email"
            inputProps={{ style: { fontSize: 15, width: 160 } }}
            InputLabelProps={{ style: { fontSize: 10 } }}
            value={formValues.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sx={{ margin: "4px" }}>
          <MuiPhoneNumber
            defaultCountry={"in"}
            name="mobile"
            value={formValues.mobile}
            label="Mobile"
            onChange={(e) =>
              setFormValues({ ...formValues, mobile:e })}
            
            inputProps={{ style: { fontSize: 15, width: 160 } }}
            InputLabelProps={{ style: { fontSize: 10 } }}
          />
        </Grid>
        <Gender formValues={formValues} handleInputChange={handleInputChange} />
        <Grid item sx={{ margin: "4px", width: "100%" }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={4}
            placeholder="Address"
            name="address"
            onChange={handleInputChange}
            style={{ width: "50%", backgroundColor: "#ffffe6" }}
          />
        </Grid>
        <State setFormValues={setFormValues} formValues={formValues} />
        <Grid item sx={{ margin: "4px" }}>
          <FormGroup sx={{ display: "inline", width: "40%" }}>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    typography: "body2",
                    "& .MuiSvgIcon-root": { fontSize: 10 },
                  }}
                />
              }
              label="Cricket"
              name="cricket"
              sx={{ height: "10px" }}
              checked={formValues.cricket}
              onChange={(e) =>
                setFormValues({ ...formValues, cricket: !formValues.cricket })
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    typography: "body2",
                    "& .MuiSvgIcon-root": { fontSize: 10 },
                  }}
                />
              }
              label="Kho-Kho"
              name="kho-kho"
              checked={formValues["kho-kho"]}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  "kho-kho": !formValues["kho-kho"],
                })
              }
            />
          </FormGroup>
        </Grid>
        <Grid item sx={{ margin: "4px" }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div sx={{ display: "flex" }}>
              <TextField
                id="date"
                label="Date of Birth"
                type="date"
                inputProps={{ style: { fontSize: 10 } }}
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: 10 },
                }}
                onChange={(e) =>
                  setFormValues({ ...formValues, date: e.target.value })
                }
                fullWidth
                required
              />
            </div>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item sx={{ margin: "4px" }}>
          <TextField
            required
            id="outlined-required"
            label="Password"
            name="password"
            type="password"
            inputProps={{ style: { fontSize: 15, width: 160 } }}
            InputLabelProps={{ style: { fontSize: 10 } }}
            value={formValues.password}
            onChange={handleInputChange}
          />
        </Grid>
        <SlideBar setFormValues={setFormValues} formValues={formValues} />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            margin: "5px",
            width: "100px",
            height: "35px",
            marginLeft: "50px",
          }}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Add;
