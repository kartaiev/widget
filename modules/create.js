define([
  'modules/fetchData',
  'dojo/dom-construct',
  'dojo/dom-attr',
  'dojo/store/Memory',
  'dijit/form/Select',
], (fetchData, domConstruct, domAttr, Memory, Select) => {
  return {
    createSelect: (url, name) =>
      fetchData.getBeers(url).then((data) => {
        const beerStore = new Memory({
          idProperty: 'tagline',
          data,
        });

        const select = new Select(
          {
            name: 'beerSelect',
            store: beerStore,
            style: 'width: 200px;',
            labelAttr: 'name',
            maxHeight: -1,
            onChange: function (value) {
              document.getElementById('value').innerHTML = value;
            },
          },
          'beerSelect'
        );

        select.startup();
      }),
    createNode: (nodeName, nodeAttr, attrName, nodeVal, domToPlaceIn) => {
      const n = domConstruct.create(nodeName);
      domAttr.set(n, nodeAttr, attrName);
      domAttr.set(n, 'innerHTML', nodeVal);
      domConstruct.place(n, domToPlaceIn);

      return n;
    },
  };
});
