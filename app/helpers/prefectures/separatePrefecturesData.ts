import { PREFECTUREAPIDATA } from "../../services/prefectures";
import prefectureData from '../../../prefectureData.json';
import countPrefecturesData from "./countPrefecturesData";
import { prefectureDataTypeKeyString } from "./remakePrefectures";

export type prefectureCountType = typeof prefectureData.data.hokkaido.hospitalize;

const separatePrefecturesData = (
  data: PREFECTUREAPIDATA,
  prefectureDataObjectData: prefectureDataTypeKeyString
) => {

  let retPrefectureDataObjectData = { ...prefectureDataObjectData };

  data.forEach((el) => {
    Object.keys(retPrefectureDataObjectData).forEach((key) => {
      if (retPrefectureDataObjectData[key].prefectureInfo.name === el.prefName) {
        switch (el.facilityType) {
          case '入院':
            retPrefectureDataObjectData[
              key
            ].hospitalize = countPrefecturesData(
              retPrefectureDataObjectData[key].hospitalize,
              el.ansType
            );
            break;
          case '外来':
            retPrefectureDataObjectData[
              key
            ].outPatient = countPrefecturesData(
              retPrefectureDataObjectData[key].outPatient,
              el.ansType
            );
            break;
          case '救急':
            retPrefectureDataObjectData[
              key
            ].emergency = countPrefecturesData(
              retPrefectureDataObjectData[key].emergency,
              el.ansType
            );
            break;
          default:
            break;
        }
      }
    });
  });
  return retPrefectureDataObjectData;
};
export default separatePrefecturesData;