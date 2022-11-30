const lunr = require('lunr');

const getDocumentElement = async (fluentDocument: Cypress.Chainable<Document>) => {
  return new Promise<any>((resolve) => {
    fluentDocument.then((documentElement) => {
      resolve(documentElement);
    });
  });
}

describe('Build Search Index', function() {

  const searchIndexDocuments: any[] = [];

  // generate the search index after all tests have run
  after(function() {
    // cy.writeFile('./search-index-docs.json', JSON.stringify(searchIndexDocuments), 'utf-8');

    const searchIndex = lunr(function() {
      const searchEngine = this;

      searchEngine.ref('id');

      searchEngine.field('title');
      searchEngine.field('description');
      searchEngine.field('keywords');
      searchEngine.field('body');

      searchIndexDocuments.forEach((searchIndexDocument) => {
        searchEngine.add(searchIndexDocument);
      });
    });

    const searchIndexData = {
      index: searchIndex,
      documents: searchIndexDocuments.map((doc) => {
        return {
          id: doc.id,
          url: doc.url,
          title: doc.title,
          description: doc.description,
        };
      }),
    };

    cy.writeFile('./src/api/data/search-index.json', JSON.stringify(searchIndexData), 'utf-8');
  });

  const convertUrlToId = (url: string) => {
      let id = url.replace(/\//g, '-');

      while (id.length > 0 && id.startsWith('-')) {
        id = id.substring(1);
      }

      if (id.length === 0) {
        id = 'home';
      }

      return id;
  };

  it('Gets search content from pages', async() => {

    const searchTargets = [
      '/',
      '/people',
      '/process',
      '/value',
      '/technology',
      '/technology/capabilities',
      '/technology/channels',
      '/technology/experiences',
      '/technology/platforms',
    ];

    const getSearchIndexDocuments = searchTargets.map((url) => {
      return new Promise((resolve) => {
        cy.visit(url).then(() => {
          cy.document().then((doc => {
            cy.log('Page title', doc.title);

            const metaDescription = doc.querySelector('meta[name="description"]');
            const description = metaDescription ? metaDescription.getAttribute('content') : '';
            const metaKeywords = doc.querySelector('meta[name="keywords"]');
            const keywords = metaKeywords ? metaKeywords.getAttribute('content').split(',') : '';

            cy.log('Page description', description);
            cy.log('Page keywords', keywords);

            const searchIndexDocument = {
              id: convertUrlToId(url),
              url: url,
              title: doc.title ? doc.title : '',
              description: description,
              keywords: keywords,
              body: doc.body ? doc.body.innerText || doc.body.textContent : '',
            };

            resolve(searchIndexDocument);
          }));
        });
      })
    });

    for (let getSearchIndexDocument of getSearchIndexDocuments) {
      const searchIndexDocument = await getSearchIndexDocument;

      searchIndexDocuments.push(searchIndexDocument);
    }
  });
});
