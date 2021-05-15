import React, { Component } from 'react';
import axios from 'axios';


class Detalles extends Component{
    constructor(props){
        super(props);
    }
    state={
        detalles:[],
        color:[]
    }



    componentDidMount(){
 
        const { match: { params } } = this.props;

        
        axios.get('https://pokeapi.co/api/v2/pokemon/'+params.id).then(results=>{
             this.setState({ detalles:results.data.species});
             this.setState({color:results.data.game_indices})
             console.log(results.results.data.game_indices);
                
            
        }).catch(console.log)
        

    }
    handleLogout=()=>{
        localStorage.clear();
        this.props.history.push("/");
    }

    render(){
        return(
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
                            
                            <h1>Especie</h1>
                            {
                                <ul>
                                    <li>{this.state.detalles.name}</li>
                                </ul>
                                
                            }
                            <h2 className="color">Colores de Pokemon</h2>
                            {
                            this.state.color.map((val,index, key)=>(

                                <ul key={index}>
                                    <li>   
                                        {val.version.name}<br/>
                                    </li>
                                </ul>

                            ))}
                        </article>
                    </section>


            </div>
        )
    }
}
export default Detalles;