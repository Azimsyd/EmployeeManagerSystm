import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [mobile, setMobile] = useState(selectedEmployee.mobile);
    const [designation, setDesignation] = useState(selectedEmployee.designation);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [gender, setGender] = useState(selectedEmployee.gender);
    const [course, setCourse] = useState(selectedEmployee.course);
    const [image, setImage] = useState(selectedEmployee.date);
    const [jointdate, setJointDate] = useState(selectedEmployee.jointdate);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !designation || !email || !gender || !course || !jointdate || !image) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            designation,
            email,
            mobile,
            gender,
            course,
            jointdate,
            image
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate} className='flex flex-col p-3'>
                <h1 className='pb-5 font-bold'>Edit Employee</h1>
                <label htmlFor="firstName">Name</label>
                <input
                    id="firstName"
                    type="text"
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
                    type="number"
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
                <label htmlFor="jointdate">Date</label>
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
                    <input type="submit" className='rounded-md bg-green-900 py-1 px-2' value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button rounded-md bg-green-900 py-1 px-2"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit