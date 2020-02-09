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

  updateInstruction(input: string, i) {
    // console.log(instruction);
    // console.log(event)

    // console.log(instruction, this.recipe.instructionList[i])
    let updatedInstruction: Instruction = this.recipe.instructionList[i]
    updatedInstruction.instruction = input;

    console.log(updatedInstruction)
    this.instructionService.update(updatedInstruction).subscribe(
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

  deleteInstruction(i, instruction) {
    this.instructionService.delete(instruction.id).subscribe(
      res => {
        this.recipe.instructionList.splice(i, 1)
      },
      err => {

      }
    )
  }


}
