import axios from 'axios';
import prefectureApiData from '../../prefectureApiData.json';
import remakePrefectures from '../helpers/prefectures/remakePrefectures';
import { prefecturesApiHost } from '../app';

export type PREFECTUREAPIDATA = typeof prefectureApiData;

export class Prefectures {
  public async get() {
    const { data } = await axios.get<PREFECTUREAPIDATA>(prefecturesApiHost);
    const apiData = remakePrefectures(data);
    return {
        data: apiData
    } 
  }
}