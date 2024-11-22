import { Observable, Utils, Frame } from '@nativescript/core';

export class HomeViewModel extends Observable {
    constructor() {
        super();
    }

    onSendMoney() {
        // TODO: Implement send money flow
        console.log('Send money tapped');
    }

    onReceive() {
        // TODO: Implement receive flow
        console.log('Receive tapped');
    }

    onGitHubTap() {
        Utils.openUrl('https://github.com/dkrizhanovskyi/peopay_landing_page');
    }

    onGetInvolved() {
        // TODO: Implement community engagement flow
        console.log('Get involved tapped');
    }

    onMenu() {
        Frame.topmost().navigate({
            moduleName: "views/about/about-page",
            transition: {
                name: "slide"
            }
        });
    }
}