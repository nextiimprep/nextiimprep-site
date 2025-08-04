const fs = require("fs");
const path = require("path");

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  // Parse incoming data
  const data = JSON.parse(event.body);

  // Simple validation
  if (!data.name || !data.mobile || !data.exam) {
    return {
      statusCode: 400,
      body: JSON.stringify({ result: "error", msg: "Missing fields" }),
    };
  }

  // Save lead as a new line in CSV file (can open in Excel/Google Sheet)
  const filePath = path.resolve(__dirname, "leads.csv");
  const line = `${new Date().toLocaleString()},${data.name},${data.mobile},${data.exam}\n`;
  fs.appendFileSync(filePath, line);

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" }, // CORS for frontend
    body: JSON.stringify({ result: "success" }),
  };
};

