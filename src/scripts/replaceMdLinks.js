const regex = /(\[\[)(.+)\|([а-яa-z0-9+\s]+)(]])/gi;

module.exports = function replaceMdLinks(mdContent, mdDocsFilesData, options) {
  const { doThrow, warnDifferentTitle } = {
    doThrow: false,
    warnDifferentTitle: false,
    ...options,
  };

  return mdContent.replace(regex, (_, __, fileName, fileTitle) => {
    const route = mdDocsFilesData.find((x) => x.fileName === fileName);
    if (!route) {
      if (doThrow) throw new Error(`Битая ссылка: "${fileName}|${fileTitle}"`);
      return `<${fileTitle}>`;
    }
    if (warnDifferentTitle && route.title !== fileTitle) {
      const errorMessage = `Отличающаяся подпись: "${fileName}|${fileTitle}" (${route.title})`;
      if (doThrow) throw new Error(errorMessage);
      console.warn(errorMessage);
    }

    return `[${fileTitle}](/${route.appRoute})`;
  });
};
