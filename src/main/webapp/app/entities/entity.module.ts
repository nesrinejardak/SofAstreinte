import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SofAstreinteRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { SofAstreinteCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { SofAstreinteLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { SofAstreinteDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { SofAstreinteTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { SofAstreinteEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { SofAstreinteJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { SofAstreinteJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SofAstreinteRegionMySuffixModule,
        SofAstreinteCountryMySuffixModule,
        SofAstreinteLocationMySuffixModule,
        SofAstreinteDepartmentMySuffixModule,
        SofAstreinteTaskMySuffixModule,
        SofAstreinteEmployeeMySuffixModule,
        SofAstreinteJobMySuffixModule,
        SofAstreinteJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SofAstreinteEntityModule {}
