describe('Phoneword List Test Suite', () => {
    it('Should render the app without crashing', () => {
        cy.visit('/');
        cy.contains('Phonewords Generator');
    });
});