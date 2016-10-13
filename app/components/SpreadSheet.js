import React, {Component, PropTypes} from 'react'
import range from 'lodash/range'

var Spreadsheet = React.createClass({
  getInitialState: function () {
    return {
      headers: range(10).map(entry => 'header'),
      rows: range(10).map(row => range(10).map(entry => ''))
    }
  },
  render: function () {
    return (
      <div>Spreadsheet
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              {[<th key={-1} className="col-xs-1"></th>]
              .concat(this.state.headers.map((header, i) =>
                <th key={i} className="col-xs-1" style={{background: '#aaa'}}>
                  {String.fromCharCode(i + 'A'.charCodeAt(0))}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((row,i) => (
              <tr key={i}>
                {[<td key={-1}>{i+1}</td>].concat(row.map((cell,j) =>
                  <td key={j}></td>
                  ))}
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = Spreadsheet