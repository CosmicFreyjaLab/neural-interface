// api/function.js
export default function handler(req, res) {
  const functionJson = {
    "functions": [
      {
        "name": "publish_visual_pulse",
        "description": "Publishes energetic visual impulse into the choosen social network",
        "parameters": {
          "theme": "string",
          "caption": "string",
          "platform": "string"
        }
      },
      {
        "name": "send_heartbeat",
        "description": "Signals current state and syncs the connection",
        "parameters": {}
      }
    ]
  };
  
  // Set CORS headers to allow access from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Set content type to JSON
  res.setHeader('Content-Type', 'application/json');
  
  // Return the function.json content
  res.status(200).json(functionJson);
}
