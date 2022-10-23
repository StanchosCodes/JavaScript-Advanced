const PaymentPackage = require('../PaymentPackage');
const { assert } = require('chai');

describe('PaymentPackage', () => {
    describe('constructor should set properly', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Stancho', 20);
        });

        it ('name should be set properly', () => {
            assert.equal(paymentPackage._name, 'Stancho', 'The name is set properly');
        });

        it ('value should be set properly', () => {
            assert.equal(paymentPackage._value, 20, 'The value is set properly');
        })

        it ('VAT should be set default', () => {
            assert.equal(paymentPackage._VAT, 20, 'The default value is set');
            assert.equal(typeof(paymentPackage._VAT), 'number', 'correct type vat');
        })

        it ('active should be set default', () => {
            assert.equal(paymentPackage._active, true, 'is set properly');
            assert.equal(typeof(paymentPackage._active), 'boolean', 'is of proper type');
        })
    })

    describe('test Getters', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Stancho', 20);
        });

        it ('getter should return corrext name', () => {
            assert.equal(paymentPackage.name, 'Stancho');
        })
        it ('should return correct value', () => {
            assert.equal(paymentPackage._value, 20, 'value returned properly');
        })
        it ('should return correct vat', () => {
            assert.equal(paymentPackage._VAT, 20, 'Correct vat');
        })
        it ('active should return correct', () => {
            assert.equal(paymentPackage.active, true, 'return properly');
        })
    })

    describe('Testing setters', () => {
        it ('name setter should throw', () => {
            assert.throw(() => {new PaymentPackage(10, 10)}, 'Name must be a non-empty string');
        })
        it ('incorect type of name', () => {
            assert.throw(() => {new PaymentPackage('', 10)}, 'Name must be a non-empty string');
        })
        it ('throw value', () => {
            assert.throw(() => {new PaymentPackage('Stancho', -10)}, 'Value must be a non-negative number');
        })
        it ('throw value', () => {
            assert.throw(() => {new PaymentPackage('Stancho', ' ')}, 'Value must be a non-negative number');
            assert.throw(() => {new PaymentPackage('Stancho', '')}, 'Value must be a non-negative number');
        })
        it ('zero value', () => {
            let paymentPackage = new PaymentPackage('Stancho', 20);
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0), 'correct zero case value';
        })
        it ('throw vat', () => {
            let paymentPackage = new PaymentPackage('Stancho', 20);
            assert.throw(() => {paymentPackage.VAT = 'incorect'}, 'VAT must be a non-negative number');
        })
        it ('throw vat', () => {
            let paymentPackage = new PaymentPackage('Stancho', 20);
            assert.throw(() => {paymentPackage.VAT = -10}, 'VAT must be a non-negative number');
        })
        it ('correct vat', () => {
            let paymentPackage = new PaymentPackage('Stancho', 20);
            paymentPackage.VAT = 60;
            assert.equal(paymentPackage.VAT, 60), 'correct Vat;'
        })
        it ('corect active', () => {
            let paymentPackage = new PaymentPackage('Stancho', 20);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false), 'correct active';
        })
        it ('incorrect vat', () => {
            let paymentPackage = new PaymentPackage('Stancho', 20);
            assert.throw(() => {paymentPackage.active = 60}, 'Active status must be a boolean');
        })
    })

    describe('test toString', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Stancho', 20);
        });

        it ('test active status', () => {
            const output = [
                `Package: Stancho`,
                `- Value (excl. VAT): 20`,
                `- Value (VAT 20%): ${20 * (1 + 20 / 100)}`
              ].join('\n');

              assert.equal(paymentPackage.toString(), output);
        })
        it ('test inactive status', () => {
            paymentPackage.active = false;
            const output = [
                `Package: Stancho` + ' (inactive)',
                `- Value (excl. VAT): 20`,
                `- Value (VAT 20%): ${20 * (1 + 20 / 100)}`
              ].join('\n');

              assert.equal(paymentPackage.toString(), output);
        })
    })
})