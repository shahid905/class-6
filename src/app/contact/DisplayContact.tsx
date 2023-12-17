import { contactType } from "../types/commonTypes"
export default function DisplayContact(props:{contactData:contactType[]}) {
  return (
    <div>

        
            <div> 
              <table>
                <tr>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>CNIC No.</th>
                  <th>Registration No.</th>
                  <th>Identification Mark</th>
                  <th>E-Mail</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Zip Code</th>
                  <th>Message</th>
                </tr>
                {props.contactData.map((item,index)=>{
          return (

              <tr key={index} className="tb-row">
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.cnic}</td>
                <td>{item.registration}</td>
                <td>{item.Identity}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.zipcode}</td>
                <td>{item.message}</td>
              </tr>
            )
        })}
              </table>
            </div>
          
        {/* <h1>Name:{props.contactData.name}</h1>
        <h1>E-mail:{props.contactData.email}</h1>
        <h1>Phone:{props.contactData.phone}</h1>
        <h1>Message:{props.contactData.message}</h1> */}

    </div>
  )
}

// const cellStyle = {
//   border: '1px solid #ddd',
//   padding: '8px',
//   textAlign: 'left',
//   backgroundColor: '#f2f2f2', // Header background color
// };