const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context) => {
  console.log("Function triggered!"); // Start log

  // 1. Only POST request allowed
  if (event.httpMethod !== 'POST') {
    console.log("Wrong HTTP method:", event.httpMethod);
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // 2. Parse data
  let data;
  try {
    data = JSON.parse(event.body || '{}');
    console.log("Parsed data:", data);
  } catch (parseErr) {
    console.error("JSON parse error:", parseErr);
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  if (!data.name || !data.mobile || !data.exam) {
    console.log("Missing fields:", data);
    return { statusCode: 400, body: 'Missing required fields' };
  }

  // 3. Load service account from environment variable (recommended)
  let creds;
  try {
    creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT || '{}');
    console.log("Loaded creds:", !!creds.client_email); // Will be false if not loaded
  } catch (credsErr) {
    console.error("Env creds error:", credsErr);
    return { statusCode: 500, body: 'Service Account Error' };
  }

  const doc = new GoogleSpreadsheet('1lx3kccrHN9FhEKtitd68vBl89GExheFVDteuE9OV2lg');
  try {
    await doc.useServiceAccountAuth(creds);
    console.log("Authenticated to Google Sheets!");
    await doc.loadInfo();
    console.log("Sheet loaded:", doc.title);

    const sheet = doc.sheetsByIndex[0]; // pehla sheet
    console.log("Using sheet:", sheet.title);

    // NOTE: Column names are CASE SENSITIVE
    await sheet.addRow({
      'Name': data.name,
      'Mobile No.': data.mobile,
      'Exam': data.exam,
      'Timestamp': new Date().toLocaleString("en-IN")
    });

    console.log("Row added successfully!");
    return { statusCode: 200, body: JSON.stringify({ result: 'success' }) };

  } catch (err) {
    console.error("Main function error:", err); // IMPORTANT
    return { statusCode: 500, body: JSON.stringify({ result: 'error', error: err.message }) };
  }
};
