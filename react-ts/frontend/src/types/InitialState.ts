export type LoadingStatus = 'idle' | 'loading' | 'finish' | 'failed';

export type InitialState = {
  error: string | null;
  loadingStatus: LoadingStatus;
};
