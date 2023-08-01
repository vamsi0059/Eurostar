class Login {
    aceptAllCache(logindata) {
        cy.get('[class="button right"]')
            .should('be.visible')
            .click();
    }
    clickThetrainsButton(logindata) {
        cy.get('[class="sc-12k9xk2-9 dpRIZW"]')
            .should('have.text', logindata.trainsDetails);

    }
    clickTheReturncheckBox(logindata) {
        cy.get('[class="sc-1ivxz71-1 hEbOVR"]')
            .first()
            .should('have.text', logindata.returnCheckBox)
            .dblclick();
    }
    enterTheFromDetails(logindata) {
        cy.get('[type="text"]')
            .first()
            .type(logindata.enterThefromDetails, { force: true });
        cy.contains("London St Pancras Int'l")
            .should('be.visible')
            .click();
    }
    enterTheToDetails(logindata) {
        cy.get('[placeholder="City or station"]').eq(1)
            .type(logindata.enterTheToDetails, { force: true });
        cy.contains("Paris Gare du Nord")
            .should('be.visible')
            .click();

    }
    clickTheDateText(logindata) {
        cy.get('[name="calendar"]')
            .first()
            .click();;
    }
    clickTheDateTimeText(logindata) {
        cy.get('[datetime="2023-08-24"]')
            .should('have.text', '24')
            .click();
        cy.get('[datetime="2023-08-25"]')
            .should('have.text', '25')
            .click();

    }
    clickTheDateButton(logindata) {
        cy.get('[class="sc-7w9xhz-0 elMkGB"]')
            .should('have.text', 'OK')
            .click();;
    }
    thePassengerDetails(logindata) {
        cy.get('[name="passenger-type"]').click();


    }
    theAdultsPassengerDetails(logindata) {
        cy.get('[class="nlcp7r-0 deDXRl addAdult"]').click();
        cy.get('[class="sc-16wkrq3-6 cmhjRy"]')
            .should('have.text', '2')
    }
    adultsDetailsOkButton(logindata) {
        cy.get('[class="sc-7w9xhz-0 elMkGB"]')
            .should('be.visible')
            .click();
    }

    clickTheSearchButton(logindata) {
        cy.get('[class="sc-7w9xhz-0 fpliFR SearchButton"]')
            .click();
    }
    selectOutBoundDetails(logindata) {
        cy.get('[data-testid="outbound-journey-anchor-time-slot-afternoon-label"]')
            .click();
        cy.get('[class="sc-q9wa3z-1 diuBOc sc-7m1l97-2 NKSdo"]').eq(13)
            .should('be.visible')
            .click();
    }
    clickTheOutboundSubmited(logindata) {
        cy.get('[class="sc-axlilu-4 gVVuIz"]').eq(4)
            .should('have.text', 'Select')
            .and('be.visible')
            .click();
    }
    selectReturnDetails(logindata) {
        cy.get('[class="sc-oh483x-4 dTXocg"]').eq(1)
            .click();
        cy.get('[data-testid="journey-price-amount"]').eq(16)
            .should('be.visible')
            .click();
    }

    clickTheReturnSubmited(logindata) {
        cy.get('[class="sc-axlilu-4 gVVuIz"]').eq(5)
            .should('have.text', 'Select')
            .and('be.visible')
            .click();
    }
    clickContinueButton(logindata) {
        cy.contains('Continue')
            .click();
    }
    checkOutAsGueast(logindata) {
        cy.contains('Check out as a guest')
            .should('have.text', 'Check out as a guest')
            .click();
    }
    checkOutAsScreanText(logindata) {
        cy.get('[data-testid="h1-heading"]')
            .last()
            .should('have.text', logindata.checkOutDetails);
    }

}
export const loginpage = new Login();