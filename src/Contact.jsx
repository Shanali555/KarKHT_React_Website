import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname:'',
    phonenumber:'',
    email:'',
    message:'',
  });

  const InputEvent = (event)=>{
    const {name, value} = event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name] : value,
      }
    })
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`My Name is ${data.fullname}. My Mobile Number is ${data.phonenumber} and Email is ${data.email}, Here is What I want to Say ${data.message}`);
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full_Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" 
                name="fullname"
                value={data.fullname}
                onChange={InputEvent} 
                placeholder="Enter Your Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone_Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" 
                name="phonenumber"
                value={data.phonenumber}
                onChange={InputEvent} 
                placeholder="Enter Your Mobile Number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" 
                name="email"
                value={data.email}
                onChange={InputEvent} 
                placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                name="message"
                value={data.message}
                onChange={InputEvent} 
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;