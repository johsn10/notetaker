import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";

// Custom syntax highlighting
const customHighlighting = HighlightStyle.define([
  { tag: t.heading, color: "#0075ff" },
  // Custom tag for #hashtags
  { tag: t.processingInstruction, color: "#2ecc71", fontWeight: "bold" },
]);

// Custom hashtag syntax
const hashtagSyntax = {
  name: "hashtag",
  token(stream) {
    if (stream.match(/#[a-zA-Z0-9]+/)) {
      return "processingInstruction";
    }
    stream.next();
    return null;
  },
};

export function createEditor(element) {
  return new EditorView({
    state: EditorState.create({
      doc: "",
      extensions: [
        basicSetup,
        javascript(),
        syntaxHighlighting(customHighlighting),
        hashtagSyntax,
      ],
    }),
    parent: element,
  });
}

export function updateContent(editor, content) {
  editor.dispatch({
    changes: {
      from: 0,
      to: editor.state.doc.length,
      insert: content,
    },
  });
}
