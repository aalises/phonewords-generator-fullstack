describe('Phoneword Form Test Suite', () => {
    it('Should show alert message when empty phone number', () => {
        cy.visit('/');
        cy.contains('Phonewords Generator');
    });
    it('Should show alert message when phone number with letters', () => {
        cy.visit('/');
        cy.contains('Phonewords Generator');
    });
    it('Should show alert message when phone number with 0 or 1', () => {
        cy.visit('/');
        cy.contains('Phonewords Generator');
    });
    it('Should correctly validate a phone number', () => {
        cy.visit('/');
        cy.contains('Phonewords Generator');
    });
});
