import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import searchPage from '../../support/pages/search';
import resultsPage from '../../support/pages/results';

Given(/^open the ([^"]*) page$/, (page) => {
    cy.visit('/');
});

Given(/^I search for ([^"]*)$/, (word) => {
    searchPage.searchForItem(word);
    searchPage.clickSearchButton();
});

Given(/^I expect ([^"]*) to be displayed$/, (item) => {
    resultsPage.getSearchResults();
    cy.get('@searchResults').contains(item);
});