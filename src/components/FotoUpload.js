import React from 'react';

const FotoUpload = () => {
    return (
        <div>
            <input className="form-control" type="file" id="inputFile" multiple />
            <button className="btn btn-info" type="button" id="inputFileUpload ">Upload</button>
        </div>
    );
}

export default FotoUpload;
