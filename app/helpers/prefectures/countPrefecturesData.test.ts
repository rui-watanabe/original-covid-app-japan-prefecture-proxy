import countPrefecturesData from './countPrefecturesData';
import prefectureData from '../../../prefectureData.json';

const resultTestObject = {
  "limit": 0, 
  "normal": 1, 
  "stopped": 0, 
  "unanswered": 0, 
  "unintroduced": 0
}

test('countPrefecturesData test', () => {
  expect(countPrefecturesData(prefectureData.data.hokkaido.hospitalize, '通常').normal).toBe(1);
});