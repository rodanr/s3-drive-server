import { FILE_SIZE_IN_BYTES } from 'src/aws/s3/constants';

export const getDisplaySizeFromBytes = (sizeInBytes: number): string => {
  if (sizeInBytes >= FILE_SIZE_IN_BYTES.ONE_GB) {
    return `${sizeInBytes / FILE_SIZE_IN_BYTES.ONE_GB} GB`;
  } else {
    return `${sizeInBytes / FILE_SIZE_IN_BYTES.ONE_MB} MB`;
  }
};
