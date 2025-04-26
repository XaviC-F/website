const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define the directory containing your images
const imageDirectory = './public/images';
const outputPath = './public/image-metadata.json';

async function generateMetadata() {
  // Check if directory exists
  if (!fs.existsSync(imageDirectory)) {
    console.error('Error: Images directory does not exist:', imageDirectory);
    return;
  }

  // List all files in the directory
  const files = fs.readdirSync(imageDirectory);
  const metadata = {};

  // Process each image file
  for (const file of files) {
    if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      try {
        // Get actual dimensions using Sharp
        const dimensions = await sharp(path.join(imageDirectory, file)).metadata();
        metadata[file] = [dimensions.width, dimensions.height];
        console.log(`Processed: ${file} (${dimensions.width}x${dimensions.height})`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
        // Use fallback dimensions in case of error
        metadata[file] = [800, 600];
      }
    }
  }

  // Write the metadata to a JSON file
  fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
  console.log(`Metadata saved to ${outputPath}`);
  console.log(`Processed ${Object.keys(metadata).length} images`);
}

generateMetadata().catch(error => {
  console.error('Error generating metadata:', error);
});