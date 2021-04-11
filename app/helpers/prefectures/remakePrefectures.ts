import { PREFECTUREAPIDATA } from "../../services/prefectures";
import prefectureData from '../../../prefectureData.json';
import separatePrefecturesData from "./separatePrefecturesData";

type prefecturesDataType = typeof prefectureData.data;
type prefectureDataType = typeof prefectureData.data.hokkaido;
export type prefectureDataTypeKeyString = {
  [key: string]: prefectureDataType;
};

const remakeCovidPatientsData = (
  data: PREFECTUREAPIDATA
) => {
  const prefectureDataObject = JSON.parse(JSON.stringify(prefectureData));
  const dataDate = data[0].submitDate;
  const setDate = `${dataDate.substr(0, 4)}年${dataDate.substr(
    5,
    2
  )}月${dataDate.substr(8, 2)}日`;
  prefectureDataObject.date = setDate;

  let prefectureDataObjectData: prefectureDataTypeKeyString = JSON.parse(
    JSON.stringify(prefectureData.data)
  );

  prefectureDataObjectData = separatePrefecturesData(data, prefectureDataObjectData);

  prefectureDataObject.data = prefectureDataObjectData as prefecturesDataType;
  return prefectureDataObject;
};
export default remakeCovidPatientsData;