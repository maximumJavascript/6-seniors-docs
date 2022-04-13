import forMentorReadme from '../docs/forMentor/README.md';
import forMentorStudentInvolvement from '../docs/forMentor/studentInvolvement.md';
import forStudentMeetingsLogging from '../docs/forStudent/meetingsLogging.md';
import forStudentOtherMeetings from '../docs/forStudent/otherMeetings.md';
import forStudentPolls from '../docs/forStudent/polls.md';
import forStudentReadme from '../docs/forStudent/README.md';
import forStudentStudentKickSystem from '../docs/forStudent/studentKickSystem.md';
import forStudentTerms from '../docs/forStudent/terms.md';
import main from '../docs/Main.md';

export default [
  {
    appRoute: 'for-mentor-readme',
    fileSlashPath: 'forMentor/README',
    fileUrl: forMentorReadme,
    fileTitle: 'Для ментора',
    id: 1,
  },
  {
    appRoute: 'for-mentor-student-involvement',
    fileSlashPath: 'forMentor/studentInvolvement',
    fileUrl: forMentorStudentInvolvement,
    fileTitle: 'Вовлеченность студента',
    id: 2,
  },
  {
    appRoute: 'for-student-meetings-logging',
    fileSlashPath: 'forStudent/meetingsLogging',
    fileUrl: forStudentMeetingsLogging,
    fileTitle: 'Логирование посещения встреч',
    id: 3,
  },
  {
    appRoute: 'for-student-other-meetings',
    fileSlashPath: 'forStudent/otherMeetings',
    fileUrl: forStudentOtherMeetings,
    fileTitle: 'Другие встречи',
    id: 4,
  },
  {
    appRoute: 'for-student-polls',
    fileSlashPath: 'forStudent/polls',
    fileUrl: forStudentPolls,
    fileTitle: 'Опросы',
    id: 5,
  },
  {
    appRoute: 'for-student-readme',
    fileSlashPath: 'forStudent/README',
    fileUrl: forStudentReadme,
    fileTitle: 'Для студента',
    id: 6,
  },
  {
    appRoute: 'for-student-student-kick-system',
    fileSlashPath: 'forStudent/studentKickSystem',
    fileUrl: forStudentStudentKickSystem,
    fileTitle: 'Система баллов на кик',
    id: 7,
  },
  {
    appRoute: 'for-student-terms',
    fileSlashPath: 'forStudent/terms',
    fileUrl: forStudentTerms,
    fileTitle: 'Термины',
    id: 8,
  },
  {
    appRoute: 'main',
    fileSlashPath: 'Main',
    fileUrl: main,
    fileTitle: 'Personal info:',
    id: 9,
  },
];
