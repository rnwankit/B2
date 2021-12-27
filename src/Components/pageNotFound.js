import React from 'react';
import { Button } from 'reactstrap';


function pageNotFound(props) {
    return (
        <div>
            <h1>Page not found</h1>
            <Button color="danger">Page Not Found</Button>
        </div>
    );
}

export default pageNotFound;