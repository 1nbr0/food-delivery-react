// import { useState } from 'react'
// import { registerUser } from '../services/Api'

// function RegisterForm () {
//   const [formData, setFormData] = useState({
//     nom: 'TURPIN',
//     prenom: 'Robin',
//     email: 'test@test.com',
//     username: 'sdcsc',
//     password: 'rekjgnrkgn'
//   })

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     })
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const result = await registerUser(formData)
//     console.log(result)
//   }

//   return (
//     <div>
//       <h1>Inscription</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nom :
//           <input type='text' name='nom' onChange={handleChange} value={formData.nom} />
//         </label>
//         <br />
//         <br />
//         <label>
//           Prenom :
//           <input type='text' name='prenom' onChange={handleChange} value={formData.prenom} />
//         </label>
//         <br />
//         <br />
//         <label>
//           email :
//           <input type='email' name='email' onChange={handleChange} value={formData.email} />
//         </label>
//         <br />
//         <br />
//         <label>
//           Username :
//           <input type='text' name='username' onChange={handleChange} value={formData.username} />
//         </label>
//         <br />
//         <br />
//         <label>
//           Mot de passe :
//           <input type='password' name='password' onChange={handleChange} value={formData.password} />
//         </label>
//         <br />
//         <br />
//         <input type='submit' />
//       </form>
//     </div>
//   )
// }

// export default RegisterForm

import { useState } from 'react'
import { registerUser } from '../services/Api'
import Form from 'react-bootstrap/Form'
import { Col, Row, Button } from 'react-bootstrap'
import './styles/FormStyle.css'

function RegisterForm () {
  const [formData, setFormData] = useState({
    nom: 'TURPIN',
    prenom: 'Robin',
    email: 'test@test.com',
    username: 'sdcsc',
    password: 'rekjgnrkgn'
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await registerUser(formData)
    console.log(result)
  }

  return (
    <div className='body-form'>
      <h1>Inscription</h1>
      <div className='form-style'>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className='mb-3' controlId='formBasicEmail'>
            <Form.Label column sm='3' className='form-label'>Nom</Form.Label>
            <Col sm='8'>
              <Form.Control type='text' placeholder='Entrer un nom' name='nom' onChange={handleChange} value={formData.nom} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='formBasicEmail'>
            <Form.Label column sm='3' className='form-label'>Prenom</Form.Label>
            <Col sm='8'>
              <Form.Control type='text' placeholder='Entrer un prenom' name='prenom' onChange={handleChange} value={formData.prenom} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='formBasicEmail'>
            <Form.Label column sm='3' className='form-label'>Email</Form.Label>
            <Col sm='8'>
              <Form.Control type='email' placeholder='Entrer un email' name='email' onChange={handleChange} value={formData.email} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='formBasicEmail'>
            <Form.Label column sm='3' className='form-label'>Username</Form.Label>
            <Col sm='8'>
              <Form.Control type='username' placeholder='Entrer un username' name='username' onChange={handleChange} value={formData.username} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className='mb-3' controlId='formBasicEmail'>
            <Form.Label column sm='3' className='form-label'>Password</Form.Label>
            <Col sm='8'>
              <Form.Control type='password' placeholder='Entrer un password' name='password' onChange={handleChange} value={formData.password} />
            </Col>
          </Form.Group>
          <Button as='input' type='submit' value='Submit' />{' '}
        </Form>
      </div>
    </div>
  )
}

export default RegisterForm
