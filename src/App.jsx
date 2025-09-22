import React from "react";
import { Box, Paper } from "@mui/material";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",     
        minHeight: "100vh",
        bgcolor: "#f0f0f0",
        p: 2, 
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 3,
          width: {
            xs: "100%",   // على الموبايل ياخد العرض كله
            sm: "500px",  // من أول شاشات صغيرة (تابلت) يبقى 500px
            md: "700px",  // على اللابتوب يبقى أوسع شوية
          },
          maxWidth: "100%", // مايزيدش عن حجم الشاشة أبداً
        }}
      >
        <Header />
        <TaskList />
        <AddTask />
      </Paper>
    </Box>
  );
}
