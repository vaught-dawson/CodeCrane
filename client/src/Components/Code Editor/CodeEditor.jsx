import React, { useCallback } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView, basicSetup } from "codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { EditorState, inputHandler } from "@codemirror/state";
const CodeEditor = () => {
  let algoDefault = `/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
**/
function twoSum(nums, target) {\n    \n}`;

  const state = EditorState.create({
    extensions: [basicSetup, javascript(), dracula],
    doc: algoDefault,
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
