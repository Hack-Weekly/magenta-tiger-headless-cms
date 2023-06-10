/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { ExamplePost } from '../models/example.model';

export class Example {
  async createExamplePost(req: Request, res: Response): Promise<Response> {
    try {
      const { title }: { title: string } = req.body;

      const examplePost = new ExamplePost({
        title,
      });

      await examplePost.save();

      return res
        .status(200)
        .json({ message: 'Post created successfully', examplePost });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: 'Failed to create new post', error });
    }
  }
}
