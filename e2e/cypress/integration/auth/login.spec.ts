/// <reference types="cypress" />

context('Login', () => {
    const baseUrl = Cypress.env('baseUrl');
    beforeEach(() => {
        cy.visit(`${baseUrl}`);
    });
    describe('ログイン', () => {
        describe('正しいメールアドレスとパスワードの組み合わせを入力すると、ログインすることが出来る', () => {
            it('正しいメールアドレスとパスワードを入力する', () => {
                cy.get('button').click();
                cy.location('pathname').should('eq', '/api/auth/signin');
                cy.get('#input-email-for-credentials-provider')
                    .type('email@example.com').should('have.value', 'email@example.com');
                cy.get('#input-password-for-credentials-provider')
                    .type('password123').should('have.value', 'password123');
                cy.get('button').click();
                cy.contains('Signed in as').should('be.visible');
            });
        });
        describe('間違ったメールアドレスとパスワードの組み合わせを入力すると、ログインすることができない', () => {
            it('正しいメールアドレスとパスワードを入力する', () => {
                cy.get('button').click();
                cy.location('pathname').should('eq', '/api/auth/signin');
                cy.get('#input-email-for-credentials-provider')
                    .type('test@example.com').should('have.value', 'test@example.com');
                cy.get('#input-password-for-credentials-provider')
                    .type('testtest').should('have.value', 'testtest');
                cy.get('button').click();
                cy.get('.error').contains('Sign in failed. Check the details you provided are correct.').should('be.visible');
            });
        });
    });
    describe('ログアウト', () => {
        describe('ログアウトすることが出来る', () => {
            it('正しいメールアドレスとパスワードを入力する', () => {
                cy.get('button').click();
                cy.location('pathname').should('eq', '/api/auth/signin');
                cy.get('#input-email-for-credentials-provider')
                    .type('email@example.com').should('have.value', 'email@example.com');
                cy.get('#input-password-for-credentials-provider')
                    .type('password123').should('have.value', 'password123');
                cy.get('button').click();
                cy.contains('Signed in as').should('be.visible');
                cy.get('button').contains('Sign out').click();
                cy.contains('Not signed in').should('be.visible');
            });
        });
    });
});
