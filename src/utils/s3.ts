import { FILE_SIZE } from 'src/aws/s3/constants';

export const getDisplaySizeFromBytes = (sizeInBytes: number): string => {
  if (sizeInBytes >= FILE_SIZE.ONE_GB) {
    return `${sizeInBytes / FILE_SIZE.ONE_GB} GB`;
  } else {
    return `${sizeInBytes / FILE_SIZE.ONE_MB} MB`;
  }
};
