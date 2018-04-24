import { Component, Input } from '@angular/core';
import {Link} from '../../../models/link';

@Component({
  selector: '[linkVisual]',
  templateUrl: './link-visual.component.html',
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent  {
  @Input('linkVisual') link: Link;
}
