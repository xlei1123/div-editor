import React, { Component, createElement } from 'react';
import { DivEditor, toExtention } from 'component-library-react';
import { Editor } from 'component-library';
import TestClass from './test-class';
import Counter from './hook';
import './App.css';
import ReactDOM from 'react-dom';

interface State {
  value: number | null;
}

const customExtensions = [
  {
    name: 'react_class',
    component: TestClass,
  },
  {
    name: 'hook',
    component: Counter,
  }
].map((extension) => {
  return toExtention(extension, createElement, ReactDOM.render)
})
class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: null
    };
  }
  editor: Editor|null = null;
  updateRangeValue = (newValue: number) => {
    this.setState(() => ({
      value: newValue
    }));
  };
  onEditorInit = (ev: any) => {
    this.editor = ev.detail
  }
  insertCom = () => {
    if(!this.editor) return;
    this.editor.commands.insertContent({
      type: 'react_class',
    });
    this.editor.commands.focus();
  }
  insertHook = () => {
    if(!this.editor) return;
    this.editor.commands.insertContent({
      type: 'hook',
    });
    this.editor.commands.focus();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DivEditor onEditorInit={this.onEditorInit} editorExtensions={customExtensions} children={undefined} className={undefined}/>

          {this.state.value ? <p>Value is {this.state.value}</p> : null}
          <button onClick={this.insertCom}>插入class组件</button>
          <button onClick={this.insertHook}>插入hook组件</button>
        </header>
      </div>
    );
  }
}

export default App;
