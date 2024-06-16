import axios from "axios";
export const fetchData = async () => {
  try {
    let response = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("failed to fetch data");
  }
};
