import React from 'react'
import '../styles/section-style.css'

class Education extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <fieldset className="education-section-container">
                <div className="basic-section-container">
                    <legend>Education</legend>
                    <div className="col">
                        <div className="text-input-container">
                            <label htmlFor="school">
                                School
                            </label>
                            <input type="text" id="school"/>
                        </div>
                        <div className="text-input-container">
                            <label htmlFor="study-title">
                                Title of Study
                            </label>
                            <input type="text" id="study-title"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="date-input-container">
                            <label htmlFor="start-date">
                                From
                            </label>
                            <input type="date" id="start-date"/>
                        </div>
                        <div className="date-input-container">
                            <label htmlFor="end-date">
                                To
                            </label>
                            <input type="date" id="end-date"/>
                        </div>
                    </div>
                </div>
                <button>Add</button>
            </fieldset>
        )
    }
}

export default Education;