const fs = require('fs');
const logContent = fs.readFileSync('C:\\Users\\User\\.gemini\\antigravity\\brain\\b15708fb-9378-4133-9a2e-303fdfc54315\\.system_generated\\logs\\overview.txt', 'utf8');

const regex = /1: import \{ useState \} from 'react';[\s\S]*?export default App;/g;
const matches = [...logContent.matchAll(regex)];

if (matches.length > 0) {
    let extracted = matches[matches.length - 1][0]; // get the last occurrence
    const lines = extracted.split('\n');
    const cleanedLines = lines.map(line => {
        const match = line.match(/^\d+:\s(.*)/);
        return match ? match[1] : (line.match(/^\d+:(.*)/) ? line.match(/^\d+:(.*)/)[1] : line);
    });
    
    fs.writeFileSync('src/App.tsx', cleanedLines.join('\n') + '\n', 'utf8');
    console.log("Successfully extracted and restored App.tsx");
} else {
    console.log("Could not find the content in the log.");
}
