import React from 'react'
import '../styles/section-style.css'
import '../styles/education-section-style.css'
import uniqid from "uniqid"

class Education extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleEduSubmit = this.handleEduSubmit.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        this.props.updateForm(name, value);
    }

    handleEduSubmit(event){
        event.preventDefault();
        this.props.updateEduHistory();
    }

    render(){
        return (
            <div className="education-wrapper">
                <div className="data-container">
                    <h2>Education</h2>
                    <div className="edu-history">
                        {this.props.eduHistory.map((eduElement) => {
                            return (
                                <div key={uniqid()} className="education-submitted">
                                    <div className="edu-info-row"> 
                                        {'Studied '+eduElement.studyTitle + ' in ' + eduElement.school}
                                    </div>
                                    <div className="edu-data-row">
                                            {'From ' + eduElement.eduStartDate+ ' to '+eduElement.eduEndDate}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
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
                    <button onClick={this.handleEduSubmit}>Add</button>
                </fieldset>
            </div>
        )
    }
}

export default Education;