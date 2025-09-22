
import { Box, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddTask() {
    return (
        <Box sx={{ display: "flex", gap: 1, mt: 2,flexDirection: "row-reverse" }}>
        <TextField fullWidth placeholder="عنوان المهمة" />
        <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ backgroundColor: "#962939" }}
        >
            إضافة
        </Button>
        </Box>
    );
}
