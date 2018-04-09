import { Component, OnInit } from '@angular/core'
import { UsersService } from '../users.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    data: {};

    constructor(
        private usersService: UsersService
    ) {}

    ngOnInit() {
        this.getAnalyticsData();
    }

    getAnalyticsData() {
        this.usersService.getAnalyticsData().subscribe(data => {
            if (data.success) {
                this.data = data;
            }
        })
    }
}