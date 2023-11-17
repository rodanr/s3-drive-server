import { FILE_SIZE_IN_BYTES } from 'src/aws/s3/constants';

export const getDisplaySizeFromBytes = (sizeInBytes: number): string => {
  if (sizeInBytes >= FILE_SIZE_IN_BYTES.ONE_GB) {
    return `${(sizeInBytes / FILE_SIZE_IN_BYTES.ONE_GB).toFixed(2)} GB`;
  } else {
    return `${(sizeInBytes / FILE_SIZE_IN_BYTES.ONE_MB).toFixed(2)} MB`;
  }
};
