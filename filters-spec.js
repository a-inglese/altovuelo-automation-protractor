var results = require('./pageObjects/resultsPageObject.js');
var filters = require('./pageObjects/filterPageObject.js');

describe('Test de Filtros', function() {
    beforeAll(function () {
        browser.get('https://www.despegar.com.ar/pasajes-en-micro/shop/c/982/c/4445/2018-10-15/1');
        this.resultsPage = new results();
        this.filterObject = new filters();
        this.filterObject.expandCategories();
    });

    it('should have at least 1 cluster visible after filtering', function() {
        var self = this; // Dentro del then no existe el this. Esta es una forma de tenerlo disponible.
        this.filterObject.getFacet(3).click().then(function() {
            self.resultsPage.getClusters().then(function(clusters) {
                expect(self.resultsPage.getClustersCount()).toBeGreaterThan(0);
                expect(clusters[0].isDisplayed()).toBe(true);
            });
        });
    });
});