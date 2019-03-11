import nodeSetupMarkdown from '../tutorials/node-setup';
import reactRouterMarkdown from '../tutorials/react-router';
import vsCodeMarkdown from '../tutorials/vs-code';
import classResourcesMarkdown from '../tutorials/class-resources';

const mapper = {
  1: nodeSetupMarkdown,
  2: reactRouterMarkdown,
  3: classResourcesMarkdown,
  4: vsCodeMarkdown,
};

const getMarkdown = id => {
  return mapper[id];
};

export default getMarkdown;
