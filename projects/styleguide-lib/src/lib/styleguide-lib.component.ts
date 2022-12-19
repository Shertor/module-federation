import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'lib-styleguide-lib',
  template: `
    <p>
      styleguide-lib works!
    </p>
  `,
  styles: [
  ]
})
export class StyleguideLibComponent {

}
