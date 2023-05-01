import { useNavigate } from "react-router-dom";
const Home=()=>{
    const navigate=useNavigate()
    const data=[1,2,3,4];

    const data2=[{id:1,name:'abc',age:40},
                {id:2,name:'hty',age:30},
                {id:3,name:'szy',age:35},
                {id:4,name:'yut',age:38}];
    let li=[];
    for(let i=0;i<4;i++){
        li.push(<li> Item {data[i]}</li>)
    }

    let list2=[]
    for(let i=0;i<data2.length;i++){
        list2.push(<li>{data2[i].id},{data2[i].name},{data2[i].age}</li>)
    }

    return(
        <>
        <h1>Home Works</h1>
        <ul>
           {li}
        </ul>
        <h2>Employee Details</h2>
        <ul>
            {list2}
        </ul>
        <button onClick={()=>navigate('order-summary')}>Place Order</button>
        </>
    )
}

export default Home;