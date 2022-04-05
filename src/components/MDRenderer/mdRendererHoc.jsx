import MDRenderer from './MDRenderer';

export default function mdRendererHoc(mdFileUrl) {
  return () => <MDRenderer mdPageUrl={mdFileUrl} />;
}
