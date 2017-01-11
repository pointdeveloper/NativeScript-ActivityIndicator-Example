import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public isLoading = true;

    public onTap() {
            this.isLoading = this.isLoading==false ? true :false;
    }
}
