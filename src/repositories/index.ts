import { models } from '../db/models';
import { IRepositories } from '../interfaces/repositories/repositories.interface';

export const initiateDbRepositories = (): IRepositories => ({
    survey: models.Survey,
});
