const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3005;

// Middleware to parse JSON requests
app.use(bodyParser.json());
try {
    
    app.post('/data', (req, res) => {
        console.log(req.body);
    
        // Send the response
        return res.status(200).json({
            success: true,
            message: 'Request received successfully',
            data: req.body
        });
    });
} catch (error) {
 console.log(error);   
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
