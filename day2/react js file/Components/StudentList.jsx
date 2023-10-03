import React from 'react';

function StudentList(props) {
    const students = [
        { id: 1, name: 'Harsh' },
        { id: 2, name: 'Kiran' },
        { id: 3, name: 'Shivam' },
        { id: 4, name: 'Prashant' },
    ];

    return (
        <div>
            <h2>List of Students</h2>
            <ul>
                {students.map((student) => (
                    <Student key={student.id} student={student} />
                ))}
            </ul>
        </div>
    );
}

function Student(props) {
    const { student } = props;

    return <li>{student.name}</li>;
}

export default StudentList;
