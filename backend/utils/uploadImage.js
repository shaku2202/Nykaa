const cloudinary = require('cloudinary').v2;

// Initialize Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'cloudinary',
  api_key: '512858974135942',
  api_secret: 'akkdewdpwjeiendowdm2332pdkke',
});

// Upload image to Cloudinary
async function uploadImage(image) {
  try {
    const result = await cloudinary.uploader.upload(image, { folder: 'kanban_board_avatars' });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    return null;
  }
}

module.exports = uploadImage;
