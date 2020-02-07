import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models/Account';
import { Recipe } from '../models/Recipe';
import { Instruction } from '../models/Instruction';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  addInstruction() {
    this.recipe.instructionList.push(new Instruction(0, 0, "ins", 0));
  }


}
