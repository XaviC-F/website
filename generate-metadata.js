const fs = require('fs');
const path = require('path');

// Define the directory containing your images
const imageDirectory = './public/images';
const outputPath = './public/image-metadata.json';

// List all files in the directory
const files = fs.readdirSync(imageDirectory);
const metadata = {};

// Process each image file
files.forEach(file => {
  if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
    // Since we can't get dimensions without loading the image,
    // we'll set placeholder values that will be replaced by the browser
    metadata[file] = [800, 600]; // Default placeholder size
  }
});

// Write the metadata to a JSON file
fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
console.log('Image metadata generated successfully!');