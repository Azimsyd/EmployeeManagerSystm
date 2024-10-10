import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState('');
    const [image, setImage] = useState('');
    const [jointdate, setJointDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !designation || !email || !mobile || !gender || !course || !jointdate || !image) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            email,
            mobile,
            designation,
            gender,
            course,
            jointdate,
            image
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd} className='flex flex-col p-3'>
                <h1 className='pb-5 font-bold'>Add Employee</h1>
                <label htmlFor="firstName">Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="mobile">Mobile NO</label>
                <input
                    id="mobile"
                    type="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                />
                <label htmlFor="designation">Designation</label>
                <select
                    id="designation"
                    type="text"
                    name="designation"
                    value={designation}
                    onChange={e => setDesignation(e.target.value)}
                >
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="sales">sales</option>
                </select>
                <label>Gender</label>
                <label htmlFor="male">
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="Male"
                        onChange={e => setGender(e.target.value)}
                    />
                    Male
                </label>
                <label htmlFor="female">
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="Female"
                        onChange={e => setGender(e.target.value)}
                    />
                    Female
                </label>
                
                <label>Course</label>
                <label htmlFor="MCA">
                    <input
                        type="checkbox"
                        name="course"
                        id="bca"
                        value="MCA"
                        onChange={e => setCourse(e.target.value)}
                    />
                    MCA
                </label>
                <label htmlFor="BCA">
                    <input
                        type="checkbox"
                        name="course"
                        id="bca"
                        value="BCA"
                        onChange={e => setCourse(e.target.value)}
                    />
                    BCA
                </label>
                <label htmlFor="BSC">
                    <input
                        type="checkbox"
                        name="course"
                        id="bca"
                        value="BSC"
                        onChange={e => setCourse(e.target.value)}
                    />
                    BSC
                </label>
                <input
                    id="jointdate"
                    type="date"
                    name="jointdate"
                    value={jointdate}
                    onChange={e => setJointDate(e.target.value)}
                />
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="file"
                    name="image"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" className='rounded-md bg-blue-900 py-1 px-2' value="Submit" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button rounded-md bg-blue-900 py-1 px-2"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add