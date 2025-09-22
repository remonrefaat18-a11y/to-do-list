
import { Stack } from "@mui/material";
import TaskCard from "./TaskCard";

export default function TaskList() {
    return (
    <Stack spacing={2} sx={{mt:2}}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
    </Stack>
    );
}
