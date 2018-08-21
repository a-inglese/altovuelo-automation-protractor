function FilterObject() {
    this.categories = element(by.id('categoriesFilter'));
    this.facets = element.all(by.repeater('facet in facets track by $id($index)'));
}

FilterObject.prototype.expandCategories = function() {
    return this.categories.click();
};

FilterObject.prototype.getFacet = function(index) {
    return this.facets.get(index);
};


module.exports = FilterObject;