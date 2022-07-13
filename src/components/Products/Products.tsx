import { useEffect, useState } from "react";
import { View } from "../View/View";
import MediaQuery from 'react-responsive';
import './Products.css';

export function Products(){
    const [data, setData] = useState([{
        brand: "HyperX",
        createdAt: "2022-07-09T19:24:15.297Z",
        description: "O HyperX Cloud Stinger™ é o headicidade.",
        id: '18',
        name: "Headset Cloud Stinger",
        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
        price: "600.00",
        updatedAt: "2022-07-09T19:24:15.297Z"
    }]);

    const handleFecthData = () => {
        const url = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
        fetch(url)
          .then(resposta => resposta.json())
            .then( json => {
                for(let i in json){
                    setData(json['products'])
                }
            })
            .catch((err) => {
              console.log('Erro', err);
            });
    }

    useEffect(()=>{
        handleFecthData()
    })

    return(
        <div className="products" >
            <MediaQuery maxWidth={767}>
            <div  className="linhaZero">
                {data.map( (emp,i)=>
                (
                    <View 
                        id={emp.id}
                        name={emp.name}
                        photo={emp.photo}
                        price={emp.price} 
                        description={emp.description} 
                    />
                ))
                }
                </div>
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1223}>
                <div  className="linhaOne">
                {data.map( (emp,i)=>
                i<2 ?
                (
                    <View 
                        id={emp.id}
                        name={emp.name}
                        photo={emp.photo}
                        price={emp.price} 
                        description={emp.description} 
                    />
                ): null)
                }
                </div>
                <div className="linhaTwo">
                {data.map( (emp,i)=>
                i>1 && i<4 ?
                (
                    <View 
                        id={emp.id}
                        name={emp.name}
                        photo={emp.photo}
                        price={emp.price} 
                        description={emp.description}  
                        />
                        ): null)
                    }
                </div>
                <div className="linhaTwo">
                {data.map( (emp,i)=>
                i>3 && i<6 ?
                (
                    <View 
                        id={emp.id}
                        name={emp.name}
                        photo={emp.photo}
                        price={emp.price} 
                        description={emp.description}  
                        />
                        ): null)
                    }
                </div>
                <div className="linhaTwo">
                {data.map( (emp,i)=>
                i>5 ?
                (
                    <View 
                        id={emp.id}
                        name={emp.name}
                        photo={emp.photo}
                        price={emp.price} 
                        description={emp.description}  
                        />
                        ): null)
                    }
                </div>
            </MediaQuery>
            <MediaQuery minWidth={1224}>
                <div  className="linhaOne">
                {data.map( (emp,i)=>
                i<4 ?
                (
                    <View 
                        id={emp.id}
                        name={emp.name}
                        photo={emp.photo}
                        price={emp.price} 
                        description={emp.description} 
                    />
                ): null)
                }
                </div>
                <div className="linhaTwo">
                {data.map( (emp,i)=>
                i>3 ?
                (
                    <View 
                        id={emp.id}
                        name={emp.name}
                        photo={emp.photo}
                        price={emp.price} 
                        description={emp.description}  
                        />
                        ): null)
                    }
                </div>
            </MediaQuery>
        </div>
    )
}