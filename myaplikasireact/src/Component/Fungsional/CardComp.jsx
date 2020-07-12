import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button, Card,
    CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function CardComp(props) {
        return (
            <div>
            <Card>
                <CardImg top width="25%" height= "5%" src="https://www.flaurentsalon.com/wp-content/uploads/2017/03/IMG_5277e-1-683x1024.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.judul}</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>
                        <Link to=
                            {
                                {
                                    pathname: `/detail/${props.id}`,
                                    state: {
                                        judul: props.judul,
                                        tanggal: props.tanggal
                                    }
                                }
                            }>Detail
                        </Link>
                    </Button>
                </CardBody>
            </Card>
            </div>
        )
    }

export default CardComp;
