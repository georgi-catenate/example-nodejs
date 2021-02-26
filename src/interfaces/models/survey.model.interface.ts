import { SurveyProps } from '../../db/models/survey';

export interface ISurveyPost extends Omit<SurveyProps, '_id' | '__v' | 'createdAt' | 'updatedAt'> {}
