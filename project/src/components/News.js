import React, {useState, useEffect} from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import axios from 'axios'

function News() {
   const [hospitals, setHospitals] = useState([]);

   useEffect(() => {
    axios({
         method: "GET",
         withCredentials: true,
         url: "http://localhost:3001/api/news/showNews"
    }).then(res => {
        res.data.map(hosp => {
            if(hosp.freebeds === 0){
               setHospitals(prev => [...prev, hosp.name]);
            }
        });
    });
   }, [])
   
        return (
          <div>
          <Container>
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">News</h1>
          <Row className="mt-5">
              <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
    
                  <ul>
                    {hospitals.map((hosp, index) => 
                    (<li key={index}>There are no more free beds in {hosp} hospital.</li>))}
                    </ul>
              </Col>
          </Row>
      </Container>
          </div>
        )
    
}

export default News;