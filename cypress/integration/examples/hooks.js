describe('My hooks suite', function()
{
    before(function()
   {
      cy.fixture('drive').then(function(data)
      
      {
          this.data=data
      })
   } 
    )

    it('My first test',function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
    })
}
)