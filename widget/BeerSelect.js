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
  return declare('BeerSelect', [Dialog, _WidgetsInTemplateMixin], {
    templateString: template,

    baseClass: 'dialog',

    url: 'https://api.punkapi.com/v2/beers',

    onShow: function () {
      console.log(this.selectNode.id);
      create.createSelect(this.url, this.selectNode.id);
    },
  });
});
