const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context) => {
  // 1. Only POST request allowed
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // 2. Parse data
  const data = JSON.parse(event.body || '{}');
  if (!data.name || !data.mobile || !data.exam) {
    return { statusCode: 400, body: 'Missing required fields' };
  }

  // 3. Load service account from environment variable (recommended)
  const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT || '{}');

  const doc = new GoogleSpreadsheet('1lx3kccrHN9FhEKtitd68vBl89GExheFVDteuE9OV2lg');
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // pehla sheet

    await sheet.addRow({
      'Name': data.name,
      'Mobile No.': data.mobile,
      'What are you Preparing for?': data.exam,
      'Timestamp': new Date().toLocaleString("en-IN")
    });

    return { statusCode: 200, body: JSON.stringify({ result: 'success' }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ result: 'error', error: err.message }) };
  }
};
