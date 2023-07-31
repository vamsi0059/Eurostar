import { loginpage } from "../pages/eurostar";


describe("Testing the railway ticket booking system", ()=>{
    let loginuserdata;
    before(() => {
        cy.fixture('login.json').then((userdata) => ((loginuserdata) = (userdata)))
    })
    it("Built the project for railway ticket booking",() =>{
        cy.visit(Cypress.env('baseUrl'));
        loginpage.aceptAllCache();
        loginpage.clickThetrainsButton()
        loginpage.clickTheReturncheckBox()
        loginpage.enterTheFromDetails(loginuserdata.tiketDetails);
        loginpage.enterTheToDetails(loginuserdata.tiketDetails)
        loginpage.clickTheDateText()
        loginpage.clickTheDateTimeText()
        loginpage.clickTheDateButton()
        loginpage.thePassengerDetails()
        loginpage.theAdultsPassengerDetails()
        loginpage.adultsDetailsOkButton()
        loginpage.clickTheSearchButton()
        loginpage.selectOutBoundDetails()
        loginpage.clickTheOutboundSubmited()
        loginpage.selectReturnDetails()
        loginpage.clickTheReturnSubmited()
        loginpage.clickContinueButton()
        loginpage.checkOutAsGueast()

















    })

})