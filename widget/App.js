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

    closeDialog: function () {
      this.beerSelect.hide();
    },

    postCreate: function () {
      const valueNode = this.valueNode;
      this.own(
        on(this.btnNode, 'click', lang.hitch(this, 'showDialog')),
        on(
          this.beerSelect,
          'beer',
          lang.hitch(this, ({ value }) => {
            valueNode.innerHTML = value.value;
            this.closeDialog();
          })
        )
      );
    },
  });
});
