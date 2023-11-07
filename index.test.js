const {capitalize, reverseString, calculator, caesarCipher} = require('./index');

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

// =======================
test('Dividing two simple values', () =>{
    expect(calculator.divide(80,2)).toBe(40)
});
test('Dividing one negative values', () =>{
    expect(calculator.divide(-80,2)).toBe(-40)
});
test('Dividing both negative values', () =>{
    expect(calculator.divide(-80,-2)).toBe(40)
});
test('Dividing when denominator is bigger', () =>{
    expect(calculator.divide(80,160)).toBe(0.5)
});
test('Dividing with one missing value', () =>{
    expect(calculator.divide(80)).toBe('Missing value')
});
test('Dividing with both missing value', () =>{
    expect(calculator.divide()).toBe('Missing value')
});

//=======================
test('multiplying two simple values', () =>{
    expect(calculator.multiply(80,2)).toBe(160)
});
test('multiplying one negative values', () =>{
    expect(calculator.multiply(-80,2)).toBe(-160)
});
test('multiplying both negative values', () =>{
    expect(calculator.multiply(-80,-2)).toBe(160)
});

test('multiplying with one missing value', () =>{
    expect(calculator.multiply(80)).toBe('Missing value')
});
test('multiplying with both missing value', () =>{
    expect(calculator.multiply()).toBe('Missing value')
});

//===============================================
test('ceaser cipher with 1 shift factor ', () =>{
    expect(caesarCipher('Tushar',1)).toBe('Uvtibs')
});
test('ceaser cipher with negative shift factor ', () =>{
    expect(caesarCipher('Tushar',-1)).toBe('Strgzq')
});
test('ceaser cipher with no shift factor ', () =>{
    expect(caesarCipher('Tushar')).toBe('Missing values')
});
test('ceaser cipher with no value provided ', () =>{
    expect(caesarCipher(-1)).toBe('Missing values')
});