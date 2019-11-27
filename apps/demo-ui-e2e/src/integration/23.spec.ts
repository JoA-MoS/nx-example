describe('demo-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('I SHOULD NOT PASS', () => {
    // Function helper example, see `../support/app.po.ts` file
    cy.contains('THIS TEXT DOES NOT EXITS');
    expect(false).to.be.true;
  });
});
