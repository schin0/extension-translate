import * as vscode from 'vscode';

export function search(input: string): void {
    let translatePtToEn = `http://translate.google.com.br/?hl=pt-BR&sl=pt&tl=en&text=${input}&op=translate`;
    let translatePtToEs = `http://translate.google.com.br/?hl=pt-BR&sl=pt&tl=es&text=${input}&op=translate`;
    let translatePtToNl = `http://translate.google.com.br/?hl=pt-BR&sl=pt&tl=nl&text=${input}&op=translate`;

    vscode.env.openExternal(vscode.Uri.parse(translatePtToEn));
    vscode.env.openExternal(vscode.Uri.parse(translatePtToEs));
    vscode.env.openExternal(vscode.Uri.parse(translatePtToNl));
}