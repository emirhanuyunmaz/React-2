import { Box, Checkbox, FormControlLabel, FormGroup, InputLabel } from "@mui/material";
import { useState } from "react";

export default function LessonCheckbox(){
    const [ilkokul , setIlkokul] = useState(false)
    // console.log(ilkokul)

    const [dilListe,setDilListe] = useState<String[]>([])


    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        // console.log(e.target.name)
        let index = dilListe.indexOf(e.target.name)
        // console.log(index)
        if(index === -1) {
            setDilListe([...dilListe,e.target.name])
        } else{
            setDilListe(dilListe.filter((item) => item !== e.target.name))
        }
        console.log(dilListe)
    }

    return (<Box>
        <FormGroup>
            <InputLabel>Eğitim Durumu</InputLabel>
            <FormControlLabel control={<Checkbox/>} disabled label="İlkokul" />
            <FormControlLabel control={<Checkbox/>} label="Lise" />
            <FormControlLabel control={<Checkbox/>} checked label="Üniversite" />
        </FormGroup>

        <InputLabel>Eğitim Durumu</InputLabel>
        <FormGroup  row>
            <FormControlLabel control={<Checkbox value={ilkokul} onChange={(e) => setIlkokul(e.target.checked) } />}  label="İlkokul" />
            <FormControlLabel control={<Checkbox  />}  label="Lise" />
            <FormControlLabel control={<Checkbox />} label="Üniversite" />            
        </FormGroup>

        <InputLabel>Hangi Dilleri Biliyorsunuz</InputLabel>
        <FormGroup>
            <FormControlLabel control={<Checkbox name="java" onChange={(e) => handleChange(e)} />} label="Java" />
            <FormControlLabel control={<Checkbox name="js" onChange={(e) => handleChange(e)}/>} label="JS" />
            <FormControlLabel control={<Checkbox name="python" onChange={(e) => handleChange(e)}/>} label="Python" />
            <FormControlLabel control={<Checkbox name="c" onChange={(e) => handleChange(e)}/>} label="C" />
        </FormGroup>

    </Box>)
}