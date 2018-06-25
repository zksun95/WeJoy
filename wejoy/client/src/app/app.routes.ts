import { RouterModule, Routes } from '@angular/router';

import { EventsDisplayComponent } from './components/events-display/events-display.component';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewEventComponent } from "./components/new-event/new-event.component";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


// import { FileCreateComponent } from './others/file-create/file-create.component';
// import { ProfileComponent } from './others/profile/profile.component';
//import { UserAccessService } from './services/user-access.service';

const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: HomePageComponent,
    },
    {
        path: "signin",
        component: SignInComponent,
    },
    {
        path: "signup",
        component: SignUpComponent,
    },
    {
        path: "events",
        component: EventsDisplayComponent,
    },
    {
        path: "new-event",
        component: NewEventComponent,
    },
    {
        path: "profile",
        component: UserProfileComponent,
        //canActivate: ["userAccess"]
    },
    // TODO
    {
        path: "history",
        component: UserHistoryComponent,
        //canActivate: ["userAccess"]
    },
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
    },
    {
    path: "event/:name",
    component: EventsDisplayComponent,
    }
];

export const routing = RouterModule.forRoot(routes);
