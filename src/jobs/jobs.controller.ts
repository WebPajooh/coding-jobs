import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobService: JobsService) {}

  @Get()
  findAll() {
    return this.jobService.findAll();
  }
}
