import { CardBody, CardHeader } from "@components/Card";
import { CardGroup } from "@components/Card";
import { CardImage } from "@components/Card";
import { Card } from "@components/Card";
import { Tilt } from 'react-tilt';


export const Projects = (props) => {

    const { passdata } = props;

    const imgArray = passdata;

    return (
        <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-3xl mx-auto mt-24 md:grid-cols-2 max-md:max-w-96">
            {
                imgArray && imgArray.length > 0 &&
                imgArray.map((item, index) => (
                    <Tilt key={index} options={{ max: 40, scale: 1.02 }}>
                        <Card className="col-span-1 cursor-pointer">

                            <CardBody newsite={item[2]} className="w-full bg-white-600/20 p-6">
                                <CardHeader>{ item[3] }</CardHeader>
                                <CardImage
                                    src={item[0]}
                                    alt="Customizable Layouts image used."
                                />
                                <CardImage
                                    src={item[1]}
                                    alt="Customizable Layouts image used."
                                />
                            </CardBody>

                        </Card>
                    </Tilt>
                ))
            }
        </CardGroup>
    );
};


