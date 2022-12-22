class Results {

    searchResults = "#search";

    getSearchResults() {
        cy.get(this.searchResults)
            .as('searchResults');
    }
}

export default new Results();
