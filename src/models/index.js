// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note3 } = initSchema(schema);

export {
  Note3
};