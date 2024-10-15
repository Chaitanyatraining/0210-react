import React, { Component } from 'react'

class Pagination extends Component {

    state = {
        userData:[],
        pageNumber: 0
    }

    componentDidMount(){
        this.getUsersData()
    }

    componentDidUpdate(prevsProps, prevsState){
      if(this.state.pageNumber !== prevsState.pageNumber){
        this.getUsersData()
      }
    }

    componentWillUnmount(){
      // unmounting
    }

    getUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`, 
            {
                method: 'GET',
                headers: {
                    'app-id': '633e33e98efd49504c9c7643'
                }

            }
        )
        const {data} = await response.json()
        console.log(data)
        this.setState({userData:data})
    }

    handleClick = (num) => {
      this.setState({pageNumber: num})
    }

  render() {
    return (
      <div>
        <h2>Pagination</h2>
        <div className='container'>
          <div className='row'>
          {
            this.state.userData && this.state.userData.length>0
             && this.state.userData.map((user) => (
                <div className='col-md-6'>
                  <div className='card mt-3'>
                    <div className='row'>
                        <div className='col-md-4'>
                          <img src={user.picture} />
                        </div>
                        <div className='col-md-8'>
                          <p>{user.id}</p>
                          <p>{user.title} {user.firstName} {user.lastName}</p>
                        </div>
                    </div>
                  </div>
                </div>
             ))
          }
          </div>
        </div>

        <div>
          {
          [0,1,2,3,4,5,6,7,8,9].map((num) => (
            <button className='btn btn-primary me-2 my-3'
            onClick={()=>{this.handleClick(num)}}
            >{num}</button>
          ))
          }
        </div>
      </div>
    )
  }
}

export default Pagination