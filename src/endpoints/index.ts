import { Router } from 'express';
import { IEntityServices } from '../interfaces/services/services.interface';
import { getSurveyRouter } from './survey/survey.router';

export const getRootRouter = (
    services: IEntityServices,
): Router => {
    const router = Router({ mergeParams: true });

    router.use('/surveys', getSurveyRouter(services));

    return router;
};
