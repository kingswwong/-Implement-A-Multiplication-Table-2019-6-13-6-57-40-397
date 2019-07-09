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

it('should return null when invoke start and end number when start is 5 and end is 4',() => {
    //given
    const start = 5;
    const end = 4;
    //when
    const result = isValidNumber(5,4);
    //then
    expect(result).toBe(null)
})


it('should return null when invoke start and end number when start is -1 and end is 4',() => {
    //given
    const start = -1;
    const end = 4;
    //when
    const result = isValidNumber(-1,4);
    //then
    expect(result).toBe(null)
})