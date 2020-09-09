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
        console.log(data);
        const beerStore = new Memory({
          idProperty: 'tagline',
          data,
        });

        const select = new Select(
          {
            name: name,
            store: beerStore,
            style: 'width: 200px;',
            labelAttr: 'name',
            maxHeight: -1,
            onChange: function (value) {
              document.getElementById('value').innerHTML = value;
            },
          },
          name
        );

        select.startup();
      }),
    createNode: (nodeName, nodeAttr, attrName, nodeVal, domToPlaceIn) => {
      const x = domConstruct.create(nodeName);
      domAttr.set(x, nodeAttr, attrName);
      domAttr.set(x, 'innerHTML', nodeVal);
      domConstruct.place(x, domToPlaceIn);

      return x;
    },
  };
});
