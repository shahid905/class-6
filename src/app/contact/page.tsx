"use client"
import * as yup from "yup"
import { useState } from "react"
import { contactType, onChangeEventType } from "../types/commonTypes"
import DisplayContact from "./DisplayContact"

export default function ContactForm() {
    const [contactInfo, setContactInfo] = useState <contactType> ({
      first_name : "",
      last_name: "",
      cnic :0,
      registration : 0,
      Identity: "",
      email: "",
      phone:0,
      address : "",
      zipcode : 0,
      message: ""
    })
     
    // Validation Schema for the form
    const [errors, setError] = useState <string[]> ([])

    const contactInfoSchema = yup.object().shape({
      name: yup.string(). required(). min(5). max(12),
      email: yup.string().email(). required(),
      phone: yup.number().required(),
      registration: yup.number().required(),
      message: yup.string().required(),
    })
  

    const [contactList, setContactList] = useState <contactType[]> ([])

        const onChangeHandler = (e:onChangeEventType) => {
            let userDetails = {
                ...contactInfo,
                [e.target.name]:e.target.value
            }
            setContactInfo(userDetails)
        }

          const onClickHandler = async () => {
            try {
              const result = await contactInfoSchema.validate(contactInfo)
              console.log(result);

              if (!result) {
                return
              }

              let newContactList:contactType[] = [...contactList, contactInfo]
              setContactList(newContactList)
              // console.log("newContactList", contactList);
              setError([])
              setContactInfo({
                first_name : "",
      last_name : "",
      cnic :0,
      registration : 0,
      Identity : "",
      email: "",
      phone:0,
      address : "",
      zipcode : 0,
      message: ""
            })
          }
            // } 
          catch (err) {

              setError(err.errors)

              console.log("error", err.errors);
            }
          }


      return (
        <>
        <h1 className="container align-center text-4xl">Admission Form</h1>
        <form className="max-w-md mx-auto"> 
          <div className="flex justify-between container grid grid-cols-2 gap-x-4">
          <div className="mb-6">
  
  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
    First Name
  </label>
  <input
    value={contactInfo.first_name}
    onChange={onChangeHandler}
    type="text"
    id="name"
    name="name"
    className="w-full px-3 py-2 border rounded-md"
    required
    
    />
</div>

<div className="mb-6">

<label htmlFor="f_name" className="block text-gray-700 text-sm font-bold mb-2" aria-placeholder="Last">
Last Name
</label>
<input
value={contactInfo.last_name}
onChange={onChangeHandler}
type="text"
id="f_name"
name="f_name"
className="w-full px-3 py-2 border rounded-md"
required
/>
</div>


          </div>
         


<div className="mb-6">
  
  <label htmlFor="cnic" className="block text-gray-700 text-sm font-bold mb-2">
    CNIC Number:
  </label>
  <input
    value={contactInfo.cnic}
    onChange={onChangeHandler}
    type="number"
    id="cnic"
    name="cnic"
    className="w-full px-3 py-2 border rounded-md"
    required
  />
</div>


<div className="mb-4">
            <label htmlFor="registration" className="block text-gray-700 text-sm font-bold mb-2">
              Registration No:
            </label>
            <input
            value={contactInfo.registration}
              onChange={onChangeHandler}
              type="number"
              id="registration"
              name="registration"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>



<div className="mb-6">
  
  <label htmlFor="Identity" className="block text-gray-700 text-sm font-bold mb-2">
    Identification Mark:
  </label>
  <input
    value={contactInfo.Identity}
    onChange={onChangeHandler}
    type="text"
    id="Identity"
    name="Identity"
    className="w-full px-3 py-2 border rounded-md"
    
  />
</div>


          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              value={contactInfo.email}
              onChange={onChangeHandler}
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
            value={contactInfo.phone}
              onChange={onChangeHandler}
              type="number"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
  

          <div className="mb-6">
  
  <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
    Address:
  </label>
  <input
    value={contactInfo.address}
    onChange={onChangeHandler}
    type="text"
    id="address"
    name="address"
    className="w-full px-3 py-2 border rounded-md"
    required
  />
</div>


<div className="mb-6">
  
  <label htmlFor="zipcode" className="block text-gray-700 text-sm font-bold mb-2">
    ZIP Code:
  </label>
  <input
    value={contactInfo.zipcode}
    onChange={onChangeHandler}
    type="number"
    id="zipcode"
    name="zipcode"
    className="w-full px-3 py-2 border rounded-md"
    required
  />
</div>



  
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              value={contactInfo.message}
              onChange={onChangeHandler}
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border rounded-md"
              required
            ></textarea>
          </div>
          {/* {
            errors.map((item)=>{
              return (
                <div style={{color:"red"}}>
                  <h1>{item}</h1>
                </div>
              )
            })
          } */}

          {errors.map((item)=>{
          return (
            <div style={{color:"red"}}>
              <h1>{item}</h1>
            </div>
          )
        })}


          <div className="mb-6">
            <button
            onClick={onClickHandler}
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form> 

        <DisplayContact contactData={contactList} />
        </>
  )
}
