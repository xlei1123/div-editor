# div-editor



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description | Type    | Default |
| ------------ | --------- | ----------- | ------- | ------- |
| `extensions` | --        |             | `any[]` | `[]`    |


## Events

| Event        | Description | Type                  |
| ------------ | ----------- | --------------------- |
| `editorInit` |             | `CustomEvent<Editor>` |


## Dependencies

### Depends on

- [div-menu](../div-menu)
- [div-tiptap](../div-tiptap)

### Graph
```mermaid
graph TD;
  div-editor --> div-menu
  div-editor --> div-tiptap
  div-menu --> div-menu-clear-format
  div-menu --> div-util-divider
  div-menu --> div-menu-insert
  div-menu --> div-menu-font-family
  div-menu --> div-menu-font-size
  div-menu --> div-menu-font-color
  div-menu --> div-menu-font-background
  div-menu --> div-menu-font-italic
  div-menu --> div-menu-font-bold
  div-menu --> div-menu-font-delline
  div-menu --> div-menu-font-underline
  div-menu --> div-menu-letter-space
  div-menu --> div-menu-line-height
  div-menu --> div-menu-todo
  div-menu --> div-menu-list
  div-menu --> div-menu-number-list
  div-menu --> div-menu-code
  div-menu --> div-menu-quote
  div-menu-insert --> div-menu-image
  div-menu-insert --> div-menu-divider
  style div-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
