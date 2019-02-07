This implementation uses an asynchronous function to read in the external JSON file. It does this with an XMLHttpRequest.

This decision was made due the constraint of not using any external libraries like jQuery for AJAX.

Because of this, the file was be loaded on a server so that the request can be properly made. Without a server, the browser will most likely block the request due to COSR.

In my development environment, I used the node package `live-server`

*  npm install -g live-server
*  Navigate to root directory
*  Run command `live-server`

This will open up the index.html file in your default browser and it should be able to read in the JSON file properly

