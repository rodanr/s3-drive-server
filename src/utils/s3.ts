export const s3ObjectKeyToFileName = (key: string): string => {
  return key.split('/')[2];
};
