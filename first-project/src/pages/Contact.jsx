import React from 'react'

const Contact = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <label htmlFor="">Name:</label>
        <input type='text' name='name' value={form.name}
        placeholder='Enter your name' />
        <br />
        <label htmlFor="">Email:</label>
        <input type='email' name='email' value={form.email}
        placeholder='Enter your email' />
        <br />
        <label htmlFor="">Message:</label>
        <textarea name='message' value={form.message}
        placeholder='Enter your message'></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact