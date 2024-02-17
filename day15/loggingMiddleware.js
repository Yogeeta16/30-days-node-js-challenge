// loggingMiddleware.js

function loggingMiddleware(req, res, next) {

    const timestamp = new Date().toISOString();
  
    const { method, url, headers, body } = req;
 
   // Log the timestamp
   console.log(`Timestamp: [${timestamp}]`);

   // Log the HTTP method
   console.log(`Method: ${method}`);
 
   // Log the URL
   console.log(`URL: ${url}`);
  
  
    console.log('Headers:');
    for (let header in headers) {
      console.log(`${header}: ${headers[header]}`);
    }
  
    if (body && Object.keys(body).length > 0) {
      console.log('Body:');
      console.log(body);
    }
  
    next();
  }
  
  module.exports = loggingMiddleware;
  