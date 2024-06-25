import { Button, Stack } from "@mui/material"

function ButtonTypography() {
  return (
    <div>
        <Stack direction="row">
            <Button>Text</Button>
            <Button variant="contained" >Contained</Button>
            <Button variant="outlined" >Outlined</Button>
        </Stack>

        <Stack direction={"row"}>
            <Button color="warning">Sarı</Button>
            <Button color="error">kırmızı</Button>
            <Button color="info">Mavi</Button>
            <Button color="inherit">Siyah</Button>
            <Button color="primary">Mavi</Button>
            <Button color="secondary">Mor</Button>
            <Button color="success">Yeşil</Button>
        </Stack>

        <Stack direction={"row"}>
            <Button variant="contained" color="warning">Sarı</Button>
            <Button variant="contained" color="error">kırmızı</Button>
            <Button variant="contained" color="info">Mavi</Button>
            <Button variant="contained" color="inherit">Siyah</Button>
            <Button variant="contained" color="primary">Mavi</Button>
            <Button variant="contained" color="secondary">Mor</Button>
            <Button variant="contained" color="success">Yeşil</Button>
        </Stack>

        <Stack direction={"row"}>
            <Button variant="outlined" color="warning">Sarı</Button>
            <Button variant="outlined" color="error">kırmızı</Button>
            <Button variant="outlined" color="info">Mavi</Button>
            <Button variant="outlined" color="inherit">Siyah</Button>
            <Button variant="outlined" color="primary">Mavi</Button>
            <Button variant="outlined" color="secondary">Mor</Button>
            <Button variant="outlined" color="success">Yeşil</Button>
        </Stack>
    </div>
  )
}

export default ButtonTypography
