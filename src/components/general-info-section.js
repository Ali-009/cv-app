import React from 'react'
import '../styles/section-style.css'

class GeneralInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="section-container       general-info-container">
                <h2>
                    General Information
                </h2>
                <fieldset className='general-info-fieldset'>
                    <div className="first-col">
                        <label htmlFor="first-name">
                            First Name
                            <input type="text" id="first-name"/>
                        </label>
                        <label htmlFor="last-name">
                            Last Name
                            <input type="text" id="last-name"/>
                        </label>
                    </div>
                    <div className="second-col">
                        <label htmlFor="e-mail">
                            Email
                            <input type="text" id="e-mail"/>
                        </label>
                        <label htmlFor="phone-number">
                            Phone
                            <input type="text" id="phone-number"/>
                        </label>
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default GeneralInfo;