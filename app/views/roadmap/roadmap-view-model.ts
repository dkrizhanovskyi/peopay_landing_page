import { Observable, Utils } from '@nativescript/core';

export class RoadmapViewModel extends Observable {
    constructor() {
        super();
    }

    onGitHubTap() {
        Utils.openUrl('https://github.com/dkrizhanovskyi/peopay_landing_page');
    }
}