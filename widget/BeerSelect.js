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

    overlay: new Overlay(),

    url: 'https://api.punkapi.com/v2/beers',

    data: null,

    endLoading: function () {
      this.overlay.endLoading();
    },

    getDataAddOptions: function () {
      fetchData.getBeers(this.url).then((beers) => {
        beers.map(({ name, tagline }) =>
          this.selectNode.addOption({ label: name, value: tagline })
        );

        this.data = beers;

        this.endLoading();
      });
    },

    onOkClick: function () {
      this.emit('beer', { value: this.selectNode.value });
      this.hide();
    },

    onShow: function () {
      this.overlay.placeAt(container);

      !this.data && this.getDataAddOptions();
    },

    postCreate: function () {
      this.inherited(arguments);
      const onOkClick = this.onOkClick.bind(this);
      this.own(on(this.btnNode, 'click', onOkClick));
    },
  });
});
