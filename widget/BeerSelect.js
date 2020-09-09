define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/on',
  'dijit/Dialog',
  'widget/Overlay',
  'modules/create',
], (declare, lang, on, Dialog, Overlay, create) => {
  return declare('dijit/BeerSelect', [Dialog], {
    declaredClass: 'dijit/BeerSelect',

    url: 'https://api.punkapi.com/v2/beers',

    selectName: 'beerSelect',

    _getBeersAndPopup: function () {
      const { url, selectName, containerNode: dialogNode } = this;
      console.log(dialogNode);

      const overlay = new Overlay().placeAt(container);

      create.createSelect(url, selectName);

      overlay.endLoading();

      dialogNode.show();
    },

    postCreate: function () {
      const { selectName, containerNode: dialogNode, own } = this;
      const { createNode } = create;

      console.log(dialogNode);

      const btn = createNode(
        'button',
        'class',
        'under-btn',
        'See the Beer!',
        container
      );

      createNode('div', 'id', selectName, '', dialogNode);

      createNode('p', 'id', 'value', '', dialogNode);

      own(on(btn, 'click', lang.hitch(this, '_getBeersAndPopup')));
    },
  });
});
