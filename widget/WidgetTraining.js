define([
  "dojo/_base/declare",
  "dojo/_base/fx",
  "dojo/_base/lang",
  "dojo/on",
  "dojo/dom-style",
  "dijit/_WidgetBase",
  "dijit/_OnDijitClickMixin",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/template.html",
], (
  declare,
  fx,
  lang,
  on,
  domSlyle,
  _WidgetBase,
  _OnDijitClickMixin,
  _TemplatedMixin,
  template
) => {
  return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
    templateString: template,

    baseClass: "page-overlay",

    title: "Loading...",

    loader: require.toUrl("../loading.gif"),

    postCreate: function () {
      this.titleNode.innerHTML = this.title;
      this.loaderNode.src = this.loader;
    },

    endLoading: function () {
      fx.fadeOut({
        node: this.domNode,
      }).play();
    },
  });
});
