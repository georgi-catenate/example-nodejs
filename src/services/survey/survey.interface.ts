import { SurveyProps } from '../../db/models/survey';
import { ISurveyPost } from '../../interfaces/models/survey.model.interface';

export interface ISurveyService {
    create: (survey: ISurveyPost) => Promise<SurveyProps>;
    getAll: () => Promise<SurveyProps[]>;
}
