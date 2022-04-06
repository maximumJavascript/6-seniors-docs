import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import css from './MDRenderer.module.scss';
import useTextDownloadByUrl from './useTextDownloadByUrl';
import cn from 'classnames';

const mdPluginsProp = [gfm];

function MDContentRenderer({ mdContent, isError, isLoading }) {
  const mdContentToRender = isError
    ? '#### Error while loading markdown'
    : isLoading && !mdContent
    ? '#### Loading...'
    : mdContent;

  const isLoadingNext = isLoading && !!mdContent;

  return (
    <ReactMarkdown
      className={cn(css.md, isLoadingNext && css.transition)}
      remarkPlugins={mdPluginsProp}
    >
      {mdContentToRender}
    </ReactMarkdown>
  );
}

function MDRenderer({
  mdContent,
  mdPageUrl,
  VisualComponent = MDContentRenderer,
}) {
  const { isError, isLoading, result } = useTextDownloadByUrl({
    resourceUrl: mdPageUrl,
  });

  if (mdContent) {
    return <VisualComponent mdContent={mdContent} />;
  }

  return (
    <VisualComponent
      mdContent={result}
      isLoading={isLoading}
      isError={isError}
    />
  );
}

export default MDRenderer;
