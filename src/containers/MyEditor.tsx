import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

export interface MyEditorState {
    editorState: any
}


export interface MyEditorProps extends React.Props<MyEditor> {
}


export default class MyEditor extends React.Component<MyEditorProps, MyEditorState> {
    onChange: any

    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
    }
    render() {
        return (
            <div style={{ border: "1px solid gray" }}>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />
            </div>
        );
    }
}