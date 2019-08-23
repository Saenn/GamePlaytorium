import React,{Component} from 'react'
import '../css/Home.css'
import { Button } from 'semantic-ui-react'
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

class Painai extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            set : [],
            selected : 0,
            score : 0,
            open1 : false,
            open2 : false,
            open3 : false,
            open4 : false,
            open5 : false,   
            setA : ['','ชะอำ','เชียงราย','ปารีส','วัดโพธิ์','เยาวราช','สนามหลวง','นครวัด','มาชูปิกชู','บิ๊กซี','โตเกียว','สวนผึ้ง','พร้อมพงศ์','บราซิล','สวนสยาม','Central World','วังน้ำเขียว','ฮอกวอตส์','ประตูน้ำ','เสาร์ชิงช้า','สนามเป้า','หลักสี่','น้ำตกเอราวัณ','หลวงพระบาง','ปีนัง','ระยอง','โพไซดอน','มัลดีฟส์','ฮ่องกง','ลำปาง','เอกมัย','เกาะล้าน','ซาฟารีเวิลด์','เมเจอร์รัชโยธิน','พญาไท','อียิปต์','ภูเขาทอง','สะพานพุทธ','บิ๊กเบน','อิมแพคอารีนา','นวลจันทร์'],
            setB : ['','พัทลุง','โชคชัย4','ซูริค','ภูเก็ต','ปอยเปต','อลาสก้า','สะพานควาย','เชียงคาน','พังงา','ภูชี้ฟ้า','กำแพงเมืองจีน','จตุจักร','พระปะแดง','สามย่าน','เขาชนไก่','ลาสเวกัส','เวียนนา','เสม็ด','แหลมพรหมเทพ','ประจวบฯ','โซล','เกาะพีพี','รพ.ศิริราช','เขาคิชกุฏ','นครปฐม','ทองหล่อ','แคราย','ฮาวาย','สำโรง','บ้านหม้อ','สยาม','บุญถาวร','ศรีราชา','รามคำแหง','หอเอนปิซ่า','เบอร์ลิน','วัดระฆัง','แม่ฮ่องสอน','ผาหำหด','Museum Siam'],
            setC : ['','มาเก๊า','ดิสนีย์แลนด์','โลตัส','ดอยอินทนนท์','ยันฮี','พีรมิด','หาดใหญ่','สะพานแขวน','พาหุรัด','ลาดพร้าว','RCA','Iconsiam','โคลอสเซียม','โรงเบียร์เยอรมันตะวันแดง','ศรีสระเกษ','เช็ก','เมืองทอง','สีลม','พม่า','จันทบุรี','ตุรกี','แกรนด์แคนยอน','โอซาก้า','วัดอรุณ','วังหลัง','ดอนเมือง','ปัตตานี','เขาใหญ่','สวนลุมพินี','เกาะเต่า','อยุธยา','ทัชมาฮาล','พนมเปญ','ตะวันนา','วังเวียง','สะพานพุทธ','อังกอร์วัด','น่าน','สุวรรณภูมิ','ห้วยขาแข้ง'],
            setD : ['','ฟิลิปปินส์','แดนเนรมิต','หัวลำโพง','รัสเซีย','สาทร','บาหลี','สะพานโกลเดนเกต','ลาดกระบัง','รังสิต','ตรัง','ฮอกไกโด','ภูกระดึง','ยะลา','ตลาดนัดรถไฟรัชดา','เกาะหลีเป๊ะ',' สำเพ็ง','อโศก','อารีย์','ลาดปลาเค้า','รัชดา','สปป.ลาว','พระนคร','ชะอำ','ภูทับเบิก','เขาค้อ','ท่าพระ','เจดีย์ชเวดากอง','มาเลเซีย','แม่น้ำแคว','สิงคโปร์','เมลเบิร์น','เชินเจิ้น','ปานามา','พระราม 9','บางปู','ท่าพระจันทร์','ผาแต้ม','ระนอง','เกาะเสม็ด','พัทยา'],
            setE : ['','ข้าวสาร','สามเสน','เวียงจันทร์','แม่กิมลั้ง','หัวหิน','ดอยอ่างข่าง','ปากเกล็ด','ถนนจันทร์','สังชละบุรี','ปางอุ๋ง','ขอนแก่น','ตลาดน้ำอัมพวา','โอกินาว่า','ท่ามหาราช','ดอยตุง','แก่งกระจาน','บ้านโป่ง','วัดเส้าหลิน','เกาะแก้วพิสดาร','คำชะโนด','อัมสเตอร์ดัม','เกาะสมุย','โคราช','อินเดีย','หนองมน','นรก','หอไอเฟล','ป.กุ้งเผา','ฮอลลีวูด','ดรีมเวิลด์','วัดพระแก้ว','แหลมเจริญ','สายไหม','ปตท.','กรีซ','หนองแขม','สุรินทร์','อ.ต.ก','บางพลัด','เยอรมัน'],
        }
        this.toA = this.toA.bind(this);
        this.toB = this.toB.bind(this);
        this.toC = this.toC.bind(this);
        this.toD = this.toD.bind(this);
        this.toE = this.toE.bind(this);
        this.next = this.next.bind(this);
        this.skip = this.skip.bind(this);
        this.start = this.start.bind(this);
        this.close = this.close.bind(this);

    }

    reset(){
        this.setState({
            setA : ['','ชะอำ','เชียงราย','ปารีส','วัดโพธิ์','เยาวราช','สนามหลวง','นครวัด','มาชูปิกชู','บิ๊กซี','โตเกียว','สวนผึ้ง','พร้อมพงศ์','บราซิล','สวนสยาม','Central World','วังน้ำเขียว','ฮอกวอตส์','ประตูน้ำ','เสาร์ชิงช้า','สนามเป้า','หลักสี่','น้ำตกเอราวัณ','หลวงพระบาง','ปีนัง','ระยอง','โพไซดอน','มัลดีฟส์','ฮ่องกง','ลำปาง','เอกมัย','เกาะล้าน','ซาฟารีเวิลด์','เมเจอร์รัชโยธิน','พญาไท','อียิปต์','ภูเขาทอง','สะพานพุทธ','บิ๊กเบน','อิมแพคอารีนา','นวลจันทร์'],
            setB : ['','พัทลุง','โชคชัย4','ซูริค','ภูเก็ต','ปอยเปต','อลาสก้า','สะพานควาย','เชียงคาน','พังงา','ภูชี้ฟ้า','กำแพงเมืองจีน','จตุจักร','พระปะแดง','สามย่าน','เขาชนไก่','ลาสเวกัส','เวียนนา','เสม็ด','แหลมพรหมเทพ','ประจวบฯ','โซล','เกาะพีพี','รพ.ศิริราช','เขาคิชกุฏ','นครปฐม','ทองหล่อ','แคราย','ฮาวาย','สำโรง','บ้านหม้อ','สยาม','บุญถาวร','ศรีราชา','รามคำแหง','หอเอนปิซ่า','เบอร์ลิน','วัดระฆัง','แม่ฮ่องสอน','ผาหำหด','Museum Siam'],
            setC : ['','มาเก๊า','ดิสนีย์แลนด์','โลตัส','ดอยอินทนนท์','ยันฮี','พีรมิด','หาดใหญ่','สะพานแขวน','พาหุรัด','ลาดพร้าว','RCA','Iconsiam','โคลอสเซียม','โรงเบียร์เยอรมันตะวันแดง','ศรีสระเกษ','เช็ก','เมืองทอง','สีลม','พม่า','จันทบุรี','ตุรกี','แกรนด์แคนยอน','โอซาก้า','วัดอรุณ','วังหลัง','ดอนเมือง','ปัตตานี','เขาใหญ่','สวนลุมพินี','เกาะเต่า','อยุธยา','ทัชมาฮาล','พนมเปญ','ตะวันนา','วังเวียง','สะพานพุทธ','อังกอร์วัด','น่าน','สุวรรณภูมิ','ห้วยขาแข้ง'],
            setD : ['','ฟิลิปปินส์','แดนเนรมิต','หัวลำโพง','รัสเซีย','สาทร','บาหลี','สะพานโกลเดนเกต','ลาดกระบัง','รังสิต','ตรัง','ฮอกไกโด','ภูกระดึง','ยะลา','ตลาดนัดรถไฟรัชดา','เกาะหลีเป๊ะ',' สำเพ็ง','อโศก','อารีย์','ลาดปลาเค้า','รัชดา','สปป.ลาว','พระนคร','ชะอำ','ภูทับเบิก','เขาค้อ','ท่าพระ','เจดีย์ชเวดากอง','มาเลเซีย','แม่น้ำแคว','สิงคโปร์','เมลเบิร์น','เชินเจิ้น','ปานามา','พระราม 9','บางปู','ท่าพระจันทร์','ผาแต้ม','ระนอง','เกาะเสม็ด','พัทยา'],
            setE : ['','ข้าวสาร','สามเสน','เวียงจันทร์','แม่กิมลั้ง','หัวหิน','ดอยอ่างข่าง','ปากเกล็ด','ถนนจันทร์','สังชละบุรี','ปางอุ๋ง','ขอนแก่น','ตลาดน้ำอัมพวา','โอกินาว่า','ท่ามหาราช','ดอยตุง','แก่งกระจาน','บ้านโป่ง','วัดเส้าหลิน','เกาะแก้วพิสดาร','คำชะโนด','อัมสเตอร์ดัม','เกาะสมุย','โคราช','อินเดีย','หนองมน','นรก','หอไอเฟล','ป.กุ้งเผา','ฮอลลีวูด','ดรีมเวิลด์','วัดพระแก้ว','แหลมเจริญ','สายไหม','ปตท.','กรีซ','หนองแขม','สุรินทร์','อ.ต.ก','บางพลัด','เยอรมัน'],
        })
    }
    start(){
        
        if(this.state.set.length == 0){
            setTimeout(() => {
                toast({
                    type: 'warning',
                    icon: 'envelope',
                    title : 'Select a set 1st . . . . . . . . . ',
                    size : ' large',
                    time: 2000,                   
                });
            }, 100);
        }
        else if(this.state.set[0] == '' && this.state.set.length > 0){
            let tmp = this.state.set;
            tmp.shift();
            this.setState({
                set : tmp
            })
        }
    }

    next(){
        if(this.state.selected == 0){
            setTimeout(() => {
                toast({
                    type: 'warning',
                    icon: 'envelope',
                    title : 'Select a set 1st . . . . . . . . . ',
                    size : ' large',
                    time: 2000,                   
                });
            }, 100);
        }
        else if(this.state.set.length == 0){
            setTimeout(() => {
                toast({
                    type: 'warning',
                    icon: 'envelope',
                    title : 'หมดแล้วววววววววววว . . . . . . . . . ',
                    size : ' large',
                    time: 2000,                   
                });
            }, 100);
        }
        else if(this.state.set[0] == ""){
            let tmp = this.state.set;
            tmp.shift();
            this.setState({
                set : tmp
            })   
        }
        else{            
            this.setState({score : this.state.score + 1});
            let tmp = this.state.set;
            tmp.shift();
            console.log(tmp[0]);
            this.setState({
                set : tmp
            })
        }
    }

    skip(){
        if(this.state.selected == 0){
            setTimeout(() => {
                toast({
                    type: 'warning',
                    icon: 'envelope',
                    title : 'Select a set 1st . . . . . . . . . ',
                    size : ' large',
                    time: 2000,                   
                });
            }, 100);
        }
        else if(this.state.set.length == 0){
            setTimeout(() => {
                toast({
                    type: 'warning',
                    icon: 'envelope',
                    title : 'หมดแล้วววววววววววว . . . . . . . . . ',
                    size : ' large',
                    time: 1500,                   
                });
            }, 100);
        }
        else{
            let tmp = this.state.set;
            const e = tmp[0];
            tmp.shift();
            tmp.push(e);
            this.setState({
                set : tmp
            })
        }    

    }

    close(){
        if(this.state.open1 === true){
            console.log("1")
            document.getElementById('1').style.opacity = '0.3';
            document.getElementById('1').style.backgroundColor = '#D8D8D8'
           
        }
        if(this.state.open2 === true){
            document.getElementById('2').style.opacity = '0.3';
            document.getElementById('2').style.backgroundColor = '#D8D8D8'
            
        }
        if(this.state.open3 === true){
            document.getElementById('3').style.opacity = '0.3';
            document.getElementById('3').style.backgroundColor = '#D8D8D8'
    
        }
        if(this.state.open4 === true){
            document.getElementById('4').style.opacity = '0.3';
            document.getElementById('4').style.backgroundColor = '#D8D8D8'
           
        }
        if(this.state.open5 === true){
            document.getElementById('5').style.opacity = '0.3';
            document.getElementById('5').style.backgroundColor = '#D8D8D8'
          
        }
    }
   
    toA(){
        this.close()
        this.setState({
            open1 : true
        })
        setTimeout(() => {
            toast({
                type: 'warning',
                icon: 'envelope',
                title : 'Set A is selected',
                size : ' large',
                time: 2000,                   
            });
        }, 100);

        if(this.state.selected != 1){
            this.reset();
        }
        this.setState({
            set : this.state.setA,
            score : 0,
            selected : 1
        })
        
        
    }

    toB(){
        this.close()
        this.setState({
            open2 : true
        })
        setTimeout(() => {
                toast({
                    type: 'warning',
                    icon: 'envelope',
                    title : 'Set B is selected . . . . . . . . . ',
                    size : ' large',
                    time: 2000,                   
                });
            }, 100);
        if(this.state.selected != 2){
            this.reset();
        }
        this.setState({
            set : this.state.setB,
            score : 0,
            selected : 2,
        })
    }

    toC(){
        this.close()
        this.setState({
            open3 : true
        })
        setTimeout(() => {
            toast({
                type: 'warning',
                icon: 'envelope',
                title : 'Set C is selected . . . . . . . . . ',
                size : ' large',
                time: 2000,                   
            });
        }, 100);
        if(this.state.selected != 3){
            this.reset();
        }
        this.setState({
            set : this.state.setC,
            score : 0,
            selected : 3,
        })
    }

    toD(){
        this.close()
        this.setState({
            open4 : true
        })
        setTimeout(() => {
            toast({
                type: 'warning',
                icon: 'envelope',
                title : 'Set D is selected . . . . . . . . . ',
                size : ' large',
                time: 2000,                   
            });
        }, 100);
        if(this.state.selected != 4){
            this.reset();
        }
        this.setState({
            set : this.state.setD,
            score : 0,
            selected : 4
        })
    }

    toE(){
        this.close()
        this.setState({
            open5 : true
        })
        setTimeout(() => {
            toast({
                type: 'warning',
                icon: 'envelope',
                title : 'Set E is selected . . . . . . . . . ',
                size : ' large',
                time: 2000,                   
            });
        }, 100);
        if(this.state.selected != 5){
            this.reset();
        }
        this.setState({
            set : this.state.setE,
            score : 0,
            selected : 5
        })
    }


    render(){
        return(
            <div className="painai">
                <SemanticToastContainer />
                <Button href="/"   color='blue' style={{fontSize : '20px',width : '150px' , height : '50px',position : 'fixed', bottom : '33px', right : '30px'
            }}>Back</Button>

                <div className="score" style={{textAlign : 'center',fontSize : '70px', position : 'absolute', height : '50px' ,width : '300px'}}>Score</div>
            
                <div style={{ color : 'white',textAlign : 'center' ,fontSize : '140px', position : 'absolute',top : '150px', width : '300px', height : '200px'}}><p >{this.state.score}</p></div>
                <Button onClick={(e) => this.toA(e)}   id="1" color="orange" style={{fontSize : '20px', width : '200px', height : '100px', position : 'fixed', bottom : '33px', left : '40px'}}>Set A</Button>
                <Button  onClick={(e) => this.toB(e)} id="2"   color="yellow" style={{fontSize : '20px', width : '200px', height : '100px', position : 'fixed', bottom : '33px', left : '255px'}}>Set B</Button>
                <Button onClick={(e) => this.toC(e)}  id="3" color="green" style={{fontSize : '20px', width : '200px', height : '100px', position : 'fixed', bottom : '33px', left : '465px'}}>Set C</Button>
                <Button onClick={(e) => this.toD(e)}  id="4" color="teal" style={{fontSize : '20px', width : '200px', height : '100px', position : 'fixed', bottom : '33px', left : '680px'}}>Set D</Button>
                <Button onClick={ (e) => this.toE(e)}  id="5" style={{fontSize : '20px', width : '200px', height : '100px', position : 'fixed', bottom : '33px', left : '895px'}}>Set E</Button>
                
                <div className="text">
                    <div className="coverbut">
                        <Button onClick={this.start}   color="red" style={{fontSize : '20px', width : '200px', height : '70px', marginRight : '30px'}}>Start</Button>
                        <Button onClick={this.next}   color="orange" style={{fontSize : '20px', width : '200px', height : '70px', marginRight : '30px'}}>Next</Button>
                        <Button onClick={this.skip}   color="pink" style={{fontSize : '20px', width : '200px', height : '70px'}}>Skip</Button>
                    </div>
                    <div className="place" id="text" >{this.state.set[0]}</div>
                
                </div>
                
            </div>
        )
    }

}

export default Painai;
