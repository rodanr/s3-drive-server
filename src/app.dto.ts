export type UploadedObjectsListItem = {
  fileName: string;
  key: string;
  displaySize: string;
  sizeInBytes: number;
};

export type UploadedObjectsListResponse = Array<UploadedObjectsListItem>;
