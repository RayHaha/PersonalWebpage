import { Component } from "@angular/core";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{
    openNewTab(link: string){
        window.open(link, '_blank');
    }
}