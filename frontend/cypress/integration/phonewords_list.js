describe('Phoneword List Test Suite', () => {


    beforeEach(function () {
        cy.fixture('phonewords.json').as('numbers');
        cy.fixture('messages.json').as('messages');
        cy.visit('/');
    });

    const submit_number = (number) => {
        cy.get('[data-test = phoneword-input]').clear()
        cy.get('[data-test = phoneword-input]').type(number)
        cy.get('[data-test = submit-phoneword-button]').click()
    }

    it('Should show default message', function(){
        cy.get('[data-test = heading-phoneword-list]').contains(this.messages.list_default)
    });

    it('Should show message and number when valid number', function(){
        submit_number(this.numbers['valid1'].number);
        cy.get('[data-test = heading-phoneword-list]').contains(this.messages.list_is_word)
        cy.get('[data-test = phoneword-number]').contains(this.numbers['valid1'].number)
    });

    it('Should show correct number of phonewords for given numbers', function(){

        let data = this.numbers['valid1'];
        submit_number(data.number);
        cy.get('[data-test ^= word-tag]').should('have.length', data.resultLength);

        data = this.numbers['valid2'];
        submit_number(data.number);
        cy.get('[data-test ^= word-tag]').should('have.length', data.resultLength);
    });

    it('Should show the tag corresponding to a known words for given numbers', function(){
        let data = this.numbers['valid1'];
        
        submit_number(data.number);
        cy.get(`[data-test = word-tag-${data.known_word}]`).should('have.length',1);

        data = this.numbers['valid2'];
        submit_number(data.number);
        cy.get(`[data-test = word-tag-${data.known_word}]`).should('have.length',1);
    });
});