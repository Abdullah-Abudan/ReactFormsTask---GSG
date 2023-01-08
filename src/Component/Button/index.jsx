import { Component } from 'react'
import './style.css'
export default class Button extends Component{
    render(){
        return (
            <button type="submit">
                {this.props.children}
            </button>
        )
    }

}