import Homepage from '../examples/parameter/Homepage'
describe('Multiple outcomes with mapping', function()
{
  //  before(function()
   //{
     // cy.fixture('drive').then(function(data)
      
     // {
    //      this.data=data
    //  })
  /// } 
  //  )
before(function(){
    cy.visit('https://fgear.outgrow.us/fgear-1848')
    cy.wait(5000)

})

    it('My first test',function()
    {const ob=new Homepage()
       ob.landing().click()
        cy.get('.selectize-input').click()
        cy.get('[data-value="1"]').click()
        cy.get('.form-control').type('06/19/1995' ,'{enter}')
    let text= cy.get('.sec_0 > .main-section > .col12.ng-pristine > .buton-sec-part > .t1-ques-component > .back-action').next();
    text.click()
    cy.get('.othersfield').type('smily arora')
    let text_1=cy.get('.sec_1 > .main-section > .col12.ng-untouched > .buton-sec-part > .t1-ques-component > .back-action').next();

    text_1.click()
    cy.get('input[type="fullName"]').type('test automation')
    cy.get('input[type="email"]').type('smily.arora@venturepact.com')
    cy.get('.leadform-checkbox').click()

cy.get('a[data-text="Submit"]').click({force:true})
cy.get('body > app-root > temp > template-five > div.template-five.V_3_5 > div:nth-child(3) > div > div > div > div > outcome-result > section > div > div > div.notDevMode.common-result-bot.eight-inner-wrapper.result-v2-leadformhide > div:nth-child(1) > div > div > div.col-xs-12.np.t1-result-inner > div').contains('B')
        
cy.get(':nth-child(2) > .overlay-outer-eight > .multiple-outcome-outr > .t1-result-inner > .result-v2-box2').contains('C')          
         
        
    })
}
)