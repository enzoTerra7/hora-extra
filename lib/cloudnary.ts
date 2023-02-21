import { v2 } from 'cloudinary'

v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
})

export async function uploadImage(file: any): Promise<string> {
  const usingFile =  await JSON.parse(file as string)
  console.log('parsed', usingFile)
  const result = await v2.uploader.upload(usingFile?.path, { folder: 'my_folder' })
  console.log('resultado uri', result)
  return result.secure_url
}