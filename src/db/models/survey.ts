import { createSchema, ExtractDoc, ExtractProps, Type, typedModel } from 'ts-mongoose';

const SurveySchema = createSchema(
    {
      type: Type.string({ required: true }),
      name: Type.string({ required: true }),
      endDate: Type.date(),
    },
    { timestamps: true, toObject: { virtuals: true, versionKey: false } },
);

const Survey = typedModel('Survey', SurveySchema);

export type SurveyDoc = ExtractDoc<typeof SurveySchema>;
export type SurveyProps = ExtractProps<typeof SurveySchema>;
export type SurveyRepository = typeof Survey;

export default Survey;
