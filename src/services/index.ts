import { IServerConfiguration } from '../interfaces/constants/server-configuration.interface';
import { IRepositories } from '../interfaces/repositories/repositories.interface';
import { IEntityServices } from '../interfaces/services/services.interface';
import { instantiateSurveyService } from './survey/survey.service';

export const initializeServices = (
    configurations: IServerConfiguration,
    repositories: IRepositories,
): IEntityServices => {
    const services = {} as IEntityServices;

    services.surveyService = instantiateSurveyService(configurations, repositories.survey);

    return services;
};
