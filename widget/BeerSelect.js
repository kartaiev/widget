define([
  'dojo/_base/declare',
  'dojo/dom',
  'dojo/on',
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
  dom,
  on,
  _WidgetBase,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  Select,
  Dialog,
  fetchData,
  Overlay,
  template
) => {
  return declare('BeerSelect', [Dialog, _WidgetsInTemplateMixin], {
    templateString: template,

    baseClass: 'dialog',

    url: 'https://api.punkapi.com/v2/beers',

    onShow: function () {
      const overlay = new Overlay().placeAt(container);

      fetchData.getBeers(this.url).then((data) => {
        this.selectNode.addOption({ label: '', value: '', selected: true });
        this.selectNode.options.length < 2 &&
          data.map((beer) =>
            this.selectNode.addOption({ label: beer.name, value: beer.tagline })
          );
        overlay.endLoading();
      });

      this.selectNode.on('change', () => {
        dom.byId('value').innerHTML = this.selectNode.value;
      });
    },
  });
});
