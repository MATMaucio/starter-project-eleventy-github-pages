// search.js
const lunr = require('lunr');
const searchIndex = require('./search-index.json');

let idx = lunr(function () {
this.ref('url');
this.field('title');
this.field('content');

searchIndex.forEach(function (doc) {
    this.add(doc);
}, this);
});

function search(query) {
return idx.search(query).map(result => {
    return searchIndex.find(doc => doc.url === result.ref);
});
}

window.search = search;
