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