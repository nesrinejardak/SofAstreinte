import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { SofAstreinteSharedModule, UserRouteAccessService } from './shared';
import { SofAstreinteAppRoutingModule} from './app-routing.module';
import { SofAstreinteHomeModule } from './home/home.module';
import { SofAstreinteAdminModule } from './admin/admin.module';
import { SofAstreinteAccountModule } from './account/account.module';
import { SofAstreinteEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        SofAstreinteAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SofAstreinteSharedModule,
        SofAstreinteHomeModule,
        SofAstreinteAdminModule,
        SofAstreinteAccountModule,
        SofAstreinteEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SofAstreinteAppModule {}
