import { Component, State, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';

interface Size {
  label: string;
  value: number;
}

@Component({
  tag: 'div-menu-font-size',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuFontSize {
  @Prop() editor: Editor
  @State() showList: Boolean = false;
  @State() size: Size = {
    label: '14',
    value: 14
  }

  /**
   * 字体列表
   */
  sizeList: Size[] = [
    {
      label: '初号',
      value: 56,
    },
    {
      label: '小初',
      value: 48
    },
    {
      label: '一号',
      value: 34.7
    },
    {
      label: '小一',
      value: 32
    },
    {
      label: '二号',
      value: 29.3
    },
    {
      label: '小二',
      value: 24
    },
    {
      label: '三号',
      value: 21.3
    },
    {
      label: '小三',
      value: 20
    },
    {
      label: '四号',
      value: 18.7
    },
    {
      label: '小四',
      value: 16
    },
    {
      label: '五号',
      value: 14
    },
    {
      label: '小五',
      value: 12
    },
    {
      label: '12',
      value: 12
    },
    {
      label: '14',
      value: 14
    },
    {
      label: '16',
      value: 16
    },
    {
      label: '18',
      value: 18
    },
    {
      label: '20',
      value: 20
    },
    {
      label: '22',
      value: 22
    },
    {
      label: '24',
      value: 24
    },
    {
      label: '26',
      value: 26
    },
    {
      label: '28',
      value: 28
    },
    {
      label: '36',
      value: 36
    },
    {
      label: '42',
      value: 42
    },
    {
      label: '48',
      value: 48
    },
    {
      label: '72',
      value: 72
    },
  ];
  
  listHidden = () => {
    this.showList = false;
  }
  toggleShowList = (event) => {
    this.showList = !this.showList;
    event.stopPropagation();
  }
  secSize = (size: Size) => {
    this.editor.commands.setFontSize(size.value);
    this.size = size;
  }
  connectedCallback() {
    document.addEventListener('click', this.listHidden);
  }
  disconnectedCallback() {
    document.removeEventListener('click', this.listHidden);
  }
  render() {
    return <div class="fontSize-content">
        <div class="fontSize" onClick={this.toggleShowList}>
          <span style={{marginRight: '2px'}}>{this.size.label}</span>
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3617" width="16" height="16"><path d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c0 0 0 0 0 0 0 0 0 0 0 0 3.2 3.2 9.6 6.4 12.8 9.6 0 0 3.2 3.2 3.2 3.2 16 6.4 38.4 3.2 51.2-9.6l240-243.2C806.4 428.8 803.2 400 787.2 380.8z" p-id="3618" fill="#707070"></path></svg>
        </div>
        {
         this.showList ? <div class="sizeList">
          {this.sizeList.map((size) => <div class="size" onClick={() => this.secSize(size)}>{size.label}</div>)}
        </div> : null
        }
      </div>
  }
}
