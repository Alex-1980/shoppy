export async function uploadImage(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.nextTick.REACT_APP_CLOUDINARY_PRESET);
}