import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

function List({data}) {
    return (
        <div className='col-3 pt-4'>
            <Card
            >
                <CardBody>
                    {
                        data.name !== undefined ?
                            <CardTitle tag="h5">
                                {data.name}
                            </CardTitle> :
                            null
                    }

                    {
                        data.price !== undefined ?
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Price: {data.price}
                            </CardSubtitle>
                            : null
                    }

                    {
                        data.expiry && data.quantity ?
                            <CardText>
                                Expiry: {data.expiry} <br />
                                Quantity: {data.quantity}
                            </CardText>
                        : null
                    }
                    
                    

                    
                </CardBody>
            </Card>
        </div>
    );
}

export default List;