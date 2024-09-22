### Node.js File System API

This project is a simple Node.js API that allows users to create text files with the current timestamp and retrieve all text files from a specified folder. The API is built using Express and the Node.js File System (fs) module.

### Starting the Server

The server will start on http://localhost:3000. 

### API Endpoints

The API provides the following endpoints:

1. Create a Text File with the Current Timestamp

Method: POST
Description: Creates a text file in the files directory with the current timestamp as the filename and content.

Example Request:
POST - http://localhost:3000/create-file

Example Response:
{
  "message": "File 2024-09-22T15-01-49.365Z.txt created successfully"
}

2. Retrieve All Text Files

Method: GET
Description: Retrieves a list of all .txt files in the files directory.

Example Request:
GET - http://localhost:3000/files

Example Response:
[
   "2024-09-22T15-00-27.916Z.txt",
    "2024-09-22T15-01-10.116Z.txt",
    "2024-09-22T15-01-49.365Z.txt"
]