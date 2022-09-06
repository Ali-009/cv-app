import React from 'react'
import GeneralInfo from './general-info-section'
import Education from './education-section'
import PracticalExperience from './practical-experience-section';
import '../styles/form-style.css'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            eduHistory: [],
            school: '',
            studyTitle: '',
            eduStartDate: '',
            eduEndDate: '',
            expHistory: [],
            company: '',
            position: '',
            expStartDate: '',
            expEndDate: '',
        }
        this.updateForm = this.updateForm.bind(this)
    }

    updateForm(key, value){
        this.setState({
            [key]: value,
        })
    }

    render(){
        const {firstName, lastName, email, phoneNumber} = this.state;
        const {school, studyTitle, eduStartDate, eduEndDate} = this.state;
        const {company, position, expStartDate, expEndDate} = this.state;
        const {updateForm} = this.state;
        return (
            <form action="#">
                <GeneralInfo firstName={firstName} lastName={lastName} 
                email={email} phoneNumber={phoneNumber}
                updateForm={this.updateForm}/>
                <Education school={school} studyTitle={studyTitle}
                eduStartDate={eduStartDate} eduEndDate={eduEndDate}/>
                <PracticalExperience company={company} position={position} 
                expStartDate={expStartDate} expEndDate={expEndDate}/>
                <button>Submit Form</button>
            </form>
        )
    }
}

export default Form;