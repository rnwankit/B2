import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Button from '../Button/Button';


function List({ data }) {

    //console.log("List", props)

    return (
        <div className='col-3 pt-4'>
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            {data.name ? data.name : null}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {data.price ? "Price: " + data.price : null}
                        </CardSubtitle>
                        <CardText>
                            {data.quantity ? "Quantity: " + data.quantity : null}
                            <br />
                            {data.expiry ? "Expiry: " + data.expiry : null}
                        </CardText>
                        <Button color="green">
                            Edit
                        </Button>
                        <Button color="red">
                            Delete
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default List;