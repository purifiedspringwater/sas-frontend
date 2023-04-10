import React, { useState } from 'react'
import { BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import SubjectStat from './subjectStatistics'

const subjects = [
    { name: 'Histoty', present: 15, absent: 2 },
    { name: 'Math', present: 10, absent: 5 },
    { name: 'Programming', present: 1, absent: 3 },
    { name: 'Design Pattern', present: 4, absent: 1 },
    { name: 'DBMS1', present: 9, absent: 2 },
    { name: 'DBMS2', present: 5, absent: 6 },
]

const SsubjectData = [
    {
        subject: 'Design Pattern',
        lecture: '01N - Lyazzat Atymtayeva, Doctor of Science',
        attendance: [
            { date: "12.02.2023 09:00", attendance: true },
            { date: "12.02.2023 10:00", attendance: true },
            { date: "12.02.2023 09:00", attendance: true },
            { date: "12.02.2023 09:00", attendance: true },
            { date: "12.02.2023 09:00", attendance: false },
            { date: "12.02.2023 09:00", attendance: false },
        ],
        attendanceRatio: [25, 10, 5],
    },
    {
        subject: 'Design Pattern',
        lecture: '03P - Lyazzat Atymtayeva, Doctor of Science',
        attendance: [
            { date: "12.02.2023 09:00", attendance: true },
            { date: "12.02.2023 09:00", attendance: true },
            { date: "12.02.2023 09:00", attendance: true },
            { date: "12.02.2023 09:00", attendance: true },
            { date: "12.02.2023 09:00", attendance: false },
            { date: "12.02.2023 09:00", attendance: false },
        ],
        attendanceRatio: [60, 20, 20],
    },
]

export default function Statistics() {

    const [subjectData, setSubjectData] = useState([]);

    const handleShowStatistics = async () => {
        try {
            // const response = await fetch("your_api_endpoint_here");
            // const data = await response.json();
            setSubjectData(SsubjectData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <table>
                <thead>
                    <tr>
                        <th>SUBJECT</th>
                        <th><i style={{ color: 'green' }}><BsCheckCircleFill /></i></th>
                        <th><i style={{ color: 'red' }}><BsFillXCircleFill /></i></th>
                        <th>%</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject, index) => (
                        <tr key={index}>
                            <td>{subject.name}</td>
                            <td>{subject.present}</td>
                            <td>{subject.absent}</td>
                            <td>{`${(subject.absent / 15 * 100).toFixed(0)}%`}</td>
                            <td><input type="radio" name="subject" id={index} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="showStatBtn" onClick={handleShowStatistics}>
                Show Statistics
            </button>

            {subjectData.length > 0 && (
                <SubjectStat subjectData={subjectData} />
            )}
        </div>
    )
}
