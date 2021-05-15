import React, { Component, createContext } from "react";

const Context = createContext();
class GlobalContext extends Component {




}



/**
 * @function: Consumer
 * @description: HOC conector entre el estado global y un componente consumidor.
 * @param: Component => Componente Web
*/

const Consumer = Component => {
    return props => {
        return (
            <Context.Consumer>
                { context => <Component { ...props } context = { context } /> }
            </Context.Consumer>
        );
    };
};

export { Consumer, GlobalContext };