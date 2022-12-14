(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@tiptap/core'), require('@tiptap/extension-blockquote'), require('@tiptap/extension-bold'), require('@tiptap/extension-bullet-list'), require('@tiptap/extension-code'), require('@tiptap/extension-code-block'), require('@tiptap/extension-document'), require('@tiptap/extension-dropcursor'), require('@tiptap/extension-gapcursor'), require('@tiptap/extension-hard-break'), require('@tiptap/extension-heading'), require('@tiptap/extension-history'), require('@tiptap/extension-horizontal-rule'), require('@tiptap/extension-italic'), require('@tiptap/extension-list-item'), require('@tiptap/extension-ordered-list'), require('@tiptap/extension-paragraph'), require('@tiptap/extension-strike'), require('@tiptap/extension-text')) :
  typeof define === 'function' && define.amd ? define(['@tiptap/core', '@tiptap/extension-blockquote', '@tiptap/extension-bold', '@tiptap/extension-bullet-list', '@tiptap/extension-code', '@tiptap/extension-code-block', '@tiptap/extension-document', '@tiptap/extension-dropcursor', '@tiptap/extension-gapcursor', '@tiptap/extension-hard-break', '@tiptap/extension-heading', '@tiptap/extension-history', '@tiptap/extension-horizontal-rule', '@tiptap/extension-italic', '@tiptap/extension-list-item', '@tiptap/extension-ordered-list', '@tiptap/extension-paragraph', '@tiptap/extension-strike', '@tiptap/extension-text'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["@tiptap/starter-kit"] = factory(global.core, global.Blockquote, global.Bold, global.BulletList, global.Code, global.CodeBlock, global.Document, global.Dropcursor, global.Gapcursor, global.HardBreak, global.Heading, global.History, global.HorizontalRule, global.Italic, global.ListItem, global.OrderedList, global.Paragraph, global.Strike, global.Text));
})(this, (function (core, Blockquote, Bold, BulletList, Code, CodeBlock, Document, Dropcursor, Gapcursor, HardBreak, Heading, History, HorizontalRule, Italic, ListItem, OrderedList, Paragraph, Strike, Text) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Blockquote__default = /*#__PURE__*/_interopDefaultLegacy(Blockquote);
  var Bold__default = /*#__PURE__*/_interopDefaultLegacy(Bold);
  var BulletList__default = /*#__PURE__*/_interopDefaultLegacy(BulletList);
  var Code__default = /*#__PURE__*/_interopDefaultLegacy(Code);
  var CodeBlock__default = /*#__PURE__*/_interopDefaultLegacy(CodeBlock);
  var Document__default = /*#__PURE__*/_interopDefaultLegacy(Document);
  var Dropcursor__default = /*#__PURE__*/_interopDefaultLegacy(Dropcursor);
  var Gapcursor__default = /*#__PURE__*/_interopDefaultLegacy(Gapcursor);
  var HardBreak__default = /*#__PURE__*/_interopDefaultLegacy(HardBreak);
  var Heading__default = /*#__PURE__*/_interopDefaultLegacy(Heading);
  var History__default = /*#__PURE__*/_interopDefaultLegacy(History);
  var HorizontalRule__default = /*#__PURE__*/_interopDefaultLegacy(HorizontalRule);
  var Italic__default = /*#__PURE__*/_interopDefaultLegacy(Italic);
  var ListItem__default = /*#__PURE__*/_interopDefaultLegacy(ListItem);
  var OrderedList__default = /*#__PURE__*/_interopDefaultLegacy(OrderedList);
  var Paragraph__default = /*#__PURE__*/_interopDefaultLegacy(Paragraph);
  var Strike__default = /*#__PURE__*/_interopDefaultLegacy(Strike);
  var Text__default = /*#__PURE__*/_interopDefaultLegacy(Text);

  const StarterKit = core.Extension.create({
      name: 'starterKit',
      addExtensions() {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
          const extensions = [];
          if (this.options.blockquote !== false) {
              extensions.push(Blockquote__default["default"].configure((_a = this.options) === null || _a === void 0 ? void 0 : _a.blockquote));
          }
          if (this.options.bold !== false) {
              extensions.push(Bold__default["default"].configure((_b = this.options) === null || _b === void 0 ? void 0 : _b.bold));
          }
          if (this.options.bulletList !== false) {
              extensions.push(BulletList__default["default"].configure((_c = this.options) === null || _c === void 0 ? void 0 : _c.bulletList));
          }
          if (this.options.code !== false) {
              extensions.push(Code__default["default"].configure((_d = this.options) === null || _d === void 0 ? void 0 : _d.code));
          }
          if (this.options.codeBlock !== false) {
              extensions.push(CodeBlock__default["default"].configure((_e = this.options) === null || _e === void 0 ? void 0 : _e.codeBlock));
          }
          if (this.options.document !== false) {
              extensions.push(Document__default["default"].configure((_f = this.options) === null || _f === void 0 ? void 0 : _f.document));
          }
          if (this.options.dropcursor !== false) {
              extensions.push(Dropcursor__default["default"].configure((_g = this.options) === null || _g === void 0 ? void 0 : _g.dropcursor));
          }
          if (this.options.gapcursor !== false) {
              extensions.push(Gapcursor__default["default"].configure((_h = this.options) === null || _h === void 0 ? void 0 : _h.gapcursor));
          }
          if (this.options.hardBreak !== false) {
              extensions.push(HardBreak__default["default"].configure((_j = this.options) === null || _j === void 0 ? void 0 : _j.hardBreak));
          }
          if (this.options.heading !== false) {
              extensions.push(Heading__default["default"].configure((_k = this.options) === null || _k === void 0 ? void 0 : _k.heading));
          }
          if (this.options.history !== false) {
              extensions.push(History__default["default"].configure((_l = this.options) === null || _l === void 0 ? void 0 : _l.history));
          }
          if (this.options.horizontalRule !== false) {
              extensions.push(HorizontalRule__default["default"].configure((_m = this.options) === null || _m === void 0 ? void 0 : _m.horizontalRule));
          }
          if (this.options.italic !== false) {
              extensions.push(Italic__default["default"].configure((_o = this.options) === null || _o === void 0 ? void 0 : _o.italic));
          }
          if (this.options.listItem !== false) {
              extensions.push(ListItem__default["default"].configure((_p = this.options) === null || _p === void 0 ? void 0 : _p.listItem));
          }
          if (this.options.orderedList !== false) {
              extensions.push(OrderedList__default["default"].configure((_q = this.options) === null || _q === void 0 ? void 0 : _q.orderedList));
          }
          if (this.options.paragraph !== false) {
              extensions.push(Paragraph__default["default"].configure((_r = this.options) === null || _r === void 0 ? void 0 : _r.paragraph));
          }
          if (this.options.strike !== false) {
              extensions.push(Strike__default["default"].configure((_s = this.options) === null || _s === void 0 ? void 0 : _s.strike));
          }
          if (this.options.text !== false) {
              extensions.push(Text__default["default"].configure((_t = this.options) === null || _t === void 0 ? void 0 : _t.text));
          }
          return extensions;
      },
  });

  return StarterKit;

}));
//# sourceMappingURL=tiptap-starter-kit.umd.js.map
