export type UploadedObjectsListItem = {
  fileName: string;
  key: string;
  displaySize: number;
  sizeInBytes: number;
};

export type UploadedObjectsListResponse = Array<UploadedObjectsListItem>;
