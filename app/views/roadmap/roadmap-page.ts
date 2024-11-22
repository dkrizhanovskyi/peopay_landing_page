import { EventData, Page } from '@nativescript/core';
import { RoadmapViewModel } from './roadmap-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new RoadmapViewModel();
}