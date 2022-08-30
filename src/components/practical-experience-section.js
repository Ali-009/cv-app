import React from 'react'
import '../styles/section-style.css'

class PracticalExperience extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="section-container practical-experience-container">
                <h2>
                    Practical Experience
                </h2>
                <fieldset className='practical-experience-fieldset'>
                    <div className="section-row">
                        <label htmlFor="company-name">
                            Company
                            <input type="text" id="company-name"/>
                        </label>
                        <label htmlFor="position">
                            Position
                            <input type="text" id="position"/>
                        </label>
                    </div>
                    <div className="section-row main-tasks-row">
                        <label htmlFor="main-tasks">
                            Main Tasks
                            <input type="text" id="main-tasks"/>
                        </label>
                        <button>
                                Add
                        </button>
                    </div>
                    <div className="section-row">
                        <label htmlFor="experience-start-date">
                            From
                            <input type="date" id="experience-start-date"/>
                        </label>
                        <label htmlFor="experience-end-date">
                            To
                            <input type="date" id="experience-end-date"/>
                        </label>
                    </div>
                    <button>
                        Add Experience
                    </button>
                </fieldset>
            </div>
        )
    }
}

export default PracticalExperience;