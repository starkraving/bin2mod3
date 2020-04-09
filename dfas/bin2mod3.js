const BaseDFA = require('./basedfa');

class Bin2Mod3 extends BaseDFA {
    static STATE0 = 'S0';
    static STATE1 = 'S1';
    static STATE2 = 'S2';
    static INPUT0 = '0';
    static INPUT1 = '1';

    possibleStates = [ Bin2Mod3.STATE0, Bin2Mod3.STATE1, Bin2Mod3.STATE2 ];
    possibleInputs = [ Bin2Mod3.INPUT0, Bin2Mod3.INPUT1 ];
    initialState   = Bin2Mod3.STATE0;
    allowedStates  = [ Bin2Mod3.STATE0, Bin2Mod3.STATE1, Bin2Mod3.STATE2 ];

    reducer(intlState, input) {
        switch( intlState ) {
            case Bin2Mod3.STATE0 :
                return ( input === Bin2Mod3.INPUT0 ) ? Bin2Mod3.STATE0 : Bin2Mod3.STATE1;

            case Bin2Mod3.STATE1 :
                return ( input === Bin2Mod3.INPUT0 ) ? Bin2Mod3.STATE2 : Bin2Mod3.STATE0;

            case Bin2Mod3.STATE2 :
                return ( input === Bin2Mod3.INPUT0 ) ? Bin2Mod3.STATE1 : Bin2Mod3.STATE2;

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