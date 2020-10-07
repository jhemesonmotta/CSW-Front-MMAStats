describe('Meu primeiro teste', function() {
    
    it('Home está acessível', function() {
        cy.visit('http://localhost:4200');
        cy.contains('MMA Stats');
    });

    it('Clica menu ranking lutadores', function() {
        cy.get('#rankings-lutadores').click();
        cy.wait(2500);
        cy.contains('Ranking de Lutadores');
    });

    it('Clica menu ranking equipes', function() {
        cy.get('#rankings-equipes').click();
        cy.wait(2500);
        cy.contains('Ranking de Equipes');
    });

    it('Clica menu tott', function() {
        cy.get('#tale-of-the-tape').click();
        cy.wait(2500);
        cy.contains('Tale of the Tape');
    });

    it('Clica menu saiba mais', function() {
        cy.get('#saiba-mais').click();
        cy.contains('Saiba Mais');
    });

});