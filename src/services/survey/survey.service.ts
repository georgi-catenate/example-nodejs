/* eslint-disable @typescript-eslint/no-unused-vars */
import { SurveyProps, SurveyRepository } from '../../db/models/survey';
import { IServerConfiguration } from '../../interfaces/constants/server-configuration.interface';
import { ISurveyPost } from '../../interfaces/models/survey.model.interface';
import { ISurveyService } from './survey.interface';

export const createSurvey = (
    repository: SurveyRepository,
) => async (surveyToCreate: ISurveyPost): Promise<SurveyProps> => {
    const createdSurvey = await repository.create(surveyToCreate);
    console.log(`Survey created with id - ${createdSurvey.id}`);
    return createdSurvey;
};

export const getAllSurveys = (
    repository: SurveyRepository,
) => async (): Promise<SurveyProps[]> => {
    const survey = await repository.find();
    return survey.map((survey) => survey.toObject());
};

export const instantiateSurveyService = (
    configurations: IServerConfiguration,
    repository: SurveyRepository,
): ISurveyService => ({
    create: createSurvey(repository),
    getAll: getAllSurveys(repository),
});
