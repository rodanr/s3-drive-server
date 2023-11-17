import { nanoid } from 'nanoid';

export const generateS3FileName: () => string = () => {
  return nanoid();
};
