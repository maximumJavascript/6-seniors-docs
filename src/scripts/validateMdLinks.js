const regex = /(\[\[)(.+)\|([а-яa-z0-9+\s]+)(]])/gi;

module.exports = function validateMdLinks(mdContent, mdDocsFilesData, options) {
  const { warnDifferentTitle } = {
    warnDifferentTitle: true,
    ...options,
  };

  // not using replace return, just check for errors
  return mdContent.replace(regex, (_, __, fileName, fileTitle) => {
    const route = mdDocsFilesData.find((x) => x.fileName === fileName);
    if (!route) {
      throw new Error(`Битая ссылка: "${fileName}|${fileTitle}"`);
    }
    if (warnDifferentTitle && route.title !== fileTitle) {
      throw new Error(
        `Отличающаяся подпись: "${fileName}|${fileTitle}" (${route.title})`
      );
    }

    return '';
  });
};
