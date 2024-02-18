
import React, { useState } from 'react'; 
import{useNavigate } from 'react-router-dom';

 
export default function RegistrationForm() { 
    const [formData, setFormData] = useState({ 
        name: '', 
        age: '', 
        contact: '', 
        aadhar: '', 
        panno: '', 
        annualIncome: '', 
        source: '', 
        bankName: '', 
        bankAccount: '' 
    }); 
 
    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: value 
        }); 
    }; 
    
    const navigate=useNavigate();

 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if (formData.name.trim() === '') { 
            alert('Please enter your name'); 
            return; 
        } 
        alert('Registration successful!\nName: ' + formData.name + '\nAge: ' + formData.age + '\nContact: ' + formData.contact); 
        
        // Redirect to login page
        navigate('/login');
    }; 
 
    return ( 
        <div> 
            <h2>Registration Form</h2> 
            <div className="big-box"> 
                <form onSubmit={handleSubmit}> 
                    <div className="inner-box"> 
                        <div className="form-group"> 
                            <label htmlFor="name" className="label-field">Name</label> 
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="age" className="label-field">Age</label> 
                            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="contact" className="label-field">Contact</label> 
                            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} placeholder="Enter your contact number" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="aadhar" className="label-field">Aadhar Number</label> 
                            <input type="text" id="aadhar" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Enter your Aadhar number" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="panno" className="label-field">PAN Number</label> 
                            <input type="text" id="panno" name="panno" value={formData.panno} onChange={handleChange} placeholder="Enter your PAN number" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="annualIncome" className="label-field">Annual Income</label> 
                            <input type="text" id="annualIncome" name="annualIncome" value={formData.annualIncome} onChange={handleChange} placeholder="Enter your annual income" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="source" className="label-field">Source of Income</label> 
                            <input type="text" id="source" name="source" value={formData.source} onChange={handleChange} placeholder="Enter your source of income" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label htmlFor="bankName" className="label-field">Bank Name</label> 
                            <input type="text" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Enter your bank name" className="input-field" /> 
                        </div> 
                        <div className="form-group"> 
                            <label


                htmlFor="bankAccount" className="label-field">Bank Account</label> 
                            <input type="text" id="bankAccount" name="bankAccount" value={formData.bankAccount} onChange={handleChange} placeholder="Enter your bank account number" className="input-field" /> 
                        </div> 
                    </div> 
                    <div className="button" align="center"> 
                        <input type="submit" value="Register" className="submit-button" onClick={handleSubmit}/> 
                    </div> 
                </form> 
            </div> 
            <div className="form-group"> 
                <a href="#" className="help-link">Help</a> 
            </div> 
            </div> 
        
    ); 
}