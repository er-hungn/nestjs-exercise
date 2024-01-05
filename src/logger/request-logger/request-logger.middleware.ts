import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from '../logger.service';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private loggerService: LoggerService) {}

  use(req: Request, res: Response, next: () => void) {
    req['begin'] = Date.now();
    this.loggerService.logRequest(req);
    next();
  }
}
