import mdDocsData from './generated/mdRoutesData';

export const mdDocsFilesData = mdDocsData.filter((x) => x.type === 'file');
export const mdDocsFolderData = mdDocsData.filter((x) => x.type === 'folder');

export { default as mdDocsData } from './generated/mdRoutesData';
