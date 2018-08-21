var results = require('./pageObjects/resultsPageObject.js');

describe('Test de Resultados', function() {
    beforeAll(function () {
        browser.get('https://www.despegar.com.ar/pasajes-en-micro/shop/c/982/c/4445/2018-10-15/1');
        this.resultsPage = new results();
    });

    it('should have at least 1 cluster visible', function() {
        this.resultsPage.getClusters().then(function(clusters) {
            expect(clusters[0].isDisplayed()).toBe(true);
        });
    });

    it('should have at least 10 clusters and less than 100', function() {
      expect(this.resultsPage.getClustersCount()).toBeGreaterThan(10);
      expect(this.resultsPage.getClustersCount()).toBeLessThan(100);
    });

    it('should have the filter component', function() {
      expect(this.resultsPage.getFilters().isDisplayed()).toBe(true);
    });
});