import React, { useState } from 'react'
import { DropzoneArea } from 'mui-file-dropzone'
import { ACCEPTED_FILES, MAX_FILES, MAX_SIZE_FILE } from './../settings'
import { Alert, AlertTitle, Snackbar } from '@mui/material'
import { CloudUpload } from '@mui/icons-material'

type Notification = {
  title: string
  message: string
  severity: "success" | "error" | "warning" | "info"
}

type DropzoneAreaAction = "ADD" | "DROP" | "DELETE" | "REJECTED"

const UploadImage = ({ onImageReady }: { onImageReady: (bool: boolean) => void }) => {
  const [files, setFiles] = useState()
  const [notification, setNotification] = useState<Notification | null>()

  const notify = (action: DropzoneAreaAction, args: any) => {
    setNotification(null)
    if (["ADD", "DROP"].includes(action)) {
      setNotification({ title: "Imagen agregada", message: "", severity: "success" })
      onImageReady(true)
    }

    if (action === "DELETE") {
      setNotification({ title: "Imagen borrada", message: "", severity: "success" })
      onImageReady(false)
    }

    if (action === "REJECTED") {
      let message = `Un error desconocido se generó subiendo la imagen, por favor intentelo de nuevo`
      if (args[0].size > MAX_SIZE_FILE) {
        message = `La imagen es superior al tamaño límite (${MAX_SIZE_FILE / 1024000}mb)`
      }

      if (ACCEPTED_FILES.includes(args[0].type)) {
        message = `La imagen es de un tipo desconocido`
      }
      setNotification({ title: "Error al subir la imagen", message: message, severity: "error" })
      onImageReady(false)
    }
  }

  return (
    <>
      {/* @ts-ignore */}
      <DropzoneArea
        dropzoneText="Coloque su imagen aquí o haga click para cargar"
        maxFileSize={MAX_SIZE_FILE}
        filesLimit={MAX_FILES}
        acceptedFiles={ACCEPTED_FILES}
        Icon={CloudUpload}
        showAlerts={false}
        onAdd={(args: any) => notify("ADD", args)}
        onDelete={(args: any) => notify("DELETE", args)}
        onDrop={(args: any) => notify("DROP", args)}
        onDropRejected={(args: any) => notify("REJECTED", args)}
        onChange={(files) => setFiles(files as any)} />
      <Snackbar
        open={Boolean(notification)}
        autoHideDuration={10000}
        onClose={() => { setNotification(null) }}
      >
        <Alert onClose={() => { setNotification(null) }} severity={notification?.severity} sx={{ width: '100%' }}>
          <AlertTitle>{notification?.title}</AlertTitle>
          {notification?.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default UploadImage