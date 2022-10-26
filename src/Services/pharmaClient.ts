import axios from "axios";

import {PharmaData} from "@/Typings/pharma";


const pharmaClient = {
  fetchData: async function() {
    return  await axios.get<PharmaData[]>(
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
