import { add } from '../math/calculator';

describe.skip('Calculator Tests', () => {

    describe('add function - edge cases', () => {
        // test('returns a when a >= 10 and b < 10', () => {
        //     expect(add(10, 0)).toBe(10);
        // });

        // test('returns a when a < 10 and b >= 10', () => {
        //     expect(add(0, 10)).toBe(0);
        // });

        // test('returns a when both a and b >= 10', () => {
        //     expect(add(10, 10)).toBe(10);
        // });

        test('returns a + b when both a and b < 10', () => {
            expect(add(5, 4)).toBe(9);
        });
    });


    //   test('subtracts two numbers', () => {
    //     expect(subtract(10, 4)).toBe(6);
    //   });
});
