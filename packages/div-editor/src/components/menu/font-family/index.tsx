import { Component, State, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';

interface Family {
  label: string;
  value: string;
}

@Component({
  tag: 'div-menu-font-family',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuFontFamily {
  @Prop() editor: Editor
  @State() showList: Boolean = false;
  @State() currentFamily: Family = {
    label: '宋体',
    value: 'SimSun',
  };

  /**
   * font list
   */
  familyList:Family[] = [
    {
      label: '微软雅黑',
      value: 'Microsoft YaHei',
    },
    {
      label: '宋体',
      value: 'SimSun',
    },
    {
      label: '新宋体',
      value: 'NSimSun',
    },
    {
      label: '仿宋',
      value: 'FangSong',
    },
    {
      label: '黑体',
      value: 'KaiTi',
    },
    {
      label: '楷体',
      value: 'KaiTi',
    },
    {
      label: '华文黑体',
      value: 'STHeiti',
    },
    {
      label: '华文楷体',
      value: 'STKaiti',
    },
    {
      label: '华文宋体',
      value: 'STSong',
    },
    {
      label: '华文仿宋',
      value: 'STFangsong',
    },
  ];
  
  listHidden = () => {
    this.showList = false;
  }
  toggleShowList = (event) => {
    this.showList = !this.showList;
    event.stopPropagation();
  }
  secFamily = (family: Family) => {
    this.editor.chain().focus().setFontFamily(family.value).run();
    this.currentFamily = family;
  }
  connectedCallback() {
    document.addEventListener('click', this.listHidden);
    this.editor && this.editor.commands.setFontFamily(this.currentFamily.value);
  }
  disconnectedCallback() {
    document.removeEventListener('click', this.listHidden);
  }
  render() {
    return <div class="fontFamily-content">
        <div class="fontFamily" onClick={this.toggleShowList}>
          <span>{this.currentFamily.label}</span>
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3617" width="16" height="16"><path d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c0 0 0 0 0 0 0 0 0 0 0 0 3.2 3.2 9.6 6.4 12.8 9.6 0 0 3.2 3.2 3.2 3.2 16 6.4 38.4 3.2 51.2-9.6l240-243.2C806.4 428.8 803.2 400 787.2 380.8z" p-id="3618" fill="#707070"></path></svg>
        </div>
        {
         this.showList ? <div class="familyList">
          {this.familyList.map((family) => <div class="family" onClick={() => this.secFamily(family)}>{family.label}</div>)}
        </div> : null
        }
      </div>
  }
}
