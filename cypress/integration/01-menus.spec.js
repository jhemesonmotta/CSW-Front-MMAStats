describe('Menus Devem Estar Acessíveis', function() {
    
    it('Home está acessível', function() {
        cy.visit('http://localhost:4200');
        cy.contains('MMA Stats');
    });

    it('Clica menu ranking lutadores', function() {
        cy.get('#rankings-lutadores').click();
        cy.contains('Ranking de Lutadores', { timeout: 10000 });
    });

    it('Clica menu ranking equipes', function() {
        cy.get('#rankings-equipes').click();
        cy.contains('Ranking de Equipes', { timeout: 10000 });
    });

    it('Clica menu tott', function() {
        cy.get('#tale-of-the-tape').click();
        cy.contains('Tale of the Tape', { timeout: 10000 });
    });

    it('Clica menu saiba mais', function() {
        cy.get('#saiba-mais').click();
        cy.contains('Saiba Mais');
    });

});