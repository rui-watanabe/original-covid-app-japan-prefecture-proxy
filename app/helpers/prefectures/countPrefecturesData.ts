import prefectureData from '../../../prefectureData.json';
type prefectureCountType = typeof prefectureData.data.hokkaido.hospitalize;

const countPrefecturesData = (
  object: prefectureCountType,
  answerType: string
) => {
  let retPrefectureCount = { ...object };
  switch (answerType) {
    case '通常':
      retPrefectureCount.normal += 1;
      break;
    case '制限':
      retPrefectureCount.limit += 1;
      break;
    case '停止':
      retPrefectureCount.stopped += 1;
      break;
    case '設置なし':
      retPrefectureCount.unanswered += 1;
      break;
    case '未回答':
      retPrefectureCount.unintroduced += 1;
      break;
    default:
      break;
  }
  return retPrefectureCount;
};

export default countPrefecturesData;