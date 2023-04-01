import React from 'react'
import { BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import Absence from './absence'
import SubjectStat from './subjectStatistics'


export default function () {
    return (
        <div className="statistics">
            <h2>Statistics</h2>

            <table>
                <tr>
                    <th>SUBJECT</th>
                    <th><i style={{ color: 'green' }}><BsCheckCircleFill /></i></th>
                    <th><i style={{ color: 'red' }}><BsFillXCircleFill /></i></th>
                    <th>%</th>
                    <th>""</th>
                </tr>
                <tr>
                    <td>History</td>
                    <td>15</td>
                    <td>2</td>
                    <td>15%</td>
                    <td><input type="radio" name="subject" id="1" /></td>
                </tr>
                <tr>
                    <td>Math</td>
                    <td>10</td>
                    <td>5</td>
                    <td>20%</td>
                    <td><input type="radio" name="subject" id="2" /></td>
                </tr>
                <tr>
                    <td>Programming</td>
                    <td>1</td>
                    <td>3</td>
                    <td>17%</td>
                    <td><input type="radio" name="subject" id="3" /></td>
                </tr>
                <tr>
                    <td>Design Pattern</td>
                    <td>4</td>
                    <td>1</td>
                    <td>12%</td>
                    <td><input type="radio" name="subject" id="4" /></td>
                </tr>
                <tr>
                    <td>DBMS1</td>
                    <td>9</td>
                    <td>2</td>
                    <td>20%</td>
                    <td><input type="radio" name="subject" id="5" /></td>
                </tr>
                <tr>
                    <td>DBMS2</td>
                    <td>5</td>
                    <td>6</td>
                    <td>60%</td>
                    <td><input type="radio" name="subject" id="6" /></td>
                </tr>
            </table>
            <button className='showStatBtn'>Show Statistics</button>
            <SubjectStat/>

        </div>
    )
}
