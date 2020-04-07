describe('Base DFA', () => {
    const DFA = require('../dfas/basedfa');
    const dfaFactory = (possStates, possInputs, intlState, allwdStates) => {
        const TestDFA = class TestDFA extends DFA {
            possibleStates = possStates;
            possibleInputs = possInputs;
        }
        return new TestDFA(intlState, allwdStates);
    };

    it('should return null if inputs is not array', () => {
        const dfa = dfaFactory(['foo', 'bar'], ['1', '0'], 'foo', ['foo']);
        expect(dfa.output('baz')).toBeNull();
    });

    it('should return null if possibleStates is not array', () => {
        const dfa = dfaFactory('foo', ['1', '0'], 'foo', ['foo']);
        expect(dfa.output(['1','0'])).toBeNull();
    });

    it ('should return null if possibleInputs is not array', () => {
        const dfa = dfaFactory(['foo'], '1', 'foo', ['foo']);
        expect(dfa.output(['1', '0'])).toBeNull();
    });

    it('should return null if initialState is not a string', () => {
        const dfa = dfaFactory(['foo', 'bar'], ['1', '0'], null, ['foo']);
        expect(dfa.output(['1', '0'])).toBeNull();
    });

    it('should return null if allowedStates is not array', () => {
        const dfa = dfaFactory(['foo', 'bar'], ['1', '0'], 'foo', 'bar');
        expect(dfa.output(['1', '0'])).toBeNull();
    })

    it('should return null if possibleStates is not array of strings', () => {
        const dfa = dfaFactory(['foo', 0], ['1', '0'], 'foo', ['foo']);
        expect(dfa.output(['1', '0'])).toBeNull();
    });

    it ('should return null if initialState is not part of possibleStates', () => {
        const dfa = dfaFactory(['foo', 'bar'], ['1', '0'], 'baz', ['foo']);
        expect(dfa.output(['1', '0'])).toBeNull();
    });

    it('should return null if allowedStates is not part of possibleStates', () => {
        const dfa = dfaFactory(['foo', 'bar'], ['1', '0'], 'foo', ['baz']);
        expect(dfa.output(['1', '0'])).toBeNull();
    });

    it('should return null if inputs contains anything not in possibleInputs', () => {
        const dfa = dfaFactory(['foo', 'bar'], ['1', '0'], 'foo', ['foo']);
        expect(dfa.output(['1', '2'])).toBeNull();
    });

    it('should return an output with at least one valid allowedState', () => {
        const dfa = dfaFactory(['foo', 'bar'], ['1', '0'], 'foo', ['foo', 'baz']);
        expect(dfa.output(['1', '0'])).toBe('foo');
    });

    it('should return initialState if in allowedState', () => {
        const dfa = dfaFactory(['foo', 'bar'], ['1', '0'], 'foo', ['foo']);
        expect(dfa.output(['1', '0'])).toBe('foo');
    });

    it('should return null if initialState is not in allowedState', () => {
        const dfa = dfaFactory(['foo', 'bar'], ['1', '0'], 'foo', ['bar']);
        expect(dfa.output(['1', '0'])).toBeNull();
    })
});