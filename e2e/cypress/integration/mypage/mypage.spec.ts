/// <reference types="cypress" />

context('MyPage', () => {
    const baseUrl = Cypress.env('baseUrl');
    beforeEach(() => {
        // ログイン処理
        cy.visit(`${baseUrl}`);
        cy.get('button').click();
        cy.location('pathname').should('eq', '/api/auth/signin');
        cy.get('#input-email-for-credentials-provider')
            .type('email@example.com').should('have.value', 'email@example.com');
        cy.get('#input-password-for-credentials-provider')
            .type('password123').should('have.value', 'password123');
        cy.get('button').click();
        cy.contains('Signed in as').should('be.visible');
    });
    describe('マイページ', () => {
        it('MyPageボタンを押すとMyPageに遷移すること', () => {
            // TODO: MyPageボタンを押すとMyPageに遷移することを確認する
        });
    });
});
