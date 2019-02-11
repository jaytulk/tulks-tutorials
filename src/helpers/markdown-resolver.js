import nodeSetupMarkdown from '../tutorials/node-setup/node-setup';

const mapper = {
  1: nodeSetupMarkdown,
};

const getMarkdown = id => {
  return mapper[id];
};

export default getMarkdown;
