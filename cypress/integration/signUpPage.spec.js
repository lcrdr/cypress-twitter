/// <reference types="Cypress" />

// import { baseUrl } from "../../cypress.json";


describe('Funcionalidade: Clicar nos botões', () => {
    //Entrar toda vez na tela inicial
    beforeEach(() => {
        cy.EnterPage();
        cy.get('body').then(($body) => {
            //Seletor do botão de Inscreva-se sendo clicado
            if ($body.find('.StaticLoggedOutHomePage-buttons > .EdgeButton--primary').length) {
                cy.get('.StaticLoggedOutHomePage-buttons > .EdgeButton--primary').click()
            } else if($body.find('[data-testid=signupButton]')) {
                cy.get('[data-testid=signupButton]').click()
            }
            //Após clicar, verificar a URL
            cy.url().should('eq', 'https://twitter.com/i/flow/signup')
        })
    })

    it('Registrar um novo usuário', ()=>{
        //Mudar o campo para e-mail
        cy.get('.css-18t94o4 > .css-901oao').click()
        //Digitar o nome
        cy.get(':nth-child(2) > .r-1u4rsef > .css-1dbjc4n > .css-901oao > .r-30o5oe').type('Leonardo Cypress');
        //Digitar o e-mail
        cy.get(':nth-child(3) > .r-1u4rsef > .css-1dbjc4n > .css-901oao > .r-30o5oe').type('leonardocypress111220@gmail.com');
        //Clicar em avançar
        cy.get('.r-obd0qt > .css-18t94o4').click()
        //Clicar novamente em avançar
        cy.get('.r-obd0qt > .css-18t94o4').click()
    })
})