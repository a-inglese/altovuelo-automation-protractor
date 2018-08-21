var results = require('./pageObjects/resultsPageObject.js');

describe('Test de Resultados', function() {
    beforeAll(function () {
        browser.get('https://www.despegar.com.ar/pasajes-en-micro/shop/c/982/c/4445/2018-10-15/1');
        this.resultsPage = new results();
    });

    it('should have at least 1 cluster', function() {
      expect(this.resultsPage.getClustersCount()).toBeGreaterThan(0);
    });
});