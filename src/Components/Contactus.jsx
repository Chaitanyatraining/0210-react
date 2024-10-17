import React, { Component } from 'react'

class Contactus extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firstNameErr: '',
    lastNameErr: '',
    emailErr: '',
    phoneErr: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.validateForm()
  }

  // firstname < 4
  // lastName < 1
  // email include with '@'
  // phone should have 10 digits

  validateForm = () => {
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let phoneError = '';

    if (this.state.firstName.length <= 4) {
      firstNameError = 'FirstName should be atleast 4 chars'
    }

    if (this.state.lastName.length <= 1) {
      lastNameError = 'lastName should be atleast 1 chars'
    }

    if (!this.state.email.includes('@')) {
      emailError = 'Enter a valid email'
    }

    if (this.state.phone.length != 10) {
      phoneError = 'Enter a valid number'
    }

    if (firstNameError || lastNameError || emailError || phoneError) {
      this.setState({ firstNameErr: firstNameError, lastNameErr: lastNameError, emailErr: emailError, phoneErr: phoneError })
    } else {
      this.setState({ firstNameErr: firstNameError, lastNameErr: lastNameError, emailErr: emailError, phoneErr: phoneError })
    }

  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })

    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Contactus</h2>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <form>
              <div className='mt-2'>
                <input
                  type='text'
                  placeholder='Enter your FirstName'
                  name='firstName'
                  className='form-control'
                  value={this.state.firstName}
                  onChange={(e) => { this.handleChange(e) }}
                />
                <p className='text-danger'>{this.state.firstNameErr}</p>
              </div>
              <div className='mt-2'>
                <input
                  type='text'
                  placeholder='Enter your lastName'
                  name='lastName'
                  className='form-control'
                  value={this.state.lastName}
                  onChange={(e) => { this.handleChange(e) }}
                />
                <p className='text-danger'>{this.state.lastNameErr}</p>

              </div>
              <div className='mt-2'>
                <input
                  type='email'
                  placeholder='Enter your Email'
                  name='email'
                  className='form-control'
                  value={this.state.email}
                  onChange={(e) => { this.handleChange(e) }}
                />
                <p className='text-danger'>{this.state.emailErr}</p>

              </div>
              <div className='mt-2'>
                <input
                  type='number'
                  placeholder='Enter your phone'
                  name='phone'
                  className='form-control'
                  value={this.state.phone}
                  onChange={(e) => { this.handleChange(e) }}
                />
                <p className='text-danger'>{this.state.phoneErr}</p>

              </div>

              <div className='mt-3'>
                <button className='btn btn-primary'
                  onClick={(e) => { this.handleSubmit(e) }}
                >Submit</button>
              </div>
            </form>
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>

    )
  }
}

export default Contactus