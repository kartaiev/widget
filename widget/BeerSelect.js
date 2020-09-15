define([
  'dojo/_base/declare',
  'dojo/Evented',
  'dojo/dom',
  'dojo/on',
  'dijit/form/Button',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dijit/form/Select',
  'dijit/Dialog',
  'modules/fetchData',
  'widget/Overlay',
  'dojo/text!./templates/beerSelectTemplate.html',
], (
  declare,
  Evented,
  dom,
  on,
  Button,
  _WidgetBase,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  Select,
  Dialog,
  fetchData,
  Overlay,
  template
) => {
  return declare('BeerSelect', [Evented, Dialog, _WidgetsInTemplateMixin], {
    templateString: template,

    baseClass: 'dialog',

    url: 'https://api.punkapi.com/v2/beers',

    data: null,

    send: function (value) {
      this.emit('beer', { value });
    },

    onShow: function () {
      const overlay = new Overlay().placeAt(container);

      fetchData.getBeers(this.url).then((beers) => {
        !this.data &&
          beers.map((beer) =>
            this.selectNode.addOption({ label: beer.name, value: beer.tagline })
          );

        this.data = beers;

        overlay.endLoading();
      });

      this.btnNode.on('click', () => {
        this.send({ value: this.selectNode.value });
      });
    },
  });
});
