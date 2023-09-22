import React from "react";
import './Form.css';

function CreatePage(){
    return <div>
        <h1>Create a DevLink Account</h1>
        <div className="form-container">
            <form action="/">
                <table >
                <tr align="left">
                    <td>Name*  </td>
                    <td>
                        <input type="text" name="name" size="100"/>
                    </td>
                </tr>
                <tr align="left">
                    <td>Email*  </td>
                    <td>
                        <input type="text" name="email" />
                    </td>
                </tr>
                <tr align="left">
                    <td>Password*  </td>
                    <td>
                        <input type="text" name="password" />
                    </td>
                </tr>
                <tr align="left">
                    <td>Confirm password*  </td>
                    <td>
                        <input type="text" name="confirmation" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <input value="Create" type="submit" />
                    </td>
                </tr>
                </table>
            </form>
        </div>
    </div>
}

export default CreatePage