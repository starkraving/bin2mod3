describe('Bin2Mod3', () => {
    const Bin2Mod3 = require('../dfas/bin2mod3');
    const dfa = new Bin2Mod3('S0', ['S0', 'S1', 'S2']);

    it('should return 0 with inputs 0', () => {
        expect(dfa.output(['0'])).toBe(0);
    });

    it('should return 1 with inputs 1', () => {
        expect(dfa.output(['1'])).toBe(1);
    });

    it('should return 2 with inputs 1,0', () => {
        expect(dfa.output(['1', '0'])).toBe(2);
    });

    it('should return 1 with inputs 1,0,0', () => {
        expect(dfa.output(['1', '0', '0'])).toBe(1);
    });

    it('should return 2 with inputs 1,0,1', () => {
        expect(dfa.output(['1', '0', '1'])).toBe(2);
    });

    it('should return 0 with inputs 1,1,0', () => {
        expect(dfa.output(['1', '1', '0'])).toBe(0);
    });

    it('should return 2 with inputs 1,0,0,0', () => {
        expect(dfa.output(['1', '0', '0', '0'])).toBe(2);
    });

    it('should return 0 with inputs 1,0,0,1', () => {
        expect(dfa.output(['1', '0', '0', '1'])).toBe(0);
    });

    it('should return 1 with inputs 1,0,1,0', () => {
        expect(dfa.output(['1', '0', '1', '0'])).toBe(1);
    });

    it('should return 1 with inputs 1,0,0,0,0', () => {
        expect(dfa.output(['1', '0', '0', '0', '0'])).toBe(1);
    });

    it('should return 2 with inputs 1,0,0,0,1', () => {
        expect(dfa.output(['1', '0', '0', '0', '1'])).toBe(2);
    });

    it('should return 0 with inputs 1,0,0,1,0', () => {
        expect(dfa.output(['1', '0', '0', '1', '0'])).toBe(0);
    });
})