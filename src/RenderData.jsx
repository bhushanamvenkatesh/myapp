import React from "react";

function RednderData({ userData }) {
    console.log(userData)
    return <>
        <div className="t">
            <table border={1} cellPadding={5} width={"60%"}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>age</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((each) => {
                            return <tr>
                                <td>{each.fname}</td>

                                <td>{each.age}</td>
                                <td>{each.email}</td>


                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

    </>
}

export default RednderData