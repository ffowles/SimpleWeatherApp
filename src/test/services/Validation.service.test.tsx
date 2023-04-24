import validationService from '../../services/Validation.service';

describe('Validation.service tests', () => {
    describe.each`
        zip         | units    | valid
        ${'abcd'}   | ${'us'}  | ${false}
        ${'abcd'}   | ${null}  | ${false}
        ${'abcd'}   | ${'123'} | ${false}
        ${'40509'}  | ${null}  | ${false}
        ${'40509'}  | ${''}    | ${false}
        ${null}     | ${'si'}  | ${false}
        ${''}       | ${'us'}  | ${false}
        ${'4050'}   | ${'us'}  | ${false}
        ${'405099'} | ${'us'}  | ${false}
        ${'405.9'}  | ${'us'}  | ${false}
        ${'40509'}  | ${'si'}  | ${true}
        ${'40509'}  | ${'us'}  | ${true}
    `('validateForecastParams', ({ zip, units, valid }) => {
        it(`should return ${valid} when zip=${zip} and units=${units}`, () => {
            const params = { zip, units };
            expect(validationService.validateForecastParams(params)).toEqual(valid);
        });
    });
});
