import separatePrefecturesData from './separatePrefecturesData';
import prefectureApiData from '../../../prefectureApiData.json';
import prefectureData from '../../../prefectureData.json';

test('separatePrefecturesData test', () => {
  expect(separatePrefecturesData(prefectureApiData, prefectureData.data)).toStrictEqual(prefectureData.data);
});