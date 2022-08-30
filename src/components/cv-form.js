import React from 'react'
import GeneralInfo from './general-info-section.js'
import Education from './education-section.js'
import PracticalExperience from './practical-experience-section.js'

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
            </form>
        )
    }
}

export default Form;