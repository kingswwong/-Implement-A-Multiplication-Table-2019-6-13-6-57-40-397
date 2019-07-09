const isValidNumber = require('../src/isValidNumber')

it('should return true when invoke start and end number when start is 2 and end is 4',() => {
    //given
    const start = 2;
    const end = 4;
    //when
    const result = isValidNumber(2,4);
    //then
    expect(result).toBe(true)
})