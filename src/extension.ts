import * as vscode from 'vscode';
import { search } from './utils/search';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension-translate.traduzir', () => {
		const quickPick = vscode.window.createQuickPick();
		quickPick.title = 'Insira o texto a ser traduzido:';

		quickPick.onDidAccept(() => {
			const editor = vscode.window.activeTextEditor;

			if (editor !== undefined) {
				quickPick.value = editor.document.getText(editor.selection);
			}

			search(quickPick.value);
		});

		quickPick.onDidHide(() => quickPick.dispose());

		quickPick.show();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
