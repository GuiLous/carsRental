import { Response, Request } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      this.createCategoryUseCase.execute({ name, description });
    } catch (error) {
      return response.status(400).json(error);
    }

    return response.status(201).send();
  }
}

export { CreateCategoryController };
