import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { SIR_AUTH_TOKEN, SIR_PASSWORD, SIR_USERNAME } from './constants/sir';
import { RedisService } from './../../shared/redis/redis.service'
import { Injectable } from '@nestjs/common';

@Injectable()
export class SIRProvider {

  constructor(private httpService: HttpService, private readonly redisService: RedisService) { }

  async login(): Promise<string> {

    /*
    const { data: auth } = await lastValueFrom(
      this.httpService.post(`${process.env.ext_metro_service}/login`, {
        user: SIR_USERNAME,
        password: SIR_PASSWORD,
      }),
    );
    */
   const data= 'token';

    return data;

  }



  async validateToken(): Promise<string> {
    let token: string = await this.redisService.getCacheData(
      `${SIR_AUTH_TOKEN}`,
    );

    if (!token) {
      token = await this.login();
      await this.redisService.setCacheData(
        `${SIR_AUTH_TOKEN}`,
        `${token}`,
      );
    }
    return token;

  }

  async buytiket(body: any) {

    const token = await this.validateToken();
    console.log('token',token);
    const headersRequest = {
      Authorization: `Bearer ${token}`,
    };
    /*const { data: response } = await lastValueFrom(
      this.httpService.post(`${process.env.ext_metro_service}/JSONEnc`, body, {
        headers: headersRequest,
      }),
    );
    */
    //return response;
    return 'buy ticket';
  }
}
