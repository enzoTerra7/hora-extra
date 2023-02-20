import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface Props {
  saveFile?: any
  children: any
  preview?: any
}

export const MyDropzoneFiles: React.FC<Props> = ({
  saveFile,
  children,
  preview
}) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0]
      const uri = URL.createObjectURL(file)

      if(saveFile){
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //   const base64 = reader.result
        //   console.log(base64)
        //   saveFile(base64)
        // }
        saveFile(file)
        console.log(file)
      }
      if(preview){
        preview(uri)
        console.log(uri)
      }
    },
    [saveFile, preview]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'application/x-freearc': ['.jpg', '.jpeg', '.png']
    }
  })

  return (
    <div style={{width: '100%'}} {...getRootProps()}>
      <input {...getInputProps()} />
        {children}
    </div>
  )
}

export const MyDropzoneDocs: React.FC<Props> = ({
  saveFile,
  children,
  preview
}) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0]
      const uri = URL.createObjectURL(file)

      if(saveFile){
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //   const base64 = reader.result
        //   console.log(base64)
        //   saveFile(base64)
        // }
        saveFile(file)
        console.log(file)
      }
      if(preview){
        preview(uri)
        console.log(uri)
      }
    },
    [saveFile, preview]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'application/x-freearc': ['.docx', '.pdf']
    }
  })

  return (
    <div style={{width: '100%'}} {...getRootProps()}>
      <input {...getInputProps()} />
        {children}
    </div>
  )
}