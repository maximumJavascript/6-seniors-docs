import forStudentReadme from '../docs/1.forStudent/_README.md';
import forStudentMeetingsLogging from '../docs/1.forStudent/meetingsLogging.md';
import forStudentOtherMeetings from '../docs/1.forStudent/otherMeetings.md';
import forStudentPolls from '../docs/1.forStudent/polls.md';
import forStudentStudentKickSystem from '../docs/1.forStudent/studentKickSystem.md';
import forStudentTerms from '../docs/1.forStudent/terms.md';
import forMentorReadme from '../docs/2.forMentor/_README.md';
import forMentorStudentInvolvement from '../docs/2.forMentor/studentInvolvement.md';

export default [
  { title: 'Для студента', id: 'folder_1.forStudent_1', type: 'folder' },
  {
    appRoute: 'for-student/readme',
    folderName: '1.forStudent',
    fileName: '_README',
    fileUrl: forStudentReadme,
    title: 'README',
    nestLevel: 1,
    id: '2',
    type: 'file',
  },
  {
    appRoute: 'for-student/meetings-logging',
    folderName: '1.forStudent',
    fileName: 'meetingsLogging',
    fileUrl: forStudentMeetingsLogging,
    title: 'Логирование посещения встреч',
    nestLevel: 1,
    id: '3',
    type: 'file',
  },
  {
    appRoute: 'for-student/other-meetings',
    folderName: '1.forStudent',
    fileName: 'otherMeetings',
    fileUrl: forStudentOtherMeetings,
    title: 'Другие встречи',
    nestLevel: 1,
    id: '4',
    type: 'file',
  },
  {
    appRoute: 'for-student/polls',
    folderName: '1.forStudent',
    fileName: 'polls',
    fileUrl: forStudentPolls,
    title: 'Опросы',
    nestLevel: 1,
    id: '5',
    type: 'file',
  },
  {
    appRoute: 'for-student/student-kick-system',
    folderName: '1.forStudent',
    fileName: 'studentKickSystem',
    fileUrl: forStudentStudentKickSystem,
    title: 'Система баллов на кик',
    nestLevel: 1,
    id: '6',
    type: 'file',
  },
  {
    appRoute: 'for-student/terms',
    folderName: '1.forStudent',
    fileName: 'terms',
    fileUrl: forStudentTerms,
    title: 'Термины',
    nestLevel: 1,
    id: '7',
    type: 'file',
  },
  { title: 'Для ментора', id: 'folder_2.forMentor_8', type: 'folder' },
  {
    appRoute: 'for-mentor/readme',
    folderName: '2.forMentor',
    fileName: '_README',
    fileUrl: forMentorReadme,
    title: 'README',
    nestLevel: 1,
    id: '9',
    type: 'file',
  },
  {
    appRoute: 'for-mentor/student-involvement',
    folderName: '2.forMentor',
    fileName: 'studentInvolvement',
    fileUrl: forMentorStudentInvolvement,
    title: 'Вовлеченность студента',
    nestLevel: 1,
    id: '10',
    type: 'file',
  },
];
