import React from 'react';
import '../styles/section-style.css'

class Education extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='section-container education-container'>
                <h2>
                    Education
                </h2>
                <fieldset className='education-fieldset'>
                    <div className="first-col">
                        <label htmlFor="school">
                            School
                            <input type="text" id="school"/>
                        </label>
                        <label htmlFor="study-title">
                            Title of Study
                            <input type="text" id="study-title"/>
                        </label>
                    </div>
                    <div className="second-col">
                        <label htmlFor="start-date">
                            From
                            <input type="date" id="start-date"/>
                        </label>
                        <label htmlFor="end-date">
                            To
                            <input type="date" id="end-date"/>
                        </label>
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default Education;