import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { HydratedDocument } from 'mongoose';

export type JobDocument = HydratedDocument<Job>;

@Schema()
export class Job {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop([String])
  tags: string[];

  @Prop(
    raw({
      email: { type: String },
      phoneNumber: { type: String },
    }),
  )
  contact: Record<string, any>;
}

export const JobSchema = SchemaFactory.createForClass(Job);
