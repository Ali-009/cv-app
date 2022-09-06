import React from 'react'
import '../styles/section-style.css'

class Education extends React.Component{
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
            <fieldset className="education-section-container">
                <div className="basic-section-container">
                    <legend>Education</legend>
                    <div className="col">
                        <div className="text-input-container">
                            <label htmlFor="school">
                                School
                            </label>
                            <input name="school" type="text" id="school"
                            value={this.props.school} onChange={this.handleChange}/>
                        </div>
                        <div className="text-input-container">
                            <label htmlFor="study-title">
                                Title of Study
                            </label>
                            <input name="studyTitle" type="text" id="study-title"
                            value={this.props.studyTitle} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="date-input-container">
                            <label htmlFor="start-date">
                                From
                            </label>
                            <input name="eduStartDate" type="date" id="start-date"
                            value={this.props.eduStartDate} onChange={this.handleChange}/>
                        </div>
                        <div className="date-input-container">
                            <label htmlFor="end-date">
                                To
                            </label>
                            <input name="eduEndDate" type="date" id="end-date"
                            value={this.props.eduEndDate} onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                <button>Add</button>
            </fieldset>
        )
    }
}

export default Education;