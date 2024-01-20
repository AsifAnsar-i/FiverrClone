import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/asifansari/image/upload", data);
    const { url } = res.data;
    return url;
  } catch (err) {
    console.error("Error uploading to Cloudinary:", err.response ? err.response.data : err.message);
    throw new Error("Failed to upload to Cloudinary");
  }
};

export default upload;
