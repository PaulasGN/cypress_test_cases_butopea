
// Test Case 1: Load the Website
// This test case loads the website and verifies that it successfully loads.
describe('Load Website', () => {
  it('Should load the website', () => {
    cy.visit('https://butopea.com');
  });
});

//Test Case 2: // Confirm that the square contains some text and a button, 
//   If it does extract both the text and button label individually. If it does not fail the test
describe('Confirm Square Content', () => {
  it('Should confirm the square contains text and a button', () => {
    cy.visit('https://butopea.com'); 

    // Find the square element
    cy.get('.banner-square-overlay')
      .should('exist') // Ensure the square exists
      .within(() => {
        // Check for the presence of text
        cy.get('p').should('exist').invoke('text').then((text) => {
          // Check for the presence of a button
          cy.get('button').should('exist').invoke('text').then((buttonLabel) => {
            // Log the text and button label
            cy.log(`Text inside the square: ${text}`);
            cy.log(`Button label inside the square: ${buttonLabel}`);
          });
        });
      });
  });
});

//Test Case 3: Click on the new products tab, let the tab load, and check if it contains a list of products. 
//If it does extract each product's link, title, image URL, and price. 
//If it doesn't fail the test

describe('Check New Products Tab', () => {
  it('Should click on New Products tab and extract product information', () => {
    cy.visit('https://butopea.com'); // Replace with the actual URL

    // Click on the "New Products" tab (replace '.new-products-tab' with the actual selector)
  //   cy.get('.new-products-tab').click();

    cy.get('#new-arrivals').should('exist');

    // Wait for the tab's content to load (you can adjust the timeout as needed)
    cy.get('.product-listing', { timeout: 10000 }).should('exist');

    // Check if the product list contains items
    cy.get('.product').should('exist');

    // Extract product information for each item
    cy.get('.product').each(($product) => {
      // Extract product link
      const link = $product.find('a').attr('href');

      // Extract product title
      const title = $product.find('.product-name').text();

      // Extract product image URL
      const imageURL = $product.find('img').attr('src');

      // Extract product price
      const price = $product.find('.lh30 cl-dark weight-300 fs-medium-small').text();

      // Log the extracted information for each product
      cy.log(`Product Link: ${link}`);
      cy.log(`Product Title: ${title}`);
      cy.log(`Product Image URL: ${imageURL}`);
      cy.log(`Product Price: ${price}`);
    });
  });
});
