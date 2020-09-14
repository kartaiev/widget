define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dijit/form/Select',
  'dijit/Dialog',
  'modules/create',
  'modules/fetchData',
  'widget/Overlay',
  'dojo/text!./templates/beerSelectTemplate.html',
], (
  declare,
  _WidgetBase,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  Select,
  Dialog,
  create,
  fetchData,
  Overlay,
  template
) => {
  return declare('BeerSelect', [Dialog], {
    templateString: template,

    baseClass: 'dialog',

    url: 'https://api.punkapi.com/v2/beers',

    onShow: function () {
      fetchData.getBeers(this.url).then((data) => {
        this.selectNode.addOption(data);
      });
    },
  });
});
