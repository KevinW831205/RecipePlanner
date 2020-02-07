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

  constructor(private instructionService: InstructionService) { }

  ngOnInit() {
  }

  addInstruction() {
    let instruction = new Instruction(0, this.recipe.id, "ins", this.recipe.instructionList.length + 1);
    this.instructionService.create(instruction).subscribe(
      res => {
        this.recipe.instructionList.push(res);
      },
      err => {
        console.log(err)
      }
    )

  }


}
