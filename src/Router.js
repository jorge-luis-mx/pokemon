import React, {Component} from 'react';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';


import Login from './components/login'
import Dashboard from './components/dashboard';
import Detalles from './components/detalles';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
        render={props => 
            localStorage.getItem('data')?(
                <Component {...props} />
            ) : (
            <Redirect to={{ pathname: "/",
                 state: { from: props.location } 
                }} />
            )
        }
    />
);



class Router extends Component{


    render(){
        return(

                <BrowserRouter>
                    <Switch>

                        <Route  exact path="/" render={props=>
                            (<Login{...props}/>)
                        }/>

                        <Route  exact path="/dashboard" render={props=>
                            (<Dashboard{...props}/>)
                        }/>
                        <Route  exact path="/dashboard/detalles/:id" component={Detalles}/>

                    </Switch>
                </BrowserRouter>
           
        );
    }
}

export default Router;