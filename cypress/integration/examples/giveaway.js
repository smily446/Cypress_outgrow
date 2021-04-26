describe('Giveaway Test',function()
{
    before(function()
    {
        cy.fixture('drive').then(function(data)
      
        {
            this.data=data
        })
        cy.visit('https://fgear.outgrow.us/fgear-8243')
      //  cy.wait(4000)// used global wait in cypress.json file
        cy.get('#landingBtn').click()

    }
    
    
    )
    
     
    
it('The first test',function()
{

cy.get('input[type="fullName"]').type('smily1')
cy.get('input[type="email"]').type('smily.arora@venturepact.com')
cy.get('#landingBtn').click()
//cy.wait(4000)
//let fb=cy.get('.social-fb > .tooltip')
//fb.click()

//cy.get('.social-twitter > .fa').click()
//cy.get(':nth-child(3) > .social-in > .fa').click()
//cy.get(':nth-child(4) > .social-in > .fa').click()
//cy.get('.social-wts > .fa').click()
for(let i=0;i<7;i++)


{cy.get(this.data.social_ctas[i]).click()
//   cy.wait(3000)
}

//cy.get('.active').includes('61 points')
//cy.get('.active').find('.active > .leader-info > .leaderboard-rank-outer > .leaderboard-point').contains('61')
cy.get('.active > .leader-info > .leaderboard-rank-outer > .leaderboard-point').contains('61')
}
)

}

)