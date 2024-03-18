# grommailpasha-module

grommailpasha-module is a Node.js module that provides a collection of utility functions for various tasks.

## Installation

You can install this module via npm: `npm install grommailpasha-module`

## Usage

```javascript
const utils = require('genius-utils');

// Fetch and parse HTML content from a website
utils.fetchAndParseHTML('https://example.com')
    .then(($) => {
        // Do something with the parsed HTML using cheerio
        console.log($('title').text());
    })
    .catch((error) => {
        console.error(error.message);
    });

// Get the current date and time
console.log(utils.getCurrentDateTime());

// Capitalize the first letter of each word in a string
console.log(utils.capitalizeWords('hello world')); // Output: 'Hello World'
```

