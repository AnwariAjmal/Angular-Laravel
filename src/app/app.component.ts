import {AppService} from './app.service';
import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    id;
    data = {}


    constructor(private _appService: AppService) {
        this._appService.showme().subscribe((data: Response) => {
            this.data = data.json();
            console.log(this.data);
        });
    }


    saveData(Employeeform: NgForm) {
        this.data = Employeeform.value;
        this._appService.sendData(this.data).subscribe((data) => {
            this.id = data.json();
            console.log(this.id)
            this.data = {}

        })
    }


}


