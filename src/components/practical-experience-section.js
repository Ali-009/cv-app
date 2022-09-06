import React from 'react'
import '../styles/section-style.css'

class PracticalExperience extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        this.props.updateForm(name, value);
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
                                <input name="companyName" type="text" id="company-name"
                                value={this.props.companyName} onChange={this.handleChange}/>
                            </div>
                            <div className="text-input-container">
                                <label htmlFor="position">
                                    Position
                                </label>
                                <input name="position" type="text" id="position"
                                value={this.props.position} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="date-input-container">
                                <label htmlFor="start-date">
                                    From
                                </label>
                                <input name="expStartDate" type="date" id="start-date"
                                value={this.props.expStartDate} onChange={this.handleChange}/>
                            </div>
                            <div className="date-input-container">
                                <label htmlFor="end-date">
                                    To
                                </label>
                                <input name="expEndDate" type="date" id="end-date"
                                value={this.props.expEndDate} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="main-tasks-container">
                            <label htmlFor="main-tasks">
                                Main Tasks
                            </label>
                            <input name="mainTask" type="text" id="main-tasks"
                            value={this.props.mainTask} onChange={this.handleChange}/>
                            <button>Add</button>
                        </div>
                </div>
                <button>Add Experience</button>
            </fieldset>
        )
    }
}

export default PracticalExperience;