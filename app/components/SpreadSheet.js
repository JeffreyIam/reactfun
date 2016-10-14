import React, {Component, PropTypes} from 'react'
import range from 'lodash/range'

var Spreadsheet = React.createClass({
  getInitialState: function () {
    return {
      headers: range(10).map(entry => 'header'),
      rows: range(10).map(row => range(10).map(entry => '')),
      editing: null
    }
  },
  addInput: function(evt) {
    evt.preventDefault();
    console.log(this.input.value)
  },
  edit: function (i, j) {
    this.setState({
      editing: [i, j],
    }, () => this.input.focus())
  },
  updateCell: function(i, j) {
    var {rows} = this.state
    rows[j][i] = this.input.value
    this.setState({
      rows: rows,
      editing: null
    })
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
            {this.state.rows.map((row, j) => (
              <tr key={j}>
                {[<td key={-1}>{j+1}</td>].concat(row.map((cell, i) =>
                  <td key={i}
                      onMouseUp={() => this.edit(i, j)}>
                  { this.state.editing && this.state.editing[0] === i && this.state.editing[1] === j
                    ? <form onSubmit={(e) => this.addInput(e)}>
                        <input defaultValue={cell} onBlur={() => this.updateCell(i, j)} ref={(cellContent) => {this.input = cellContent}} />
                      </form>
                    : cell } </td>
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