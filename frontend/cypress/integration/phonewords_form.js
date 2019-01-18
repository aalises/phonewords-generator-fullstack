describe('Phoneword Form Test Suite', () => {

    const messages = {
        empty: 'Phone number cannot be empty',
        info: 'The phone number has to contain only digits from 2 to 9, e.g 69394837 (0 and 1 do not contain phone word information)',
        invalid: 'Invalid number: Only integers from 2 to 9 are allowed',
        success: 'This is a valid phone number'
    }

    beforeEach(function () {
        cy.fixture('phonewords.json').as('numbers');
        cy.visit('/');
    });

    const type_number = (number) => {
        if(number) cy.get('[data-test = phoneword-input]').type(number);
        cy.get('[data-test = submit-phoneword-button]').click()
    }

    it('Should show default info notification and empty field', function(){
        cy.get('[data-test = phoneword-message]').contains(messages.info);
        cy.get('[data-test = phoneword-input]').should('have.value', '')
    });

    it('Should show alert message when empty phone number', function(){
        const numberData = this.numbers['not_valid_empty'];

        type_number(numberData.number);
        cy.get('[data-test = phoneword-message]').contains(messages.empty);
    });
    it('Should show alert message when phone number with letters', function(){
        const numberData = this.numbers['not_valid_letter'];
        
        type_number(numberData.number);
        cy.get('[data-test = phoneword-message]').contains(messages.invalid);
    });
    it('Should show alert message when phone number with 0 or 1', function(){
        const numberData = this.numbers['not_valid_1'];
        
        type_number(numberData.number);
        cy.get('[data-test = phoneword-message]').contains(messages.invalid);
    });
    it('Should correctly validate a phone number', function(){
        const numberData = this.numbers['valid1'];
        
        type_number(numberData.number);
        cy.get('[data-test = phoneword-message]').contains(messages.success);
        cy.visit('/');
        cy.contains('Phonewords Generator');
    });
});
