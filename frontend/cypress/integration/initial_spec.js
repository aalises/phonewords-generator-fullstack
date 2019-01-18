describe('Initial test suite', () => {

    it('Should render the app without crashing', function(){
        cy.visit('/');
        cy.contains('Phonewords Generator');
    });
});