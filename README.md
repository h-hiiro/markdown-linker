# markdown-linker README

## Features

This extension add several commands to VSCode related to Markdown files and code files.

<!-- ## Known issues-->

### Markdown preview
When you
- right-click a source code file in the explorer or
- right-click in a editor of a source code file,

the added menu ```Open Readme (Markdown)``` appears.
When you click it, the extension opens a markdown file if exists.
The markdown file should be in the same directory as the specified source code file and has the same name body.

For example, if you choose ```src/main.go```, the extension opens ```src/main.md```.

### Markdown preview and go to the target
With the editor having selection, the extension opens a markdown file and go to the corresponding paragraph by clicking another menu ```Open Readme and Go to the Specified Target```.

The rule for the markdown file name is the same as the above function.
After that, the **gotosymbol** function (```Ctrl+Shift+O``` by default) is executed using the selected text as the argument.

For example, if you select ```# Installation```, the page scroll stops at the **Installation** paragraph.

## Release Notes

### 0.0.1
- Initial release

## Source Code
https://github.com/h-hiiro/markdown-linker
