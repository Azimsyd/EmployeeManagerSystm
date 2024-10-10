import React from 'react'

function List({ employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>
            <table className='striped-table bg-white text-black'>
                <thead>
                    <tr className=''>
                        <th className='px-6'>No.</th>
                        <th className='px-6'>Image Uploade</th>
                        <th className='px-6'>Name</th>
                        <th className='px-6'>Email</th>
                        <th className='px-6'>Mobile No</th>
                        <th className='px-6'>Designation</th>
                        <th className='px-6'>Gender</th>
                        <th className='px-6'>Course</th>
                        <th className='px-6'>Date</th>
                        <th colSpan={2} className="text-center p-4">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr className='text-center' key={employee.id}>
                                <td className='p-3'>{i + 1}</td>
                                <td>{employee.image} </td>
                                <td>{employee.firstName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.course}</td>
                                <td>{employee.jointdate}</td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button rounded-sm bg-blue-900 px-3 py-1 mx-2"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button rounded-sm bg-red-600 px-3 py-1 mr-3"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List