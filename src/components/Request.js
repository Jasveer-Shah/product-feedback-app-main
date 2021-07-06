import React from 'react'
import axios from 'axios';

function Request() {
     const [requests, setrequests] = useState([]);

     useEffect(() => {
         axios
         .get('./data.json')
         .then((res) => setrequests(res.data.productRequests))
         .catch((err) => console.log(err));
       
     }, [])

    return (
        <div>
          {
              requests.map((request) =>{
                  <Request key={request.id} request={request}/>
              })
          }  
        </div>
    )
}

export default Request
