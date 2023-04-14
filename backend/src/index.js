const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, (error) => {
    if(!error) {
        console.log(`Server is running on port ${PORT}`);
    }
    else {
        console.log("Error occurred", error);
    }
})