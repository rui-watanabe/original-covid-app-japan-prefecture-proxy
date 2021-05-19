import remakePrefectures from './remakePrefectures';
import prefectureApiData from '../../../prefectureApiData.json';

test('remakePrefectures test', () => {
  expect(remakePrefectures(prefectureApiData).currentPrefecture).toBe("tokyo");
});