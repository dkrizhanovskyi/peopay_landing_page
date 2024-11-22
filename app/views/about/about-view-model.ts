import { Observable, Frame } from '@nativescript/core';

export class AboutViewModel extends Observable {
    constructor() {
        super();
    }

    onViewRoadmap() {
        Frame.topmost().navigate({
            moduleName: "views/roadmap/roadmap-page",
            transition: {
                name: "slide"
            }
        });
    }
}