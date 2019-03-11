export const vsCodeTitle = 'Getting Started with VS Code(In Progress)';

const markdown = `
# ${vsCodeTitle}

## Introduction
Visual Studio Code(VS Code) is a modern code editor made by Microsoft. It runs on all major operating systems, and was made with Electron(read more about Electron [here](https://electronjs.org/)). It has a built in terminal, source control features, has many community driven extensions, and allows for deep customization.

## Installation
* Go [here](https://code.visualstudio.com/download) and select the appropriate installer for your operating system. 
**Note** I would suggest being better than everyone else and installing the Insiders edition. It releases the newest, albeit less tested, features sooner. Get it [here](https://code.visualstudio.com/insiders/).

* Be sure to select adding VS Code as a PATH variable and as a file explorer option. This will add VS Code as an option to open folders in your file explorer. Adding it as a PATH variable allows you to enter \`code relative_path_to_folder\` in a terminal and open it in VS Code(ie: \`code C:\\Apps\\my-app\`, \`code ./my-app\` or \`code .\`)

* You can now launch VS Code and check it out.

## The Command Pallette
You can run any operation available in VS Code from the command pallette. You can open it by pressing \`Ctrl+Shift+P\` and typing your command.

## Keyboard Bindings
You can view all assigned keyboard bindings by pressing \`Ctrl+K\` + \`Ctrl+S\`

## Extensions
Extensions are one of the main sources of productivity gains you can have. Press \`Ctrl+Shift+X\` to open the extensions explorer. Here is a list of some sweet ones to go check out:

* advanced-new-file
* Change Case
* Code Runner
* Code Spell Checker
* Debugger for Chrome
* Quokka
* Live Server
* Prettier
* Relative Path
* SQL Server (mssql)
* VS Live Share and VS Live Share Audio
* vscode-styled-components

`;

export default markdown;