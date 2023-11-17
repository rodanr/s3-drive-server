export type UploadedObjectsListItem = {
  fileName: string;
  key: string;
  displaySize: string;
  sizeInBytes: number;
  lastModified: Date;
};

export type UploadedObjectsListResponse = Array<UploadedObjectsListItem>;
