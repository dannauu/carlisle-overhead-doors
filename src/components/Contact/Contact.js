import React from 'react'
import emailjs from 'emailjs-com'




const OrderOnline = () => {

  const [service, setService] = React.useState('Service Needed')

  function checkSelection() {
    const selection = document.getElementById('services').value
    if (selection === 'residential') {
      setService('Size of door:')
    } else if (selection === 'service') {
      setService('Type of service needed:')
    } else if (selection === 'commercial') {
      setService('How many doors:')
    }
  }

  function sendEmail(e) {

    const phoneNumber = document.getElementById('floating_phone').value
    const phoneNumberVal = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (phoneNumber.match(phoneNumberVal)) {
      showSuccess();
      
    } else {
      alert("Wrong Phone Number Format");
      e.preventDefault();
      return false;
    }

    e.preventDefault();

    emailjs
      .sendForm
      ("service_zr4kcnh",
        "template_2egf2sb",
        e.target,
        "-DqTEYSCXE7zt5HXg")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

  }

  function showSuccess() {
    const formContainer = document.getElementById('formContainer')
    const menuModal = document.getElementById('menuModal')
    menuModal.classList.add('hidden')
    formContainer.classList.add('hidden')
    const successh1 = document.getElementById('successh1')
    successh1.classList.remove('hidden')
 

  }



  return (
    <>
      <div className='container m-auto width' id='formContainer'>
        <div className="mt-6" id='contact'>
          <label className="block italic mb-2 text-4xl font-medium flex justify-center text-blue-600 centerText">What type of service do you need?</label>
          <form onSubmit={sendEmail} className='text-center'>
            <div className='flex justify-center mb-5'>

              <select multiple="" id="services" name='bakery-item' className="bg-blue-200 border border-blue-600 text-blue-900 text-sm rounded-lg focus:border-blue-500 block w-1/2 p-2.5" onChange={checkSelection}>
                <option defaultValue >Choose One</option>
                <option value="service">Service/Maintenance</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            


            <div className="relative z-0 mb-6 w-full group">
              <input name="first-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-blue-200 border-0 rounded-lg border-b-2 border-blue-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
              <label className='text-2xl text-blue-700 italic'>First Name:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input name="last-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-blue-200 border-0 border-b-2 rounded-lg border-blue-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
              <label className='text-2xl text-blue-700 italic'>Last Name:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="tel" name="phone-number" id="floating_phone" className="block py-2.5 px-0 w-full rounded-lg text-sm text-gray-900 bg-blue-200 border-0 border-b-2 border-blue-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='555-555-5555'/>
              <label className='text-2xl text-blue-700 italic'>Phone number:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-blue-200 border-0 border-b-2 border-blue-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"required="" />
              <label className='text-2xl text-blue-700 italic'>Email:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input name="flavor" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-blue-200 border-0 border-b-2 border-blue-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-blue-700 italic' id='bakeryItemFlavor'>{service}</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2">Submit</button>
          </form>

        </div>
      </div>
    </>
  )
}


export default OrderOnline