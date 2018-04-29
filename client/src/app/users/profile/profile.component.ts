import { Component, OnInit } from '@angular/core'
import { UsersService } from '../users.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    private data;

    constructor(
        private usersService: UsersService,
    ) { 
        this.data =  { }
    }

    ngOnInit() {
        this.getAnalyticsData();
    }

    getAnalyticsData() {
        this.usersService.getAnalyticsData().subscribe(data => {
            if (data['success']) {
                this.data.recipes = data['recipes'] || 0;
                this.data.beverages = data['beverages'] || 0;
                this.data.responses = data['responses'] || 0;
                this.data.users = data['users'] || 0;
            }
        })
    }
}