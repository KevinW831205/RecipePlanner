import { Component, Input } from '@angular/core';
import { take } from 'rxjs/operators';

import { Instruction } from '../models/Instruction';
import { Recipe } from '../models/Recipe';
import { InstructionService } from '../shared/services/instruction.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {

  @Input() recipe: Recipe;
  edit: boolean[] = [];
  instructionInput: string = "";
  @Input('canEdit') canEdit: boolean = false;

  constructor(private instructionService: InstructionService) { }

  addInstruction() {
    let instruction = new Instruction();
    instruction.recipeId = this.recipe.id;
    instruction.instruction = this.instructionInput || "new instruction";
    instruction.instructionOrder = this.recipe.instructionList.length + 1;

    this.instructionService.create(instruction).subscribe(
      res => {
        this.recipe.instructionList.push(res);
        this.instructionInput = "";
      },
      err => {
        console.log(err)
      }
    )
  }

  updateInstruction(input: string, i) {
    // console.log(instruction);
    // console.log(event)

    // console.log(instruction, this.recipe.instructionList[i])
    let updatedInstruction: Instruction = this.recipe.instructionList[i]
    updatedInstruction.instruction = input;
    this.instructionService.update(updatedInstruction).pipe(
      take(1)
    ).subscribe(
      res => {
        this.recipe.instructionList[i] = res;
        this.toggleEdit(i);

      },
      err => {

      }
    )
  }

  toggleEdit(i) {
    this.edit[i] = !this.edit[i];
  }

  deleteInstruction(delIndex, instruction) {
    this.instructionService.delete(instruction.id).pipe(
      take(1)
    ).subscribe(
      res => {
        this.recipe.instructionList.splice(delIndex, 1)
        for (let i = delIndex; i < this.recipe.instructionList.length; i++) {
          this.decrementOrder(this.recipe.instructionList[i])
        }
      },
      err => {

      }
    )
  }

  private decrementOrder(instruction: Instruction) {
    instruction.instructionOrder--;

    this.instructionService.update(instruction).pipe(
      take(1)
    ).subscribe(
      res => {
      }
    )
  }

}
