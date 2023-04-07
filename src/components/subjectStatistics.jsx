import React from 'react'
import { BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import PieChart from './pieChart'

export default function subjectStatistics() {

    const attendanceData = [25, 10, 5];

    return (
        <div className='subjectStat'>
            <h2>Design Pattern</h2>
            <div className="lecture">
                <h4>01N - Lyazzat Atymtayeva, Doctor of Science</h4>
                <table>
                    <col span={-1}></col>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'green' }}><BsCheckCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'green' }}><BsCheckCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'green' }}><BsCheckCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'green' }}><BsCheckCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'red' }}><BsFillXCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'red' }}><BsFillXCircleFill /></i></td>
                        </tr>
                    </tbody>
                </table>
                <div className="pieChart">
                    <PieChart data={attendanceData} />
                </div>

            </div>
            <div className="practice">
                <h4>03P - Lyazzat Atymtayeva, Doctor of Science</h4>
                <table>
                    <col span={-1}></col>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'green' }}><BsCheckCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'green' }}><BsCheckCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'green' }}><BsCheckCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'green' }}><BsCheckCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'red' }}><BsFillXCircleFill /></i></td>
                        </tr>
                        <tr>
                            <td>12.02.2023 09:00</td>
                            <td><i style={{ color: 'red' }}><BsFillXCircleFill /></i></td>
                        </tr>
                    </tbody>
                </table>
                <div className="pieChart">
                    <PieChart data={attendanceData} />
                </div>
            </div>

        </div>
    )
}
