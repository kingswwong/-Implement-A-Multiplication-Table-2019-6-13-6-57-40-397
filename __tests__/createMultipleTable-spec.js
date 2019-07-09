const createMultipleTable = require('../src/createMultipleTable')

it('should return a multiple table ' +
    '2*2=4' +
    '2*3=6  3*3=9' +
    '2*4=8  3*4=12  4*4=16' +
    'when invoke the table' +
    'given start = 2 and end = 4',() => {
    //given
    const start = 2;
    const end = 4;
    //when
    const result = createMultipleTable(2,4);
    //then
    expect(result).toBe('2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16')
})