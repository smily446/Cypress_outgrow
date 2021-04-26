describe('Ecom_API',function()
{
 before(function()
 {
cy.visit('https://app.outgrow.co/login')
cy.get('input[type="email"]').type('smily.arora+15@venturepact.com')
cy.get('input[type="password"]').type('defaultPassword')
cy.get('button[type="submit"]').click()

 })
    
 Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
 it('my first test case',function()
    
    {
      
       
 //cy.wait(30000)

 cy.contains('8269').click({force:true})
 //cy.wait(35000)
 cy.get('.stage3-mid-topbar > :nth-child(2)').click()
cy.get('#build > ecom > div:nth-child(1) > div.ecom-stage1 > div.ecom-stage-left > div.ecom-left-boxoutr > div > div:nth-child(1) > a > div').click()
cy.get('form.ng-untouched > .connect-button > .btn').click()
//cy.wait(10000)
cy.get('.stage2-select-label').click()
//cy.wait(1000)
cy.get('.stage2-import > .btn').click()

cy.wait(20000)
cy.get('.input-next-div > ul > :nth-child(1) > a').click()
//cy.wait(20000)
cy.get('.showing-textt').contains('452')
cy.get('#product_no_0 > :nth-child(1) > .newLableCheckbox > .product-iconDiv > .untick').click()
cy.get('.stage3-select-icons > p').click()
cy.get('.stage3-selectTags > :nth-child(1)').click()
//cy.wait(2000)
cy.contains('Delete').click({force: true})
//
cy.contains('Yes, Delete Permanently').click({force: true})

}
    
    
    )
}


)