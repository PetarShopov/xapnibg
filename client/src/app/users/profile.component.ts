import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    animals: Array<object> = []

    constructor() { }

    ngOnInit() {
        // this.animalsActions.mine();

        // this.ngRedux
        //     .select(state => state.animals.myAnimals)
        //     .subscribe(animals => this.animals = animals)
    }

    delete(id) {
        // this.animalsActions.delete(id);
    }
}