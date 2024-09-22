const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the folder where text files will be stored
const folderPath = path.join(__dirname, 'files');

// Create the 'files' directory if it doesn't exist
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

// POST endpoint to create a new text file with the current timestamp
app.post('/create-file', (req, res) => {
    // Get the current timestamp
    const currentTimestamp = new Date().toISOString().replace(/:/g, '-');

    // Filename is based on the current timestamp
    const filename = `${currentTimestamp}.txt`;  

    // Full path to the new file
    const filePath = path.join(folderPath, filename);  

    // Write the timestamp into the file
    fs.writeFile(filePath, currentTimestamp, (err) => {
        if (err) {
            return res.status(500).send('Error creating the file');
        }
        res.send(`File ${filename} created successfully`);
    });
});

// GET endpoint to list all text files in the folder
app.get('/files', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading the directory');
        }

        // Filter out only '.txt' files
        const textFiles = files.filter(file => path.extname(file) === '.txt');

        // Respond with a JSON array of filenames
        res.json(textFiles); 
    });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on Server running on http://localhost:${PORT}}`);
});