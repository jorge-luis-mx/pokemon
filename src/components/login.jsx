import React, { Component } from 'react';


class Login extends Component{

    constructor(props){
        super(props);
    }

    state={
        form:{
            "usuario":"",
            "password":""
        },
        error:false,
        message:""
    }

    
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    //hacemos set valores en el estado
    onchangeForm= async (e)=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        
    }

    iniciarSession=()=>{
        //obtenemos los valores en el estado y guardamos en una variable
        let usuario=this.state.form.usuario;
        let password =this.state.form.password;
        //validamos datos
        if (usuario.length>0 && password.length>0) {
            if (usuario==="jorge06g92@gmail.com" && password==="12345") {
                let datos={usuario,password};
                let dt=JSON.stringify(datos);
                //almacenamos la session de usuario local
                localStorage.setItem('data',dt);
                //nos redirigimos a nuestro dashboard donde se lista poquemos
                this.props.history.push("/dashboard");
            }else{
                this.setState({
                    error:true,
                    message:"usuario y contraseña incorrecta"
                })
               
            }
        }else{
            alert("Los campos estan vacios");
        }

    }
    render(){
        return(
            <div className="container">
                <div className="container-form">
                    <div className="caja">
                        <form  onSubmit={this.handleSubmit}>
                            {
                                this.state.error===true &&
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            }
                            <div className="mb-3">
                                <label  className="form-label">Email address</label>
                                <input type="email" className="form-control" name="usuario" onChange={this.onchangeForm}/>
                                
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" onChange={this.onchangeForm}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.iniciarSession}>iniciar session</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }


}
export default Login;