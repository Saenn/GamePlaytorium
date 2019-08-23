import React,{Component} from 'react'
import '../css/Home.css'
import { Button } from 'semantic-ui-react'
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

const textArray =  ['','', '', '', '', '','ปั่นจิ้งหรีด 10 ที','วิดพื้น 5 ที (ทำแทนได้)','กระโดดตบ 5 ที','เดินไปหาคนที่คุณคิดว่า สวย/หล่อ ที่สุดแล้วบอกกับเค้าว่า "คุณน่ารักจัง"',
            'ขอท่าโลมากระโดดลงน้ำ','ขอท่าถ่ายรูปที่คิดว่า cool สุดๆ','คุณมี first love ตอนอายุเท่าไหร่','มีอะไรอยากบอกพี่แจ๊ค',
            'มีอะไรอยากบอกพี่วาส','มีอะไรอยากบอกพี่บาส','มีอะไรอยากบอกพี่อ๊อฟ','ขอท่าแมวเหมียวขอขนมหน่อย','ขอเพลงเป็ดพร้อมท่าเต้น',
            'ขอเพลงไก่ย่างพร้อมท่าเต้น','เริ่มต้นใหม่','คุณได้รับบัตรผ่านทันที','พี่โน้ตแจก 100 บาท','ท่าเสืออยากโยคะ','ส่งจูบให้คนที่คิดว่าน่ารักที่สุดในห้อง',
            'ถ้ามีดบาดจะร้องว่าอะไร แล้วถ้าบาด 3 ครั้ง...', '2+99-80+5*7 เป็นเท่าไหร่', 'ทำท่ากบกินยุง', 'เต้นระบำฮาวาย', 'ตีปากตัวเองตามอายุหารสอง',
            'ยืนขาเดียวระหว่างตอบ', 'กลิ้งตัวกับพื้น 2 รอบ' ,'ลุกนั่ง 5 ครั้ง', 'หมุนคอ 3 รอบ', 'แลบลิ้นค้างไว้', 'ก้มเอามือแตะพื้นค้างไว้', 'ทำท่าลิง',
            'วิ่งเป็นวงกลมสามรอบ', 'ท่องสูตรคูณแม่7', 'สูดลมหายใจเข้าลึกๆ', 'พูดว่ายักษ์รักลิง ลิงรักยักษ์ ลิงน่ารัก ยักษ์รักลิง', 'หยิกแก้มตัวเอง 1 ที', 'หมอบลงไป', 'นับ 1-27', 'หมุนหัวเข่า 3 รอบ', 'ทำเสียงไก่ขัน',];

const ran = [0,50,100,150,200,250,300,350,400,450];
const ranstop = [800,1000,1200,1800,1500,800];
const arr7 = [1700,1700];
const arr2 = [1400,1000,1500,2000];
const arr3 = [1100,900,1200,2300];
const arr4 = [800,1000,1400,1700,2500];
const arr8 = [500,900,1300,1800,2400];
const arr5 = [100,500,900];
const arr6 = [300,500,700,700,700,700];


var realarr = ranstop;

class Paitortub extends Component{ 

    constructor(props){
        super(props);
        this.state = ({
            spin : false,
            stop : true,
            textIdx : 0,
            open1 : false,
            open2 : false,
            open3 : false,
            open4 : false,
            open5 : false        
        })
        this.spin = this.spin.bind(this);
        this.stop = this.stop.bind(this);
        this.flip = this.flip.bind(this);
        this.check = this.check.bind(this);
        this.close = this.close.bind(this);
        this.select = this.select.bind(this);
    }

    select(e){
        console.log(e.target.className);
        if(e.target.className === 'front1'){
            this.close();
            this.setState({
                open1 : true
            })            
        }
        if(e.target.className === 'front2'){
            this.close();
            this.setState({
                open2 : true
            })
            
        }
        if(e.target.className === 'front3'){
            this.close();
            this.setState({
                open3 : true
            })
            
        }
        if(e.target.className === 'front4'){
            this.close();
            this.setState({
                open4 : true
            })
            
        }
        if(e.target.className === 'front5'){
            this.close();
            this.setState({
                open5 : true
            })
            
        }
    }

    close(){
        console.log("1")
        if(this.state.open1 === true){
            console.log("1")
            document.getElementById('1').style.opacity = '0.55';
            document.getElementById('1').style.backgroundColor = '#D8D8D8'
            document.getElementById('11').style.opacity = '0.55';
            document.getElementById('11').style.backgroundColor = '#D8D8D8'
            document.getElementById('label1').style.opacity = '0.55';
            document.getElementById('label1').style.backgroundColor = '#D8D8D8'
        }
        if(this.state.open2 === true){
            document.getElementById('2').style.opacity = '0.55';
            document.getElementById('2').style.backgroundColor = '#D8D8D8'
            document.getElementById('22').style.opacity = '0.55';
            document.getElementById('22').style.backgroundColor = '#D8D8D8'
            document.getElementById('label2').style.opacity = '0.55';
            document.getElementById('label2').style.backgroundColor = '#D8D8D8'
        }
        if(this.state.open3 === true){
            document.getElementById('3').style.opacity = '0.55';
            document.getElementById('3').style.backgroundColor = '#D8D8D8'
            document.getElementById('33').style.opacity = '0.55';
            document.getElementById('33').style.backgroundColor = '#D8D8D8'
            document.getElementById('label3').style.opacity = '0.55';
            document.getElementById('label3').style.backgroundColor = '#D8D8D8'
        }
        if(this.state.open4 === true){
            document.getElementById('4').style.opacity = '0.55';
            document.getElementById('4').style.backgroundColor = '#D8D8D8'
            document.getElementById('44').style.opacity = '0.55';
            document.getElementById('44').style.backgroundColor = '#D8D8D8'
            document.getElementById('label4').style.opacity = '0.55';
            document.getElementById('label4').style.backgroundColor = '#D8D8D8'
        }
        if(this.state.open5 === true){
            document.getElementById('5').style.opacity = '0.55';
            document.getElementById('5').style.backgroundColor = '#D8D8D8'
            document.getElementById('55').style.opacity = '0.55';
            document.getElementById('55').style.backgroundColor = '#D8D8D8'
            document.getElementById('label5').style.opacity = '0.55';
            document.getElementById('label5').style.backgroundColor = '#D8D8D8'
        }
    }

    check(e){

    }

    flip(e){
        e.target.style.transform = 'rotateY(180deg)'
        // console.log(e.target);
    }

    spin(){   
        clearInterval(this.timeout);       

        if(!this.state.spin){
            this.setState({
                spin : true
            })
        let i,o,x;
        
        let arr = []        

        for(let k = 0 ; k < 100 ; k++){
            i = Math.floor(Math.random() * 8) + 1;
            arr.push(ran[i]);
        }
    
        this.timeout = setInterval(() => {
                x = Math.floor(Math.random() * 45) + 1;
                this.setState({ textIdx: x});
                arr.shift();
                if(arr.length === 0) clearInterval(this.timeout); 
        }, arr[0]);        
    }
    }

    stop(){

        if(this.state.spin){
            this.setState({
                spin : false
            })
            clearInterval(this.timeout); 

            // let o,x;

            // o = Math.floor(Math.random() * 7) + 1;
            // if(o === 1){
            //     realarr = arr2;
            // }
            // else if(o === 2){
            //     realarr = arr3;

            // }else if(o === 3){
            //     realarr = arr4;

            // }
            // else if(o === 4){
            //     realarr = arr5;

            // }   
            // else if(o === 5){
            //     realarr = arr6;

            // }   
            // else if(o === 6){
            //     realarr = arr7;

            // }   
            // else if(o === 7){
            //     realarr = arr8;

            // }   
            // else{
            //     realarr = ranstop;
            // }        

            // o = Math.floor(Math.random() * 3) + 1;;
            // let i = Math.floor(Math.random() * 6) + 1;
            // this.timeout2 = setInterval(() => {
            //     x = Math.floor(Math.random() * 45) + 1;
                
            //     this.setState({ textIdx: x});
            //     o = o+1;
            //     if(ranstop[o] === undefined){
            //         toast({
            //             type: 'warning',
            //             icon: 'envelope',
            //             size : 'huge',
            //             title : 'Do it   . . . . . . . ',
            //             time: 1200,                   
            //         });
            //         clearInterval(this.timeout2);
            //         this.setState({
            //             spin : false
            //         })        
            //     }
            // }, ranstop[i]);

            
        }
    }
   
    render(){
        console.log(this.state.textIdx)
        let textThatChanges = textArray[this.state.textIdx % textArray.length];
        return(
            
            <div className="paitortub">
                <SemanticToastContainer />
                
                

                <div style={{zIndex : '3', color : 'black',fontWeight : 'bold', fontSize : '80px', lineHeight : '100px', textAlign : 'center', position : 'absolute', width : '90vw',
                height : '50vh', top : '28%', left : '50%', transform : 'translate(-50%,0)'}}><p id="order">{textThatChanges}</p></div>


                
                <Button href="/" color='blue' style={{ zIndex : '3',fontSize : '20px',width : '150px' , height : '50px',position : 'fixed', bottom : '33px', right : '30px'
            }}>Back</Button>

                <Button   color='green' onClick={this.spin} style={{position : 'fixed',zIndex : '3',fontSize : '30px',width : '300px' , height : '80px', marginLeft : '45px', marginTop : '35px', top : '0px'}}>
                    Spin
                </Button>
                <Button   color='red' onClick={this.stop} style={{position : 'fixed',zIndex : '3', fontSize : '30px', width : '300px' , height : '80px', marginLeft : '45px', left : '340px',marginTop : '35px', top : '0px'}}>
                    Stop
                </Button>

                <label onClick={(e) => this.select(e)} id="label1" style={{position : 'fixed' ,bottom : '0px' , left : '140px'}}> 
                    <input type="checkbox"  />
                    <div className="card">
                        <div className="front1" id="11">1</div>
                        <div className="back1" id="1" onClick={(e) => this.check(e)}>สัตว์</div>
                    </div>
                </label>
                <label onClick={ (e) => this.select(e)} id="label2" style={{position : 'fixed' ,bottom : '0px' , left : '375px'}}> 
                    <input type="checkbox"  />
                    <div className="card">
                        <div className="front2" id="22">2</div>
                        <div className="back2" id="2" onClick={(e) => this.check(e)}>ผลไม้</div>
                    </div>
                </label>
                <label onClick={(e) => this.select(e)} id="label3" style={{position : 'fixed' ,bottom : '0px' , left : '610px'}}> 
                    <input type="checkbox"  />
                    <div className="card">
                        <div className="front3" id="33">3</div>
                        <div className="back3" id="3" onClick={(e) => this.check(e)}>อาหาร</div>
                    </div>
                </label>
                <label onClick={(e) => this.select(e)} id="label4" style={{position : 'fixed' ,bottom : '0px' , left : '845px'}}> 
                    <input type="checkbox"  />
                    <div className="card">
                        <div className="front4" id="44">4</div>
                        <div className="back4" id="4" onClick={(e) => this.check(e)}>สิ่งของ</div>
                    </div>
                </label>
                <label onClick={(e) => this.select(e)} id="label5" style={{position : 'fixed' ,bottom : '0px' , left : '1080px'}}> 
                    <input type="checkbox"  />
                    <div className="card">
                        <div className="front5" id="55">5</div>
                        <div className="back5" id="5" onClick={(e) => this.check(e)}>อวัยวะ</div>
                    </div>
                </label>
             
                 {/* <Button  color="orange" style={{zIndex : '3', fontSize : '35px', width : '200px', height : '90px', position : 'fixed', bottom : '45px', left : '40px'}} >< p></p>สัตว์</Button> */}
                {/* <Button color="yellow" style={{zIndex : '3',fontSize : '35px', width : '200px', height : '90px', position : 'fixed', bottom : '45px', left : '265px'}}>ผลไม้</Button> */}
                {/* <Button color="green" style={{zIndex : '3',fontSize : '35px', width : '200px', height : '90px', position : 'fixed', bottom : '45px', left : '490px'}}>อาหาร</Button> */}
                {/* <Button color="teal" style={{zIndex : '3',fontSize : '35px', width : '200px', height : '90px', position : 'fixed', bottom : '45px', left : '715px'}}>สิ่งของ</Button> */}
                {/* <Button style={{zIndex : '3',fontSize : '35px', width : '200px', height : '90px', position : 'fixed', bottom : '45px', left : '940px'}}>อวัยวะ</Button> */}
                

   

            <div className="background" />

            </div>

            
        )
    }

}

export default Paitortub;
