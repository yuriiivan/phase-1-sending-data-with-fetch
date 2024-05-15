const postData = {
  name: "Yuriy",
  email: "yuriy.ivanenko@powerhrg.com",
};

const handlePostRespone = (data) => {
  const div = document.querySelector('#respone_data')
  const p = document.createElement('p')
  p.textContent = `Respone ID: ${data.id}`
  div.appendChild(p)
} 

const handlePostError = (error) => {
  const div = document.querySelector('#respone_data')
  const p = document.createElement('p')
  p.textContent = `Error: ${error}`
  div.appendChild(p)
}

const submitData = (user_name, user_email) => {
  const reqBody = {
    name: user_name,
    email: user_email
  }
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
return fetch('http://localhost:3000/users',{
      method: "POST",
      headers: headers,
      body: JSON.stringify(reqBody)
  })
  .then(res => res.json())
  .then(handlePostRespone)
  .catch(handlePostError)
}
