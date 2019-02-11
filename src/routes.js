const tutorials = '/tutorials';
const tutorialParameter = '/:tutorialId(\\d+)';

export const getTutorialsRoute = () => tutorials;
export const getTutorialRoute = (tutorialId = '') =>
  `${tutorials}/${tutorialId}`;

export const getTutorialsPath = () => tutorials;
export const getTutorialPath = () => `${tutorials}${tutorialParameter}`;
