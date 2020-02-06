import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewRecipeModalComponent } from '../new-recipe-modal/new-recipe-modal.component';

@Component({
  selector: 'app-new-recipe-btn',
  templateUrl: './new-recipe-btn.component.html',
  styleUrls: ['./new-recipe-btn.component.css']
})
export class NewRecipeBtnComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(NewRecipeModalComponent);
  }


}
