import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
function State({ setFormValues, formValues }) {
  const [auth_token, setAuth_token] = useState();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.universal-tutorial.com/api/getaccesstoken", {
        headers: {
          Accept: "application/json",
          "api-token":"dlFCJbB5eC__4CpnsB7PROJr6Fp-oIAlePVWjvC-TMgDXgxMgX37uO-EF8Pdilbo4tM",
          "user-email": "jotibaharane1906@gmail.com",
        },
      })
      .then((res) => {
        setAuth_token(res.data.auth_token);
        getStates(res.data.auth_token);
      });
  }, []);
  useEffect(() => {
    if (formValues.state !== "") {
      getCities();
    }
  }, [formValues.state]);

  const getStates = async (auth_token) => {
    const res = await axios.get(
      "https://www.universal-tutorial.com/api/states/India",
      {
        headers: {
          Authorization: `Bearer ${auth_token}`,
          Accept: "application/json",
        },
      }
    );
    setStates(res.data);
  };

  const getCities = async () => {
    const res = await axios.get(
      `https://www.universal-tutorial.com/api/cities/${formValues.state}`,
      {
        headers: {
          Authorization: `Bearer ${auth_token}`,
          Accept: "application/json",
        },
      }
    );
    setCities(res.data);
  };

  return (
    <Grid item sx={{ margin: "5px", display: "flex" }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={states.map((states) => ({
          ...states,
          label: states.state_name,
        }))}
        value={formValues.state ? formValues.state : ""}
        onChange={(e, val) =>
          setFormValues({ ...formValues, state: val.state_name })
        }
        renderInput={(params) => (
          <TextField {...params} label="State" required />
        )}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities.map((city) => ({ ...city, label: city.city_name }))}
        value={formValues.city ? formValues.city : ""}
        onChange={(e, val) =>
          setFormValues({ ...formValues, city: val.city_name })
        }
        renderInput={(params) => (
          <TextField {...params} label="City" required />
        )}
      />
    </Grid>
  );
}

export default State;
