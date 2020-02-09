import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models/Account';
import { Recipe } from '../models/Recipe';
import { Instruction } from '../models/Instruction';
import { InstructionService } from '../services/instruction.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  @Input() recipe: Recipe;
  edit: boolean[] = [];

  constructor(private instructionService: InstructionService) { }

  ngOnInit() {
  }

  addInstruction() {
    let instruction = new Instruction();
    instruction.recipeId = this.recipe.id;
    instruction.instruction = "new instruction";
    instruction.instructionOrder = this.recipe.instructionList.length + 1;

    this.instructionService.create(instruction).subscribe(
      res => {
        this.recipe.instructionList.push(res);
      },
      err => {
        console.log(err)
      }
    )
  }

  updateInstruction(event:string ,  i) {
    // console.log(instruction);
    console.log(event)
    this.recipe.instructionList[i].instruction = event
    this.toggleEdit(i);
  }

  toggleEdit(i) {
    this.edit[i] = !this.edit[i];
  }


}
