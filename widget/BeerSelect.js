define([
  'dojo/_base/declare',
  'dojo/on',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dijit/form/Select',
  'dojo/store/Memory',
  'dojo/data/ObjectStore',
  'dijit/Dialog',
  'modules/create',
  'modules/fetchData',
  'widget/Overlay',
  'dojo/text!./templates/beerSelectTemplate.html',
], (
  declare,
  on,
  _WidgetBase,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  Memory,
  ObjectStore,
  Select,
  Dialog,
  create,
  fetchData,
  Overlay,
  template
) => {
  return declare('BeerSelect', [Dialog, _WidgetsInTemplateMixin], {
    templateString: template,

    baseClass: 'dialog',

    url: 'https://api.punkapi.com/v2/beers',

    onShow: function () {
      fetchData.getBeers(this.url).then((data) => {
        this.selectNode.addOption({ label: '', value: '', selected: true });
        data.map((beer) =>
          this.selectNode.addOption({ label: beer.name, value: beer.tagline })
        );
      });

      this.selectNode.on('change', () => {
        document.getElementById('value').innerHTML = this.selectNode.value;
      });
    },
  });
});
