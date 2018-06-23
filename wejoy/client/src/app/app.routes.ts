import { RouterModule, Routes } from '@angular/router';

import { EventsDisplayComponent } from './components/events-display/events-display.component';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';
// import { FileCreateComponent } from './others/file-create/file-create.component';
// import { ProfileComponent } from './others/profile/profile.component';
//import { UserAccessService } from './services/user-access.service';

const routes: Routes = [
    {
        path: "",
        redirectTo: "events",
        pathMatch: "full",
    },
    {
        path: "events",
        component: EventsDisplayComponent,
    },
    // {
    //     path: "profile",
    //     component: ProfileComponent,
    //     canActivate: ["userAccess"]
    // },
    {
        path: "events/detail/:id",
        component: EventsDetailComponent,
    },
    // {
    //     path: "files/create",
    //     component: FileCreateComponent
    // },
    {
        path: "**",
        redirectTo: "events",
    }
];

export const routing = RouterModule.forRoot(routes);