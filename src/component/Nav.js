import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const Nav = () => {
    const navigate=useNavigate()
    const handleCloseNavMenu = () => {
navigate("/add")
    };

    return (
        <AppBar position="static" sx={{ width: '950px', }}>
            <Container sx={{ width: "1200px" }}>
                <Toolbar disableGutters>
                    <Typography
                        component="div"
                        sx={{ fontSize: "40px", display: "block", marginLeft: "5px" }}
                    >
                        EMPLOYEES
                    </Typography>
                    <Box sx={{ marginLeft: "480px" }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            variant="contained"
                            color="success"
                            sx={{ display: "block", fontSize: "15px" }}
                        >
                            Add Employees
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Nav;
