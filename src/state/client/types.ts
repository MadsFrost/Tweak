export interface ClientOptions {
    appBar: AppBarOptions;
    editor: EditorOptions;
    appFooter: AppFooterOptions;
}

export interface AppBarOptions {
    style: ElementStyles;
}

export interface EditorOptions {
    style: ElementStyles;
}

export interface AppFooterOptions {
    style: ElementStyles;
}

export interface ElementStyles {
    background: string;
    text: string;
}

export type AppElement = "appbar" | "appfooter" | "editor";