import { Injectable } from '@nestjs/common';
import { SIRProvider } from '../../providers/sir/sir.provider';

@Injectable()
export class MetroUioService {

  constructor(private sirProvider: SIRProvider){}
  async buyTicket() {
    this.sirProvider.buytiket('test');
  }
}
