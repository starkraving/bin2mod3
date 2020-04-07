class BaseDFA {
    possibleStates;
    possibleInputs;
    initialState;
    allowedStates;

    constructor(initialState, allowedStates) {
        this.initialState = initialState;
        this.allowedStates = allowedStates;
    }

    reducer(intlState, input) {
        return intlState;
    }

    getFinalState(inputs) {
        if ( 
                   !Array.isArray(inputs)
                || !Array.isArray(this.possibleStates)
                || !Array.isArray(this.possibleInputs)
                || typeof this.initialState !== 'string'
                || !Array.isArray(this.allowedStates)
                || (this.possibleStates.filter(state => typeof state !== 'string')).length > 0
                || !this.possibleStates.includes(this.initialState)
                || (this.allowedStates.filter(s => this.possibleStates.includes(s))).length === 0
                || (inputs.filter(i => this.possibleInputs.includes(i))).length !== inputs.length
            ) {

                if ( !Array.isArray(inputs) ) console.log('inputs is not array');
                if ( !Array.isArray(this.possibleStates) ) console.log('possibleStates is not array');
                if ( !Array.isArray(this.possibleInputs) ) console.log('possibleInputs is not array');
                if ( typeof this.initialState !== 'string' ) console.log('initialState is not a string');
                if ( !Array.isArray(this.allowedStates) ) console.log('allowedStates is not array');
                if ( Array.isArray(this.possibleStates) && (this.possibleStates.filter(state => typeof state !== 'string')).length > 0 )
                    console.log('possibleStates contains non string');
                if ( !this.possibleStates.includes(this.initialState) ) console.log('initialState is not a possibleState');
                if ( Array.isArray(this.allowedStates) && (this.allowedStates.filter(s => this.possibleStates.includes(s))).length === 0 )
                    console.log('allowedStates not in possibleStates');
                if ( Array.isArray(inputs) && (inputs.filter(i => this.possibleInputs.includes(i))).length !== inputs.length )
                    console.log('inputs contains not possibleInputs');

            return null;
        }

        return inputs.reduce(this.reducer, this.initialState);
    }

    inAllowedStates(state) {
        return this.allowedStates.includes(state);
    }

    output(inputs) {
        const finalState = this.getFinalState(inputs);
        if ( !this.inAllowedStates(finalState) ) {
            return null;
        }

        return finalState;
    }

}

module.exports = BaseDFA;