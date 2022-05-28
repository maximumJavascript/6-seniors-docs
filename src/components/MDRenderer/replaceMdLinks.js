const regex = /(\[\[)(.+)\|([а-яa-z0-9+\s]+)(]])/gi;

export default function replaceMdLinks(mdContent, mdDocsFilesData) {
  return mdContent.replace(regex, (_, __, fileName, fileTitle) => {
    const route = mdDocsFilesData.find((x) => x.fileName === fileName);
    if (!route) return `<${fileTitle}>`;
    return `[${fileTitle}](/${route.appRoute})`;
  });
}
