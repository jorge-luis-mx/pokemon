import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Dashboard extends Component{

    constructor(props){
        super(props);
    }

    state={
        pokemon:[]
    }
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10').then(results=>{
            this.setState({ pokemon: results.data.results });
            
        }).catch(console.log)
    }
    
    handleLogout=()=>{
        localStorage.clear();
        this.props.history.push("/");
    }

    render(){
        
        return(
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-end">
                        <a className="navbar-brand" onClick={this.handleLogout}>
                            cerrar session
                        </a>
                    </nav>
                    <section>
                        <aside className="asside">

                        </aside>
                        <article>
                            <h1>Listado de pokemon</h1>
                            {this.state.pokemon.map((val, key)=>(

                                <ul key={key}>
                                    <li>{val.name}</li>
                                    <Link 
                                        to={'/dashboard/detalles/'+val.url.split("/")[6]} 
                                    
                                    >Ver detalle</Link>
                                </ul>                
                            ))}
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}
export default Dashboard;