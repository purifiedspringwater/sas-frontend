import React from 'react'
import { BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import PieChart from '../pieChart'

export default function subjectStatistics({ subjectData }) {
    console.log("RESING" + subjectData)

    return (
        <div className='subjectStat'>
            <h2>Design Pattern</h2>
            {subjectData.map((subject, index) => (
                <div key={index} className='lecture'>
                    <h4>{subject.lecture}</h4>
                    <table>
                        <tr>
                            <th>Date</th>
                            <td>April 14, 23</td>
                            <td>April 13, 23</td>
                            <td>April 12, 23</td>
                        </tr>
                        <tr>
                            <th>Attendance</th>
                            <td>Present</td>
                            <td>Absent</td>
                            <td>Present</td>
                        </tr>
                    </table>

                </div>
            ))}
        </div>
    )
}
