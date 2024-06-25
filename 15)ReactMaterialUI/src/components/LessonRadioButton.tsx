import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

export default function LessonRadioButton(){
    const [maas , setMaas] = useState("2000$")

    console.log(maas)

    return(<>
    
        <FormControl>
            <FormLabel>Maaş miktarı</FormLabel>
            <RadioGroup row name="radio-group" value={maas} onChange={(e) => {
                setMaas(e.target.value)
            }}>
                <FormControlLabel value={"2000$"} control={<Radio/>} label="2000$" />
                <FormControlLabel value={"3000$"} control={<Radio/>} label="3000$" />
                <FormControlLabel value={"4000$"} control={<Radio/>} label="4000$" />
                <FormControlLabel value={"5000$"} control={<Radio/>} label="5000$" />
                <FormControlLabel value={"6000$"} control={<Radio/>} label="6000$" />



            </RadioGroup>


        </FormControl>
    
    </>)
}