import { Controller, Get, Param, Res } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobService: JobsService) {}

  @Get()
  index() {
    return this.jobService.findAll();
  }

  @Get('/:id')
  async show(@Res() res, @Param('id') id: string) {
    const job = await this.jobService.findOne(id);

    if (!job) {
      return res.status(404).send();
    }

    return res.json(job).send();
  }
}
