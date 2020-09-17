define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/on',
  'dijit/form/Button',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'widget/BeerSelect',
  'dojo/text!./templates/app.template.html',
], (
  declare,
  lang,
  on,
  Button,
  _WidgetBase,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  BeerSelect,
  template
) => {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    templateString: template,

    beerSelect: new BeerSelect(),

    showDialog: function () {
      this.beerSelect.show();
    },

    getVal: function ({ value }) {
      this.valueNode.innerHTML = value;
    },

    postCreate: function () {
      this.own(
        on(this.btnNode, 'click', this.showDialog.bind(this)),
        on(this.beerSelect, 'beer', this.getVal.bind(this))
      );
    },
  });
});
