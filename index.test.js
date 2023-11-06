const {capitalize, reverseString, calculator} = require('./index');

test('capitalize tushar', () =>{
    expect(capitalize('tushar')).toMatch('Tushar')
});
test('Already Capital', () =>{
    expect(capitalize('Capital')).toMatch('Capital')
});
test('spaces in between', () =>{
    expect(capitalize('this is pretty cool')).toMatch('This is pretty cool')
});
test('numbers in the String', () =>{
    expect(capitalize('this is my 64th try')).toMatch('This is my 64th try')
});

test('Nothing passed to the function', () =>{
    expect(capitalize()).toBe()
});
test('Empty String passed in the function', () =>{
    expect(capitalize('')).toBe('')
});

test('reversing mahima', () =>{
    expect(reverseString('mahima')).toMatch('amiham')
});
test('reversing with sapce in between', () =>{
    expect(reverseString('I have to be there in 5 mins')).toMatch('snim 5 ni ereht eb ot evah I')
});

test('No value passed to the function', () =>{
    expect(reverseString()).toBe()
});
test('Empty string passed to the Function', () =>{
    expect(reverseString('')).toBe('')
});

test('Adding two simple values', () =>{
    expect(calculator.add(2,80)).toBe(82)
});


test('Adding 1 negative value', () =>{
    expect(calculator.add(2,-80)).toBe(-78)
});

test('Adding 2 negative value', () =>{
    expect(calculator.add(-102,-80)).toBe(-182)
});
test('missing 1 value', () =>{
    expect(calculator.add(-102)).toBe('Missing value')
});

test('missing 2 value', () =>{
    expect(calculator.add()).toBe('Missing value')
});

//=============================

test('subtracting two simple values', () =>{
    expect(calculator.subtract(2,80)).toBe(-78)
});


test('subtracting 1 negative value', () =>{
    expect(calculator.subtract(2,-80)).toBe(82)
});

test('subtracting 2 negative value', () =>{
    expect(calculator.subtract(-102,-80)).toBe(-22)
});
test('missing 1 value', () =>{
    expect(calculator.subtract(-102)).toBe('Missing value')
});

test('missing 2 value', () =>{
    expect(calculator.subtract()).toBe('Missing value')
});

