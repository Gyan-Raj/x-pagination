import axios from "axios";
export const fetchData = async () => {
  try {
    let response = await axios.get(
      "https://geektrust.s3-ap-souctheast-1.amazonaws.com/adminui-problem/members.json"
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    alert("failed to fetch data");
  }
};
