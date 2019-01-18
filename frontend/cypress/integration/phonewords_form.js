describe('Phoneword Form Test Suite', () => {

    
    // RGB codes for the background of the alerts to check if the alert displayed is correct (success, warning...)
    const RGBCodes = {
        info: new RegExp(/224, 246, 255/),
        warning: new RegExp(/252, 241, 205/),
        success: new RegExp( /231, 243, 232/)
    }

    beforeEach(function () {
        cy.fixture('phonewords.json').as('numbers');
        cy.fixture('messages.json').as('messages');
        cy.visit('/');
    });

    const type_number = (number) => {
        if(number) cy.get('[data-test = phoneword-input]').type(number);
        cy.get('[data-test = submit-phoneword-button]').click()
    }

    it('Should show default info notification and empty field', function(){
        cy.get('[data-test = phoneword-message]').should('have.css','background').and('match', RGBCodes.info)
        cy.get('[data-test = phoneword-message]').contains(this.messages.form_info);
        cy.get('[data-test = phoneword-input]').should('have.value', '')
    });

    it('Should show alert message when empty phone number', function(){
        const numberData = this.numbers['not_valid_empty'];

        type_number(numberData.number);
        cy.get('[data-test = phoneword-message]').should('have.css','background').and('match', RGBCodes.warning)
        cy.get('[data-test = phoneword-message]').contains(this.messages.form_empty);
    });
    it('Should show alert message when phone number with letters', function(){
        const numberData = this.numbers['not_valid_letter'];
        
        type_number(numberData.number);

        cy.get('[data-test = phoneword-message]').should('have.css','background').and('match', RGBCodes.warning)
        cy.get('[data-test = phoneword-message]').contains(this.messages.form_invalid)
    });
    it('Should show alert message when phone number with 0 or 1', function(){
        const numberData = this.numbers['not_valid_1'];
        
        type_number(numberData.number);

        cy.get('[data-test = phoneword-message]').should('have.css','background').and('match', RGBCodes.warning)
        cy.get('[data-test = phoneword-message]').contains(this.messages.form_invalid);
    });
    it('Should correctly validate a phone number', function(){
        const numberData = this.numbers['valid1'];
        
        type_number(numberData.number);

        cy.get('[data-test = phoneword-message]').should('have.css','background').and('match',RGBCodes.success)
        cy.get('[data-test = phoneword-message]').contains(this.messages.form_success);
        cy.visit('/');
        cy.contains('Phonewords Generator');
    });
});
