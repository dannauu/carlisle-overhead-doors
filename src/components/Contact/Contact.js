import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen backdrop-blur-md'>
      <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2'>Contact Us</h1>
      <h2 className='text-center underline decoration-red-800 text-xl pt-5 text-white'>We appreciate your business</h2>
      <p className='text-center pt-2 font-medium text-white'>Choose what type of service you need and fill out the rest of the form. Expect a call from us within 1-2 business days. If you need emergency service then please call us. <a href='tel:816-288-3574' className='text-red-700 underline cursor-pointer'>816-288-3574</a></p>
      <form className='text-center p-10 w-2/4 m-auto sm:w-full sm:p-4'>
        <div>
          <label className='text-2xl italic text-white'>Choose Subject:</label>
          <select multiple="" id="" name='bakery-item' className="text-center bg-white border border-red-800 text-red-800 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5">
            <option defaultValue >Choose One</option>
            <option value="cupcakes">Residential Installation</option>
            <option value="cake">Residential Service</option>
            <option value="cookies">Commercial Installation</option>
            <option value="cookies">Commercial Service</option>
          </select>

        </div>
        {/* them to submit basic infomation to setup time andd date for estimate */}

        <div className="relative z-0 mb-6 w-full group mt-4">
          <label className='text-2xl text-white italic'>First Name:</label>
          <input name="first-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 rounded-lg border-b-2 border-red-800 appearance-none focus:outline-none focus:ring-0 focus:border-red-800 peer" required />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label className='text-2xl text-white italic'>Last Name:</label>
          <input name="last-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 rounded-lg border-red-800 appearance-none focus:outline-none focus:ring-0 focus:border-red-800 peer" required />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label className='text-2xl text-white italic'>Phone number:</label>
          <input type="tel" name="phone-number" id="floating_phone" className="block py-2.5 px-0 w-full rounded-lg text-sm text-gray-900 bg-white border-0 border-b-2 border-red-800 appearance-none focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder='555-555-5555' />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label className='text-2xl text-white italic'>Address:</label>
          <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-red-800 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-800 peer" required="" />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label className='text-2xl text-white italic'>Date:</label>
          <input type="date" name="event-date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-red-800 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required="" id='date' />
        </div>
        <button type="submit" className="text-white bg-red-800 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/4 sm:w-auto px-5 py-2.5 text-center mb-2">Submit</button>
      </form>
        {/* carlisleoverheaddoors@yahoo.com */}
    </div>
  )
}

export default Contact