export interface INavigator {
    navigateTo(url:string): void;
}

export class Navigator implements INavigator{
    navigateTo(url: string) {
        window.location.href = url;
    }
}