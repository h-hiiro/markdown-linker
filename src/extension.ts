import * as vscode from "vscode";
import path from "node:path";
import { access, constants } from "node:fs";

export function activate(context: vscode.ExtensionContext) {
	console.log("markdown-linker extension is activated");

	function getMdUri(e: any, callback: Function) {
		const codePath = e.fsPath;
		const parsedPath = path.parse(codePath);
		const mdName = parsedPath.name + ".md";
		const mdPath = path.join(parsedPath.dir, mdName);
		console.log("markdown-linker filename: " + mdName);
		access(mdPath, constants.R_OK, (err) => {
			if (err) {
				vscode.window.showWarningMessage("Readme file " + mdName + " does not exist or is not readable");
				return;
			} else {
				callback(vscode.Uri.file(mdPath));
			}
		});
	}
	vscode.commands.registerCommand("markdown-linker.mdpreview", (e) => {
		getMdUri(e, (uri: vscode.Uri) => {
			vscode.commands.executeCommand("vscode.open", uri);
			vscode.commands.executeCommand("markdown.showPreviewToSide", uri);
		});
	});
	vscode.commands.registerCommand("markdown-linker.gotomd", (e) => {
		getMdUri(e, (uri: vscode.Uri) => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				var text = editor.document.getText(editor.selection);
				console.log("markdown-linker.gotomd: "+text);
				vscode.commands.executeCommand("vscode.open", uri);
				vscode.commands.executeCommand("workbench.action.quickOpen", "@" + text);
				vscode.commands.executeCommand("markdown.showPreviewToSide", uri);
			}
		});
	});
}

export function deactivate() { }
