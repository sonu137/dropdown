import React from 'react'

class Main extends React.Component {
    render() {
        return(
            <React.Fragment>
                {/* <table>
                    <caption>A summary of the UK's most famous punk bands</caption>
                    <thead>
                        <tr>
                        <th scope="col">Band</th>
                        <th scope="col">Year formed</th>
                        <th scope="col">No. of Albums</th>
                        <th scope="col">Most famous song</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Buzzcocks</th>
                        <td>1976</td>
                        <td>9</td>
                        <td>Ever fallen in love (with someone you shouldn't've)</td>
                        </tr>
                        <tr>
                        <th scope="row">The Clash</th>
                        <td>1976</td>
                        <td>6</td>
                        <td>London Calling</td>
                        </tr>
                        <tr>
                        <th scope="row">The Damned</th>
                        <td>1976</td>
                        <td>10</td>
                        <td>Smash it up</td>
                        </tr>
                        <tr>
                        <th scope="row">Sex Pistols</th>
                        <td>1975</td>
                        <td>1</td>
                        <td>Anarchy in the UK</td>
                        </tr>
                        <tr>
                        <th scope="row">Sham 69</th>
                        <td>1976</td>
                        <td>13</td>
                        <td>If the kids are united</td>
                        </tr>
                        <tr>
                        <th scope="row">Siouxsie and the Banshees</th>
                        <td>1976</td>
                        <td>11</td>
                        <td>Hong Kong Garden</td>
                        </tr>
                        <tr>
                        <th scope="row">Stiff Little Fingers</th>
                        <td>1977</td>
                        <td>10</td>
                        <td>Suspect Device</td>
                        </tr>
                        <tr>
                        <th scope="row">The Stranglers</th>
                        <td>1974</td>
                        <td>17</td>
                        <td>No More Heroes</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                        <th scope="row" colspan="2">Total albums</th>
                        <td colspan="2">77</td>
                        </tr>
                    </tfoot>
                </table> */}

                <table align='center'>
                <caption>this is test</caption>
                    <thead>
                    <tr>
                        <th scope='row'>Log 1</th>
                        <th colspan="2">Log 2</th>
                        <th>Log 3</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>one</th>
                            <th>two</th>
                            <th>three</th>
                        </tr>

                        <tr>
                            <th>one</th>
                            <th>two</th>
                            <th>three</th>
                        </tr>

                        <tr>
                            <th>one</th>
                            <th>two</th>
                            <th>three</th>
                        </tr>

                        <tr>
                            <th>one</th>
                            <th>two</th>
                            <th>three</th>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Main