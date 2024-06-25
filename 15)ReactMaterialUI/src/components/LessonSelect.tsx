import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function LessonSelect(){
    
    const [country , setCountry] = useState("")


    return(<Box width={"250px"}>
        <FormControl fullWidth>
            <InputLabel>Ülke Seçiniz</InputLabel>

            <Select value={country} onChange={(e) => setCountry(e.target.value)} >
                <MenuItem value={"TR"}>Türkiye</MenuItem>
                <MenuItem value={"USA"}>ABD</MenuItem>
                <MenuItem value={"FR"}>Franch</MenuItem>
            </Select>
        </FormControl>

    </Box>)
}