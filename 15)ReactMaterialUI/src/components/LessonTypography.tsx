import { Typography } from "@mui/material"


function LessonTypography() {
  return (
    <div>
      LessonThypography
      <Typography variant="h1">
        Başlık 1
      </Typography>

      <Typography variant="h2">
        Başlık 2
      </Typography>

      <Typography variant="h3">
        Başlık 3
      </Typography>

      <Typography variant="h4">
        Başlık 4
      </Typography>

      <Typography variant="h5">
        Başlık 5
      </Typography>

      <Typography variant="h6">
        Başlık 6
      </Typography>

      {/* Buradaki işlem sayesinde h1 css ile h1 etketini birleştirir */}
      <Typography variant="h1" component="h3">
        Başlık 1
      </Typography>

      <Typography variant="h5" align="left">
        Başlık 5
      </Typography>

      <Typography variant="h5" align="right">
        Başlık 5
      </Typography>

    </div>
  )
}

export default LessonTypography
