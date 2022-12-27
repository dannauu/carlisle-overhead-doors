import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen backdrop-blur-md'>
      <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2'>Contact Us</h1>
      <h2 className='text-center underline decoration-green-400 text-xl pt-5'>We appreciate your business</h2>
      <p className='text-center pt-2'>We try to return every message within 2-3 business days. If you have an emergency with your garage door and need emergency service then please call us. <a href='tel:816-288-3574' className='text-red-700 underline cursor-pointer'>816-288-3574</a></p>
      <form className='text-center p-10 w-2/4 m-auto'>
        <div>
          <label className='text-2xl text-black italic text-orange-400'>Choose Subject:</label>
          <select multiple="" id="" name='bakery-item' className="text-center bg-white border border-orange-400 text-orange-400 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5">
            <option defaultValue >Choose One</option>
            <option value="cupcakes">Residential Installation</option>
            <option value="cake">Residential Service</option>
            <option value="cookies">Commercial Installation</option>
            <option value="cookies">Commercial Service</option>
            <option value="cookies">Other</option>
          </select>

        </div>

        <div className="relative z-0 mb-6 w-full group mt-4">
          <label className='text-2xl text-black italic'>First Name:</label>
          <input name="first-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 rounded-lg border-b-2 border-orange-400 appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" required />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label className='text-2xl text-black italic'>Last Name:</label>
          <input name="last-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 rounded-lg border-orange-400 appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" required />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label className='text-2xl text-black italic'>Phone number:</label>
          <input type="tel" name="phone-number" id="floating_phone" className="block py-2.5 px-0 w-full rounded-lg text-sm text-gray-900 bg-white border-0 border-b-2 border-orange-400 appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" placeholder='555-555-5555' />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label className='text-2xl text-black italic'>Address:</label>
          <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-orange-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" required="" />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label className='text-2xl text-black italic'>Date:</label>
          <input type="date" name="event-date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-orange-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" placeholder=" " required="" id='date' />
        </div>
        <button type="submit" className="text-white bg-orange-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/4 sm:w-auto px-5 py-2.5 text-center mb-2">Submit</button>
      </form>

    </div>
  )
}

export default Contact