require('../scss/normalize.scss');
require('../scss/media.scss');
require('../scss/style.scss');
require('../scss/text.scss');

require('./PersonalDataService.js');
require('./CvService.js');
require('./InterestsService.js');
require('./LanguagesService.js');
require('./ProfileService.js');
require('./WorkExperienceService.js');
require('./EductaionAndQualificationsService.js');
require('./SkillsService.js');
require('./PublicationsService.js');
require('./SaveToPdfService.js');

import { faviconUpdate } from './FaviconService.js';
faviconUpdate();

