import React from 'react';
import SubmitRating from '../components/SubmitRating';
import '../pages/Extracurriculars.css';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import BoxLeft from '../components/BoxLeft';
import BoxRight from '../components/BoxRight';
import Button from '@mui/material/Button';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { useEffect} from 'react';
import { UserContext } from '../App'
import ForumMenu from '../components/ForumMenu';


const Extracurriculars = () => {
    const { description, setDescription, tags, setTags , title, setTitle} = React.useContext(UserContext);
    const[boxList, setBoxList] = React.useState([]);
    const[right, setRight] = React.useState(true);
    const[first, setFirst] = React.useState(true);
    
    /*useEffect(()=>{
        if(right){
            setBoxList(boxList.concat(<BoxRight key={boxList.length} description={description} tags={tags} title={title}/>));
            setRight(false);
        }
        else{
            setBoxList(boxList.concat(<BoxLeft key={boxList.length} description={description} tags={tags} title={title}/>));
            setRight(true);
        }
        
    }, [])
    */
    
    useEffect(() => {
        const menuWrap = document.querySelector(".bm-menu-wrap");
        if (menuWrap) {
          menuWrap.setAttribute("aria-hidden", true);
        }
        if(first){
            console.log("happy day!")
            setFirst(false);
        }
        else if(right && !first){
            setBoxList(boxList.concat(<BoxRight key={boxList.length} description={description} tags={tags} title={title}/>));
            setRight(false);
        }
        else{
            setBoxList(boxList.concat(<BoxLeft key={boxList.length} description={description} tags={tags} title={title}/>));
            setRight(true);
        }
        
    }, [description]);
    
    return(      
            <div className="page">
            <div className="scrollable-div" >
            {boxList.reverse()}
            <BoxLeft title="Pitchforks" description="When you need a snack late at night, this is the place
            to go. They have the best grilled cheeses on campus. I recommend getting as many as you can!"/>
            <BoxRight title="FEMMES" description="For those who don't know, FEMMES stands for Females
            Excelling More in Math, Engineering and Science. You get to teach elementary school girls on
            various STEM topics. They are always excited to see what you each week!"/>
            <BoxLeft title="Monuts" description="This brunch place is INCREDIBLE and so well-priced too.
            Even though it sounds weird, I highly recommend getting the chicken and pickle biscuit."/>
            <BoxRight title="Jeni's" description="This place just opened this summer and I have already
            been way too many times. It is overpriced, but the flavors are so unique and so good."/>
            <BoxLeft title="DTech" description="Join, join, join! If you're interested in tech, do yourself
            a favor and join this community. There is so much support that they offer, from mentorship to guidance
            on registering for classes to recruiting prep. I cannot stress enough how glad I am that I am 
            apart of this group on campus."/>
            </div>
            <SubmitRating />
             </div>
            

        
        
        
    );
}

export default Extracurriculars