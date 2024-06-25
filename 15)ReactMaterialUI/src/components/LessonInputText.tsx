import { InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'

function LessonInputText() {
  return (
    <Stack>
        <Stack direction={"row"} spacing={5}>
            <TextField label={"Ad"} variant='outlined' />
            <TextField label={"Ad"} variant='filled' />
            <TextField label={"Ad"} variant='standard' />
        </Stack>

        <Stack direction={"row"} spacing={5}>
            <TextField label={"Ad"} variant='outlined' color='error' />
            <TextField label={"Ad"} variant='filled' color='error' />
            <TextField label={"Ad"} variant='standard' color='error' />
        </Stack>

        <Stack direction={"row"} spacing={5}>
            <TextField label={"Ad"} variant='outlined'helperText="Lütfen isminizi giriniz" />
        </Stack>
        
        <Stack direction={"row"} spacing={5}>
            <TextField InputProps={{startAdornment : (<InputAdornment position='start'>TR</InputAdornment>)}} label={"Ad"} variant='outlined'helperText="Lütfen para giriniz" />
        </Stack>

        
    </Stack>
    
  )
}

export default LessonInputText
