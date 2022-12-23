import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen backdrop-blur-md p-10'>
      <h1 className='text-center p-3 text-5xl'>Contact Us</h1>
      <h2 className='text-center underline decoration-green-400 text-xl'>We appreciate your business</h2>
      <p className='text-center pt-2'>We try to return every message within 2-3 business days. Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah</p>
      <form className='text-center pt-10'>
        <div className='flex justify-center mb-5'>
          <select multiple="" id="bakeryItems" name='bakery-item' className="bg-white border border-orange-400 text-orange-400 text-sm rounded-lg focus:border-purple-500 block w-1/2 p-2.5">
            <option defaultValue >Choose One</option>
            <option value="cupcakes">Cupcakes</option>
            <option value="cake">Cake</option>
            <option value="cookies">Cookies</option>
          </select>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input name="first-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 rounded-lg border-b-2 border-orange-400 appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" required />
          <label className='text-2xl text-black italic'>First Name:</label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input name="last-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 rounded-lg border-orange-400 appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" required />
          <label className='text-2xl text-black italic'>Last Name:</label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input type="tel" name="phone-number" id="floating_phone" className="block py-2.5 px-0 w-full rounded-lg text-sm text-gray-900 bg-white border-0 border-b-2 border-orange-400 appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" placeholder='555-555-5555' />
          <label className='text-2xl text-black italic'>Phone number:</label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-orange-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" required="" />
          <label className='text-2xl text-black italic'>Address:</label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input type="date" name="event-date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-orange-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-orange-300 peer" placeholder=" " required="" id='date' />
          <label className='text-2xl text-black italic'>Date:</label>
        </div>
        <button type="submit" className="text-white bg-orange-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/4 sm:w-auto px-5 py-2.5 text-center mb-2">Submit</button>
      </form>

    </div>
  )
}

export default Contact