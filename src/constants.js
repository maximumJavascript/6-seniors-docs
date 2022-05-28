import mdDocsData from './generated/mdRoutesData';

export const mdDocsFilesData = mdDocsData.filter((x) => x.type === 'file');
export const mdDocsFolderData = mdDocsData.filter((x) => x.type === 'folder');

export const basePath = '/6-seniors-docs';
export const isLocalhost = process.env.NODE_ENV === 'development';

export { default as mdDocsData } from './generated/mdRoutesData';
