import React from 'react';

class GCTableAtom extends React.Component {
    tbodyRender() {
        let trs = this.props.contents.map((row, y) => {
            return this.trRender(row, y);
        });
        return (
            <tbody>
                { trs }
            </tbody>
        );
    }

    trRender(row, y) {
        let tds = row.map((col, x) => {
            return this.tdRender(col, x, y)
        });
        return (
            <tr>
                { tds }
            </tr>
        );
    }

    tdRender(col, x, y) {
        return (
            <td
                style={{
                    width: '90px',
                    height: '90px',
                    border: 'solid 1px',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                }}
            >
                { this.props.child_component(col)}
            </td>
        );
    }

    render() {
        return (
            <table>
                { this.tbodyRender() }
            </table>
        );
    }
}

export default GCTableAtom;