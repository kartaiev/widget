define([
  'dojo/_base/declare',
  'dojo/Evented',
  'dojo/on',
  'dijit/form/Button',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dijit/form/Select',
  'dijit/Dialog',
  'modules/fetchData',
  'widget/Overlay',
  'dojo/text!./templates/beerSelect.template.html',
], (
  declare,
  Evented,
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

    url: 'https://api.punkapi.com/v2/beers',

    data: null,

    send: function (value) {
      this.emit('beer', { value });
    },

    overlay: new Overlay(),

    onShow: function () {
      this.overlay.placeAt(container);

      fetchData.getBeers(this.url).then((beers) => {
        !this.data &&
          beers.map(({ name, tagline }) =>
            this.selectNode.addOption({ label: name, value: tagline })
          );

        this.data = beers;

        this.overlay.endLoading();
      });

      this.btnNode.on('click', () => {
        this.send({ value: this.selectNode.value });
      });
    },
  });
});
