import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Instruction } from '../models/Instruction';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './httpConfig';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class InstructionService extends DataService<Instruction> {

  constructor(http: HttpClient, errorService: ErrorService) {
    super(http, baseUrl + "instruction", errorService)
  }
}
