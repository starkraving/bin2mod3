const BaseDFA = require('./basedfa');

class Bin2Mod3 extends BaseDFA {
    possibleStates = ['S0', 'S1', 'S3'];
    possibleInputs = ['0', '1'];
    initialState = 'S0';
    allowedStates = ['S0', 'S1', 'S2'];

    reducer(intlState, input) {
        switch( intlState ) {
            case 'S0' :
                return ( input === '0' ) ? 'S0' : 'S1';

            case 'S1' :
                return ( input === '0' ) ? 'S2' : 'S0';

            case 'S2' :
                return ( input === '0' ) ? 'S1' : 'S2';

            default :
                return null;
        }
    }

    output(inputs) {
        const outputs = { S0: 0, S1: 1, S2: 2 };
        const o = super.output(inputs);

        return ( outputs.hasOwnProperty(o) ) ? outputs[o] : o;
    }
}

module.exports = Bin2Mod3;