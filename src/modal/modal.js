import React from "react";
import './modal.css'

export default class Modal extends React.Component{
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({ isOpen: true})}>Open Modal</button>

                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Title for your modal content</h1>
                            <p>This is text? Yes is this text</p>
                            <button onClick={() => this.setState({isOpen: false})}>Close modal window</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}