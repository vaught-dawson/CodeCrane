import React, { useCallback } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView, basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { EditorState, Compartment } from "@codemirror/state";
const CodeEditor = ({ starterCode = "", className = "" }) => {
	let tabSize = new Compartment();
	const state = EditorState.create({
		extensions: [
			basicSetup,
			javascript(),
			dracula,
			keymap.of([indentWithTab]),
			tabSize.of(EditorState.tabSize.of(4)),
		],
		doc: starterCode,
	});

	const editorElement = useCallback((editorElement) => {
		if (editorElement !== null) {
			let view = new EditorView({
				state,
				parent: editorElement,
			});
		}
	}, []);

	return <div ref={editorElement}></div>;
};

export default CodeEditor;
//extend
