import React from 'react'
import LeftPanel from './LeftPanel'
import './HomePage.css'
import API from '../../config'
import {useState, useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

function HomePage() {

    const [isLoading, setLoading] = useState(true)
    const [isAuthenticated, setAuthenticated] = useState(false)

    
    function loggedIn(){
        setTimeout(function() {
            API.get('/isLoggedIn').then(result => {
                if(result.status == 200){
                    setLoading(false)
                    setAuthenticated(true)
                }
            }).catch((err) => {
                console.log(err)
                setLoading(false)
            })
        }, 2000);
    }
    
    useEffect(() => {
        loggedIn()
    }, [])

    return(
        <div>
                {(isLoading) ? 
                (<div className="loading--home">
                    <CircularProgress color="secondary" />
                </div>) : 
                
                    (isAuthenticated) ? (
                
                    <div className="pageWrapper"> <LeftPanel /> </div>
                    ) : <div>Not authenticated</div>}
        </div>
    )
}

export default HomePage
