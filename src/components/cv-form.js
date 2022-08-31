import React from 'react'
import GeneralInfo from './general-info-section'
import Education from './education-section'
import PracticalExperience from './practical-experience-section';
import '../styles/form-style.css'

class Form extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form action="#">
                <GeneralInfo />
                <Education />
                <PracticalExperience />
                <button>Submit Form</button>
            </form>
        )
    }
}

export default Form;