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
            companyName: '',
            position: '',
            expStartDate: '',
            expEndDate: '',
            mainTask: '',
            mainTaskHistory: [],
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
        const {companyName, position, expStartDate, expEndDate} = this.state;

        return (
            <form action="#">
                <GeneralInfo firstName={firstName} lastName={lastName} 
                email={email} phoneNumber={phoneNumber}
                updateForm={this.updateForm}/>
                
                <Education school={school} studyTitle={studyTitle}
                eduStartDate={eduStartDate} eduEndDate={eduEndDate}
                updateForm={this.updateForm}/>
                
                <PracticalExperience companyName={companyName} position={position} 
                expStartDate={expStartDate} expEndDate={expEndDate}
                updateForm={this.updateForm}/>

                <button>Submit Form</button>
            </form>
        )
    }
}

export default Form;