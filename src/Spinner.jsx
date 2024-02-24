import React from "react";

function Spinner() {
    return <>
        <div class="d-flex justify-content-center align-items-center">
            <div class="spinner-border" role="status">
                
            </div> 
            <span class="sr-only">Loading....</span>
        </div>
    </>
}

export default Spinner