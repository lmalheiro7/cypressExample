import { verifyHostBindings } from "@angular/compiler";
import { result } from "cypress/types/lodash";
import "cypress-localstorage-commands";

describe('My First Test', () => {

  it('Visits the initial project page', () => {
    cy.visit('/register')

    //cy.contains('Register').should('to.have.length', 1)  //VERIFICAR SE EXISTE ALGO COM register
  })

  it('add new user', ()=> {
    cy.visit('/register')

  })






/*

  it('teste login', ()=>{
    cy.get('[formControlName=userlogin]').type('testeluis')
    cy.get('[formControlName=passlogin]').type('teste123')
    cy.wait(2000)
    cy.get('[ data-cy=loginbutton]').click();
  })
  */


  /*
  it('logout', ()=>{
    cy.get('[ data-cy=logoutbutton]').click();
  })
  */

})
