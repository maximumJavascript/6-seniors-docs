import MDRenderer from './MDRenderer';

export default function mdRendererHoc(mdFileUrl) {
  return function MDRendererHocResult() {
    return <MDRenderer mdPageUrl={mdFileUrl} />;
  };
}
