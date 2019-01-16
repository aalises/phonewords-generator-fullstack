describe('Initial test suite', () => {
    it('Should render the access pages correctly without crashing', () => {
        cy.visit('/');
        cy.contains('Starting Point');
    });
});