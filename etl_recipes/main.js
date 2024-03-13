//this file is the orchestrator of the ETL process

const { extractData } = require('./scripts/extract');
const { transformData } = require('./scripts/transform');
const { loadData } = require('./scripts/load');

async function runETL() {
    const url = 'https://api.example.com/data'; // Your data source URL
    const extractedData = await extractData(url);
    const transformedData = transformData(extractedData);
    await loadData(transformedData);
  
    console.log('ETL process completed successfully.');
}

runETL().catch(console.error);