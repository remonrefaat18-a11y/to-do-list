import React from "react";
import {
    Box,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    } from "@mui/material";

export default function Header() {
    return (
        <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#962939", mb: 2 }}
        >
            To-Do List
        </Typography>

        <ToggleButtonGroup
            value="all"   // قيمة افتراضية عشان يبان زرار متحدد
            exclusive
            color="primary"
        >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="done">Done</ToggleButton>
            <ToggleButton value="notdone">Not Done</ToggleButton>
        </ToggleButtonGroup>
        </Box>
    );
    }
