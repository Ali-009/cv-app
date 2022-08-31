import React from 'react'
import '../styles/section-style.css'

class GeneralInfo extends React.Component{
    constructor(props){
        super(props);
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
                            <input type="text" id="first-name"/>
                        </div>
                        <div className="text-input-container">
                            <label htmlFor="last-name">
                                Last Name
                            </label>
                            <input type="text" id="last-name"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-input-container">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" id="email"/>
                        </div>
                        <div className="text-input-container">
                            <label htmlFor="phone">
                                Phone
                            </label>
                            <input type="text" id="phone"/>
                        </div>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default GeneralInfo;