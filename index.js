const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');

// Function to fetch and parse HTML content from a website
async function fetchAndParseHTML(url) {
    try {
        const response = await axios.get(url);
        return cheerio.load(response.data);
    } catch (error) {
        throw new Error(`Error fetching ${url}: ${error.message}`);
    }
}

// Function to get the current date and time
function getCurrentDateTime() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

module.exports = {
    fetchAndParseHTML,
    getCurrentDateTime,
    capitalizeWords
};
