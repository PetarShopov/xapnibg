import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdminService } from '../admin/admin.service';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    users: Array<object> = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private adminService: AdminService
    ) { }

    ngOnInit() {
        this.getUsers();
    }

    delete(id) {
        console.log(id);
        this.adminService.deleteUser(id).subscribe(result => {
            const removedId = result.output._id;
            this.users = this.users.filter(function(item){
              if (item['_id'] !== removedId) {
                  return true;
              } else {
                  return false;
              }  
            });
        })
    }

    getUsers() {
        this.adminService.getUsers().subscribe(data => {
            this.users = data.users;
        })
    }
}
