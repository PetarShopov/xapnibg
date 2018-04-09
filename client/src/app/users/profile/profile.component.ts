import { Component, OnInit } from '@angular/core'
import { UsersService } from '../users.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    data: {
        recipes: 0,
        beverages: 0,
        responses: 0,
        users: 0
    };

    constructor(
        private usersService: UsersService
    ) { }

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