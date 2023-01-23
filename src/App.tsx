import React, { useState } from 'react'
import AppBar from './components/AppBar'
import {
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  Button
} from '@mui/material'
import themeOptions from './theme'
import UploadImage from './components/UploadImage'

const App = () => {
  const [imageReady, setImageReady] = useState(false)

  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <AppBar />
      <Grid container item spacing={4} sx={{ p: 5 }}>
        <Grid item xs={12}>
          <Typography sx={{ opacity: 0.6 }}>
            Aquí iría una breve descripción de la herramienta y del cómo usarla
          </Typography>
        </Grid>
        <Grid item xs={12} justifyContent="center" display="flex">
          <Paper elevation={5} sx={{ maxWidth: 600 }}>
            <UploadImage onImageReady={setImageReady} />
          </Paper>
        </Grid>
        <Grid item xs={12} justifyContent="center" display="flex">
          <Button variant="contained" disabled={!imageReady}>Analizar</Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App