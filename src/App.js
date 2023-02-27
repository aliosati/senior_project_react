import './App.css';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import XMLData from './sample.xml';

function App() {
  
  const options = {
    title: {
      text: 'Senior Project'
    },
    series: [
      {
        data: [-1,-2,-3,1, 2, 1, 4, 3]
      }
    ]
  };
  
  // const xml = `<name>Garage</name>
  // <cars>
  //     <color>red</color>
  //     <maxSpeed>120</maxSpeed>
  //     <age>2</age>
  // </cars>
  // <cars>
  //     <color>blue</color>
  //     <maxSpeed>100</maxSpeed>
  //     <age>3</age>
  // </cars>
  // <cars>
  //     <color>green</color>
  //     <maxSpeed>130</maxSpeed>
  //     <age>2</age>
  // </cars>`;
  
  // const json = xml2json(xml, );
  
  // console.log(json);
  
  const [selectedFile, setSelectedFile] = useState(null);
   
  // On file select (from the pop up)
  const onFileChange = event => {
   setSelectedFile(event.target.files[0]);
    // Update the state
    // fetch('./sample.xml')
    //   .then((res) => res.text())
    //   .then(xmlString => new window.DOMParser().parseFromString(xmlString, "text/xml"))
    //   .then(data => {
    //     console.log(JSON.stringify(data, null, 1))
    //     setSelectedFile(data);})
    //   .catch((err) => {
    //     console.log(err);
    //   })

  };
   
  
  return (
    <div className="App">
 <div>
      <div>TITLE</div>
      <div>
       {(selectedFile) ?
            
             (
              <div>
                <h2>File Details:</h2>
                <p>File Name: {selectedFile.name}</p>
      
                <p>File Type: {selectedFile.type}</p>
      
                <p>
                  Last Modified:{" "}
                  {selectedFile.lastModifiedDate.toDateString()}
                </p>
      
              </div>
            )
           
            : (
              <div>
                <br />
                <h4>Choose before Pressing the Upload button</h4>
              </div>
            )}
          
              <h1>
                Authored by Soorena Ashtiani
              </h1>
              <h3>
                File Upload using React!
              </h3>
              <div>
                  <input type="file" onChange={onFileChange} />
              </div>
          </div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
    </div>
  );
}

// function convertXml2JSon() {
//   $("#jsonArea").val(JSON.stringify(x2js.xml_str2json($("#xmlArea").val())));
// }

// function convertJSon2XML() {
//   $("#xmlArea").val(x2js.json2xml_str($.parseJSON($("#jsonArea").val())));
// }

// $("#xmlArea").val("<root><child><textNode>First &amp; Child</textNode></child><child><textNode>Second Child</textNode></child><testAttrs attr1='attr1Value'/></root>");

// convertXml2JSon();
// convertJSon2XML();
// $("#convertToJsonBtn").click(convertXml2JSon);
// $("#convertToXmlBtn").click(convertJSon2XML);

export default App;
