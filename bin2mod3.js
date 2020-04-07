const Bin2Mod3 = require('./dfas/bin2mod3');

const dfa = new Bin2Mod3('S0', ['S0', 'S1', 'S2']);

exports.output = (inputs) => dfa.output(inputs);