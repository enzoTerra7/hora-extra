import { v2 } from 'cloudinary'

v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
})

export async function uploadImage(file: any): Promise<string> {
  const result = await v2.uploader.upload(file?.path, { folder: 'my_folder' })
  return result.secure_url
}