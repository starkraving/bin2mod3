const dfa = require('./bin2mod3');

if ( process.argv.length < 3 ) {
    console.log('Missing argument');
    process.exit(1000);
}

console.log(dfa.output(process.argv.slice(2)));