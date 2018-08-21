function ResultsPage() {
    this.clusters = element.all(by.repeater('bus in outboundBuses'));
    this.filters = element(by.id('filters'));
}

ResultsPage.prototype.getClusters = function() {
    return this.clusters;
};

ResultsPage.prototype.getFilters = function() {
    return this.filters;
};

ResultsPage.prototype.getClustersCount = function() {
    return this.getClusters().count();
};

module.exports = ResultsPage;