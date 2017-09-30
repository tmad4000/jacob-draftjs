import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, SelectionState, Modifier } from 'draft-js';

export interface SimpleEditorState {
    editorState: EditorState
}


export interface SimpleEditorProps extends React.Props<SimpleEditor> {
}


export default class SimpleEditor extends React.Component<SimpleEditorProps, SimpleEditorState> {
    onChange: any

    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState: EditorState) => {
            let nextEditorState: EditorState = editorState

            if (editorState.getLastChangeType() === "insert-characters") {
                const SECRET_STRING = "noodles"
                let fo: number = editorState.getSelection().getFocusOffset()

                if (
                    editorState.getCurrentContent().getPlainText()
                        .substring(fo - SECRET_STRING.length, fo) === SECRET_STRING
                ) {



                    console.log(editorState.getCurrentContent().getPlainText())

                    let newContentState = Modifier.insertText(
                        editorState.getCurrentContent(),
                        editorState.getSelection(),
                        "panda",
                    )
                    nextEditorState = EditorState.push(
                        editorState,
                        newContentState,
                        "insert-characters"
                    )
                }
            }

            console.log(editorState.toJS())
            this.setState({ editorState: nextEditorState });
        }

    }
    render() {
        return (
            <div style={{ border: "1px solid pink" }}>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />
            </div>
        );
    }
}