import axios from "axios";

import {PharmaDataResponse} from "@/Typings/pharma";


const pharmaClient = {
  fetchData: async function() {
    return  await axios.get<PharmaDataResponse>(
      `${process.env.REACT_APP_PHARMA_DATASET_URL}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    )
  }
}


export default pharmaClient
