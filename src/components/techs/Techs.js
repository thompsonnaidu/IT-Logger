import React,{useEffect,useState} from 'react'
import TechItem from './TechItems'
import Preloader from './../layout/Preloader'
const Techs = () => {
    const [techs,setTechs] = useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        getTechs();
        //eslint-disable-next-line
    },[]);

    const getTechs= async() =>{
        setLoading(true);
        const res=await fetch('/techs');
        const data= await res.json();
        setTechs(data);
        setLoading(false);
    }

    if(loading){
        return <Preloader></Preloader>
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && techs.length===0 ?(<p className="center">NO Techincians found</p>):(techs.map(tech=> <TechItem tech={tech} key={tech.id} />))}
        </ul>
    )
}

export default Techs
