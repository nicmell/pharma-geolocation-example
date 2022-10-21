import React, {useEffect, useState} from 'react';

import PharmaClient, {PharmaDataResponse} from "../Services/pharmaClient";

function App() {

  const [data, setData] = useState<PharmaDataResponse>()
  useEffect(() => {
    PharmaClient.fetchData().then(({data}) => setData(data))
  })

  return (
    <div className='App'>
      {
        JSON.stringify(data, null, 4)
      }
    </div>
  )
}

export default App
