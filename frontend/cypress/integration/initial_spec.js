describe('Initial test suite', () => {
    it('Should render the app without crashing', () => {
        cy.visit('/');
        cy.contains('Phonewords Generator');
    });
});