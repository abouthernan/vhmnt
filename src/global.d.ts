declare global {
    interface Window {
        dataLayer: any[];
    }
    function gtag(command: string, param?: string, config?: object): void;
}

export {};
