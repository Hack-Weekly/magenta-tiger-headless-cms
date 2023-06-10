import { Schema, model } from 'mongoose';

export const ExampleSchema = new Schema<{ title: string }>({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
});

export const ExamplePost = model<{ title: string }>('Example', ExampleSchema);
