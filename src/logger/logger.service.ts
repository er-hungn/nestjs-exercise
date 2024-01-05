import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerService {
  logRequest(request: Request) {
    console.log(
      `info\t${new Date().toLocaleString('en-US')}\trequest\t${
        request.method
      }\t${request.url}\theaders=${JSON.stringify(
        request.headers,
      )}\tbody=${JSON.stringify(request.body)}`,
    );
  }

  logResponse(request: Request, response: Response, responseBody: any) {
    console.error(
      `info\t${new Date().toLocaleString('en-US')}\tresponse\t${
        request.method
      }\t${request.url}\t${response.statusCode}\theaders=${JSON.stringify(
        response.getHeaders(),
      )}\tbody=${JSON.stringify(responseBody)}\tprocess-time=${
        Date.now() - request['begin']
      }ms`,
    );
  }
}
