const { extractData } = require('./extract.js');

async function testExtract() {
    try {
        const data = await extractData();
        console.log("Extracted Data:", JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error during extraction test:", error);
    }
}

testExtract();
