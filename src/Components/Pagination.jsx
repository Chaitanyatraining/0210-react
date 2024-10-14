import React, { Component } from 'react'

class Pagination extends Component {

    state = {
        userData:[],
        pageNumber: 0
    }

    componentDidMount(){
        this.getUsersData()
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
    }

  render() {
    return (
      <div>
        <h2>Pagination</h2>
        
      </div>
    )
  }
}

export default Pagination