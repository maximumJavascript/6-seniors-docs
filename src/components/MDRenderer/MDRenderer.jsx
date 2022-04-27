import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import css from './MDRenderer.module.scss';
import useTextDownloadByUrl from './useTextDownloadByUrl';
import useMDLinks from './useMDLinks';
import cn from 'classnames';

const mdPluginsGfm = [gfm];
const mdPluginsRehype = [rehypeRaw];

function MDStringRenderer({ mdContent, isError, isLoading }) {
  const mdContentToRender = isError
    ? '#### Error while loading markdown'
    : isLoading && !mdContent
    ? '#### Loading...'
    : mdContent;

  const isLoadingNext = isLoading && !!mdContent;

  return (
    <ReactMarkdown
      className={cn(css.md, isLoadingNext && css.transition)}
      remarkPlugins={mdPluginsGfm}
      rehypePlugins={mdPluginsRehype}
    >
      {mdContentToRender}
    </ReactMarkdown>
  );
}

function MDUrlRenderer({ mdPageUrl, VisualComponent = MDStringRenderer }) {
  const { isError, isLoading, result } = useTextDownloadByUrl({
    resourceUrl: mdPageUrl,
  });

  const { mdContentWithLinks, onClick } = useMDLinks({ mdContent: result });

  return (
    <div onClickCapture={onClick}>
      <VisualComponent
        mdContent={mdContentWithLinks}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

function MDRenderer({
  mdContent,
  VisualComponent = MDStringRenderer,
  ...rest
}) {
  if (mdContent) {
    return <VisualComponent mdContent={mdContent} />;
  }

  return <MDUrlRenderer {...rest} VisualComponent={VisualComponent} />;
}

export default MDRenderer;
