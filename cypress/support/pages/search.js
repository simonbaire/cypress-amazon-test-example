class Search {

    searchBox = "#twotabsearchtextbox";
    searchButton = "#nav-search-submit-button";

    searchForItem(word) {
        cy.get(this.searchBox)
            .focus()
            .type(word)
    }

    clickSearchButton() {
        cy.get(this.searchButton).click();
    }
}

export default new Search();
