import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {


  @Get()
  main(): string {



    return "Hello world";
  }
}
