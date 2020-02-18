import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Instruction } from '../../models/Instruction';
import { baseUrl } from './httpConfig';
import { DataService } from './data.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class InstructionService extends DataService<Instruction> {

  constructor(http: HttpClient, errorService: ErrorService) {
    super(http, baseUrl + "instruction", errorService)
  }
}
