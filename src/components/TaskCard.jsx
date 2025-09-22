import { Card, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function TaskCard(){
    return(
        <Card sx={{ bgcolor: "#22307a", color: "#fff", borderRadius: 1, display:"flex",flexDirection: "row-reverse",justifyContent:"space-around",width: { xs: "100%", sm: "500px", md: "700px" }}}>
            <CardContent sx={{ flex: "1 1 auto", textAlign: "right" }}>
                <Typography variant="h6">عنوان المهمة</Typography>
                <Typography variant="body2">الوصف أو التفاصيل</Typography>
            </CardContent>
            <CardActions sx={{  p: 1 }}>
                <IconButton sx={{ bgcolor: "#f3f1f1ff", color: "#a83810ff"}}>
                    <DeleteOutlinedIcon/>
                </IconButton>
                <IconButton sx={{ bgcolor: "#fff", color: "#1976d2", mr: 1 }} >
                    <ModeEditOutlinedIcon/>
                </IconButton>
                <IconButton sx={{ bgcolor: "#e5f0ebff", p: 1,color: "#1bbd33ff" }}>
                    <CheckCircleOutlineOutlinedIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}