const { isMainThread } = require("node:worker_threads")

describe('My hooks suite', function()
{

    it('My first test',function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('body > app-root > form-comp > div > form > div:nth-child(1) > input').type('bob')
    })
}



)