import { Router, Request, Response } from 'express';
import { ISurveyPost } from '../../interfaces/models/survey.model.interface';
import { IEntityServices } from '../../interfaces/services/services.interface';

export const getSurveyRouter = (
    services: IEntityServices,
): Router => {
    const router = Router({ mergeParams: true });

    router.get('/', async (request: Request, response: Response) => {
        try {
            const surveys = await services.surveyService.getAll();
            response.json(surveys);
        } catch (error) {
            throw new Error(error);
        }
    });

    router.post('/', async (request: Request, response: Response) => {
        const surveyToCreate: ISurveyPost = request.body;

        const createdSurvey = await services.surveyService.create(surveyToCreate);

        response.json(createdSurvey);
    });

    return router;
};
