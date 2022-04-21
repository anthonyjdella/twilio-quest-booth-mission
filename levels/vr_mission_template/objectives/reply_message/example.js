const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');
const PORT = 8767;
const app = express();
app.use(urlencoded({ extended: false }));

// This is a basic Express Server
// Create a route to handle incoming SMS messages
// This is where the magic happens!
app.post('/sms', (request, response) => {
  console.log(`Incoming message from ${request.body.From}: ${request.body.Body}`);
  response.type('text/xml')
  // You'll need to use a <Response> & <Message> Tag
  response.send(`
    // Replace this commented-out lines with your reply!"
  `);
});

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Express server listening on localhost:${PORT}`)
);