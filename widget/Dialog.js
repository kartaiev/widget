define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dijit/Dialog',
  'modules/create',
  'widget/Overlay',
  'dojo/text!./templates/dialogTemplate.html',
], (
  declare,
  _WidgetBase,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  Dialog,
  create,
  Overlay,
  template
) => {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    templateString: template,

    baseClass: 'under',

    getBeersAndPopup: function () {
      console.log(Dialog);
      const overlay = new Overlay().placeAt(container);

      create.createSelect('https://api.punkapi.com/v2/beers');

      overlay.endLoading();
      this.dialogNode.show();
    },
  });
});
