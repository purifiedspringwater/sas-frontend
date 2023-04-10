import React from 'react'

export default function main() {
  return (
    <div className="main">

      <h2>Main Page</h2>
      <table>
        <thead>
          <tr>
            <th>SUBJECT</th>
            <th>ABSENCE</th>
            <th>GROUP</th>
            <th>ROOM</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr className='accepted'>
            <td>History</td>
            <td>13%</td>
            <td>05-N</td>
            <td>312F</td>
            <td><a href="">Accepted</a></td>
          </tr>
          <tr className='active'>
            <td>History</td>
            <td>13%</td>
            <td>05-N</td>
            <td>312F</td>
            <td><a href="">Registrade</a></td>
          </tr>
          <tr className='notActive'>
            <td>History</td>
            <td>13%</td>
            <td>05-N</td>
            <td>312F</td>
            <td><a href="">Not Active</a></td>
          </tr>
          <tr className='notActive'>
            <td>RedHat - System Administration (OpenCode) </td>
            <td>13%</td>
            <td>05-N</td>
            <td>312F</td>
            <td><a href="">Not Active</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
