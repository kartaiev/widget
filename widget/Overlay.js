define([
  "dojo/_base/declare",
  "dojo/_base/fx",
  "dojo/dom-style",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/overlayTemplate.html",
], (declare, fx, domSlyle, _WidgetBase, _TemplatedMixin, template) => {
  return declare([_WidgetBase, _TemplatedMixin], {
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
        onEnd: function (node) {
          domSlyle.set(node, "display", "none");
        },
      }).play();
    },
  });
});
