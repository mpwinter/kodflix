import reactJS from './images/react-icon.svg';
import html5 from './images/html5-icon.svg';
import css3 from './images/css3-icon.svg';
import node from './images/node-icon.svg';
import mongo from './images/database-icon.svg';
import heroku from './images/heroku-icon.svg';


// Return an array
export default function getTechnologies() {
    return [
      { id: 'react', name: 'React', logo: reactJS },
      { id: 'html5', name: 'HTML5', logo: html5, details: 'HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications. This set is sometimes called HTML5 & friends and often shortened to just HTML5.' },
      { id: 'css3', name: 'CSS3', logo: css3},
      { id: 'node', name: 'Node', logo: node },      
      { id: 'mongo', name: 'MongoDB', logo: mongo },      
      { id: 'heroku', name: 'Heroku', logo: heroku }
    ];
  }