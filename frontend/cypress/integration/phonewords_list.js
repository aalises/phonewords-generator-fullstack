describe('Phoneword List Test Suite', () => {

    beforeEach(function () {
        cy.fixture('phonewords.json').as('numbers');
        cy.visit('/');
    });

    const submit_number = (number) => {
        cy.get('[data-test = phoneword-input]').type(number)
        cy.get('[data-test = submit-phoneword-button]').click()
    }

    it('Should show default message', function(){
        
    });

    it('Should show message and number when valid number', function(){
        
    });
    it('Should show correct number of phonewords for given numbers', function(){
        
    });
    it('Should show the tag corresponding to a known words for given numbers', function(){
       
    });
});