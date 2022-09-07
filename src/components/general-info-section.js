import React from 'react'
import '../styles/section-style.css'

class GeneralInfo extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target;
        this.props.updateForm(name, value);
    }

    render(){
        return (
            <fieldset className="generalinfo-section-container">
                <div className="basic-section-container">
                    <legend>General Information</legend>
                    <div className="col">
                        <div className="text-input-container">
                            <label htmlFor="first-name">
                                First Name
                            </label>
                            <input name="firstName" type="text" id="first-name"
                            value={this.props.firstName} onChange={this.handleChange}/>
                        </div>
                        <div className="text-input-container">
                            <label htmlFor="last-name">
                                Last Name
                            </label>
                            <input name="lastName" type="text" id="last-name"
                            value={this.props.lastName} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-input-container">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input name="email" type="email" id="email"
                            value={this.props.email} onChange={this.handleChange}/>
                        </div>
                        <div className="text-input-container">
                            <label htmlFor="phone">
                                Phone
                            </label>
                            <input name="phoneNumber" type="tel" id="phone"
                            value={this.props.phoneNumber} onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default GeneralInfo;