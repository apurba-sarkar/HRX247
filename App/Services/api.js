import axios from "axios";

const strapi_api =
  "http://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC";

export async function getHospitalData() {
  try {
    const getData = await axios.get(strapi_api);
    console.log("----------")
    console.log(getData.data.slice(0,20));
    return getData.data;
  } catch (error) {
    console.log(error);
  }
}
