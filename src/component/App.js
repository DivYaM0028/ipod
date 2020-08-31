import React from 'react';
import Screen from './Screen';
import Wheel from './Wheel';
import ZingTouch from 'zingtouch';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      menu : false,
      song : false,
      games : false,
      video: false,
      setting : false,
      submenu : false,
      allsong : false,
      artist : false
    }
  }

  // Handle Wheel or Rotate function
  handleRotate = (props) => {
    const target = document.getElementById('outer-circle');
    const zing = new ZingTouch.Region(target);
    let angle = 0;
    zing.bind(target, 'rotate', (e) => {
      angle = angle + e.detail.distanceFromLast;
      // if menu and submenu is not selected don't rotate the wheel
      if(!this.state.menu && !this.state.submenu){
        return;
      }

      // Menu select Songs or Music
      if(((angle <= 30 && angle >= 0)||(angle <= 0 && angle > -30)) && (this.state.menu && !this.state.submenu)){
          console.log('Music selected');
          // Selecting the item from menu  
          let song = document.getElementById('song');
          let video = document.getElementById('video');
          let games = document.getElementById('games');
          let setting = document.getElementById('setting');
          
          // changing css style for selected item
          song.classList='select';
          video.classList='unselect';
          games.classList='unselect';
          setting.classList='unselect';
          
          // chaging the state
          this.setState({
            song : true,
            games : false,
            video:false,
            setting : false,
            submenu : false
          })
      }

      // select games from menu
      if(((angle <= 60 && angle>=30)||(angle <= -30 && angle > -60)) && (this.state.menu && !this.state.submenu)){
        console.log('games selected');
        // selecting the item from menu
        let song = document.getElementById('song');
        let video = document.getElementById('video');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');
        
        // changing css style for selected element
        song.classList='unselect';
        games.classList='select';
        video.classList='unselect';
        setting.classList='unselect';
        
        // chaging the state
        this.setState({
          song : false,
          games : true,
          video:false,
          setting : false,
          submenu : false
        })
      }

      // Select Setting
      if(((angle <= 90 && angle>=60)||(angle <= -60 && angle > -90)) && (this.state.menu && !this.state.submenu)){
        console.log('Videos selected');
        // selecting the all elements from the menu
        let song = document.getElementById('song');
        let video = document.getElementById('video');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');
        
        // changing css style for selected element
        song.classList='unselect';
        games.classList='unselect';
        video.classList='select';
        setting.classList='unselect';
        
        // chaging the state
        this.setState({
          song : false,
          games : false,
          video:true,
          setting : false,
          submenu : false
        })
      }

      // select Creater 
      if(((angle <= 120 && angle>=90)||(angle <= -90 && angle > -120)) && (this.state.menu && !this.state.submenu)){
        console.log('settings selected');
         // selecting the all elements from menu
        let song = document.getElementById('song');
        let video = document.getElementById('video');
        let games = document.getElementById('games');
        let setting = document.getElementById('setting');
        
        // changing css style for selected element
        song.classList='unselect';
        games.classList='unselect';
        video.classList='unselect';
        setting.classList='select';
        
        // chaging the state
        this.setState({
          song : false,
          games : false,
          video:false,
          setting : true,
          submenu : false
        })
      }


      // handling sub-menu 
      if(this.state.submenu){
        if(((angle <= 30 && angle >= 0)||(angle <= 0 && angle > -30))){
          console.log('all songs selected');
          // selecting the all elements from sub-menu
          let allsong = document.getElementById('allsong');
          let artist = document.getElementById('artist');
          // changing css style for selected element
          allsong.classList='select';
          artist.classList='unselect';
          // chaging the state
          this.setState({
            allsong : true,
            artist : false
          })
        }
        // select artist
        if(((angle <= 60 && angle>=30)||(angle <= -30 && angle > -60))){
          console.log('artist selected');
          // selecting the all element from submenu
          let allsong = document.getElementById('allsong');
          let artist = document.getElementById('artist');
          // changing css style for selected 
          allsong.classList='unselect';
          artist.classList='select';
          // chaging the state
          this.setState({
            allsong : false,
            artist : true
          })
        }
      }
    });
  }

  // handle click on menu button
  handleMenuClick = (props) => {
    console.log("handleMenu Click");
    const { menu } = this.state;
    this.setState({
      menu : !menu,
      submenu: false
    })
    let display = document.getElementById('screen-container');
    display.style.backgroundImage="url('https://i2.wp.com/www.worldwidemusicfactory.com/wp-content/uploads/2016/05/Music-nature0-e1462918049932.jpg?fit=733%2C434&ssl=1')";
  }

  // hide menu when select the selected item
  handlechangestate = () =>{
    const { menu } = this.state;
    this.setState({
      menu : !menu
    })
  }

  // handle state of submenu 
  handleSubMenuState = () => {
    this.setState({
      submenu: false
    })
  }


  // handle click on inner circle
  handleInnerCirlceClick = (props) =>{
    // stop propagation to outer div
    props.stopPropagation(onclick);
    const { menu, song, games, video, setting, submenu, allsong, artist } = this.state;
    console.log(this.state);
    let display = document.getElementById('screen-container');

    // if menu is open
    if(menu){
      if(song){
        display.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRgzAKbtZnNAzsldY7nkFmkr1ZcAAqy4KAsw&usqp=CAU')";
        this.handlechangestate();
        this.setState({
          submenu : !submenu
        })
      }
      else if(games){
        
        display.style.backgroundImage="url('https://i.pcmag.com/imagery/lineups/06aNG64RXJ5GsJxhTKABxZa-1.fit_lim.v_1588954598.fit_lim.size_955x99999.jpg')";
        this.handlechangestate();
      }
      else if(video){
        
        display.style.backgroundImage="url('https://www.upsidelearning.com/blog/wp-content/uploads/2012/10/return-of-video-to-elearning.jpg')";
        this.handlechangestate();
      }
      else if(setting){
        
        display.style.backgroundImage="url('https://www.metfone.com.kh/Uploads/images/product/Settings-Logo.jpg')";
        this.handlechangestate();
      }
    }

    // if SUB-MENU is open for allsong and artist
    if(submenu){
      if(allsong){
        display.style.backgroundImage="url('https://i.pinimg.com/originals/71/cd/b8/71cdb84744205714a1416b19051e05b7.jpg')";
        this.handleSubMenuState();
      }
      
      if(artist){
        display.style.backgroundImage="url('https://1.bp.blogspot.com/-C6rW3guqtgs/XbxvPtc4WoI/AAAAAAAAAyE/aI2LISQI1gAY-HIBy-Kiz_9evX5fXKXSwCLcBGAsYHQ/s640/atif%252Cblog%252Cadbitechno.jpg')";
        this.handleSubMenuState();
      }
    }
  }

  render(){
    const { menu, submenu } = this.state;
    return (
      <div className="App">
        < Screen menu ={ menu} submenu= { submenu } />
        < Wheel 
          onMenuClick = {this.handleMenuClick}
          onhandleRotate = {this.handleRotate}
          handleInnerCirlceClick = {this.handleInnerCirlceClick}
        />
      </div>
    );
  }
}
export default App;
