import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MachineIDService {

  public machineID: string = "";
  public patientID: number;
  
  constructor() { }
}
