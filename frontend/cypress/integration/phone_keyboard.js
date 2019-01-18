describe('Phone Keyboard Test Suite', () => {

    beforeEach(function () {
        cy.visit('/');
        cy.get('[data-test=keyboard-phone-card]').click()
    });

    const type_sequence = (sequence) => {
        sequence.forEach(number => {
            cy.get(`[data-test=keyboard-phone-element-${number}]`).click()
        })
    }

    it('Should correctly add numbers', function(){
        const sequence = ['1','4','5']
        type_sequence(sequence)
        cy.get('[data-test=phoneword-input]').should('have.value', sequence.join(''))
    });

    it('Should not add more numbers when reaching max length', function(){
        const sequence = ['1','4','5','6','7','2','6','9']
        type_sequence(sequence)
        cy.get('[data-test=phoneword-input]').should('have.value', sequence.join('').substring(0,6))
    
    });
    it('Should Erase letters with the "Back" button', function(){
        const sequence = ['1','4','5','Back']
        type_sequence(sequence)
        cy.get('[data-test=phoneword-input]').should('have.value', '14')
        type_sequence(['Back'])
        cy.get('[data-test=phoneword-input]').should('have.value', '1')
    });

    it('Should clear the input with the "Clear" Button', function(){
        const sequence = ['1','4','5','Back','3']
        type_sequence(sequence)
        cy.get('[data-test=phoneword-input]').should('have.value', '143')
        type_sequence(['Clear'])
        cy.get('[data-test=phoneword-input]').should('have.value', '')
    });
});
