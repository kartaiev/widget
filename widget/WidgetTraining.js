define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_OnDijitClickMixin',
  'dijit/_TemplatedMixin',
  'dojo/text!./templates/template.html',
], function (
  declare,
  _WidgetBase,
  _OnDijitClickMixin,
  _TemplatedMixin,
  template
) {
  return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
    templateString: template,

    baseClass: 'widgetClass',
    title: '',
    _counter: 1,
    _firstClicked: false,

    _onClick: function () {
      if (this._firstClicked) {
        this.titleNode.innerHTML = `${this.title} was clicked ${++this
          ._counter} times.`;
      } else {
        this.titleNode.innerHTML = `${this.title}' was clicked!`;
        this._firstClicked = true;
      }
    },

    postCreate: function () {
      this.titleNode.innerHTML = this.title;
    },
  });
});
