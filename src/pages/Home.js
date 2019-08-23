import React,{Component} from 'react'
import '../css/Home.css'
import { Button } from 'semantic-ui-react'

class Home extends Component{ 

    constructor(props){
        super(props);
       
    }
   
    render(){
        return(
            
            <div className="home" >
                <Button href="/game1"  color='red' style={{fontSize : '50px',width : '25%' , height : '18%', marginRight : '80px'}}>
                    ไปไหน ?
                </Button>
                <Button href="/game2"  color='blue' style={{fontSize : '50px', width : '25%' , height : '18%'}}>
                    ไปต่อตับ
                </Button>
            </div>
        )
    }

}

export default Home;
