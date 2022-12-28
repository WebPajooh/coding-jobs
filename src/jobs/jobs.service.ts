import { Injectable } from '@nestjs/common';
import { Job, JobDocument } from './schemas/job.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

  async findAll(): Promise<Job[]> {
    return this.jobModel.find().select('-contact');
  }

  async findOne(id: string): Promise<Job> {
    return this.jobModel.findOne({ _id: id });
  }
}
