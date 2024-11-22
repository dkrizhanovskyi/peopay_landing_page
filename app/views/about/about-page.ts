import { EventData, Page } from '@nativescript/core';
import { AboutViewModel } from './about-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new AboutViewModel();
}