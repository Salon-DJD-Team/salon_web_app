import { Component } from '@angular/core';
import { DisplayMediaComponent } from '../display-media/display-media.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-about-us-v4',
  imports: [DynamicDialogModule],
  templateUrl: './about-us-v4.component.html',
  providers: [DialogService],
})
export class AboutUsV4Component {
  constructor(private dialogService: DialogService) {}

  displayVideo(): void {
    this.dialogService.open(DisplayMediaComponent, {
      header: 'About Us Video',
      closable: true,
      appendTo: 'body',
      width: '70%'
    });
  }
}
