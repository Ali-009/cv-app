import React from 'react'
import '../styles/section-style.css'

class PracticalExperience extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <fieldset className="practical-experience-container">
                <div className="basic-section-container">
                    <div className="col-row">
                        <legend>Practical Experience</legend>
                        <div className="col">
                            <div className="text-input-container">
                                <label htmlFor="company-name">Company</label>
                                <input type="text" id="company-name"/>
                            </div>
                            <div className="text-input-container">
                                <label htmlFor="position">
                                    Position
                                </label>
                                <input type="text" id="position"/>
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
                    <div className="main-tasks-container">
                            <label htmlFor="main-tasks">
                                Main Tasks
                            </label>
                            <input type="text" id="main-tasks"/>
                            <button>Add</button>
                        </div>
                </div>
                <button>Add Experience</button>
            </fieldset>
        )
    }
}

export default PracticalExperience;