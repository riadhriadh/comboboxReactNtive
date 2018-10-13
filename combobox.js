import React, { Component } from 'react';
import { FlatList,TouchableOpacity,View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native'
export default class Combobox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open:true,
        max:"80%",
        min:'70%' ,
        icon:'caret-down'
    };
  }
  measureView(event) {
    console.log('event peroperties: ', event);
  }

  componentDidMount(){
    let {width, height} = Dimensions.get('window')
    console.log('tille',width, height)
      {this.state.open==false ? this.setState({icon:'caret-up'}):this.setState({icon:'caret-down'})}
      if(this.props.data !=null){
        {this.props.data.length==0 ?this.setState({min:'5%'}):null}
      }
   
  }
  render() {
    return (
     
        <View style={{width: "100%", backgroundColor:'white' }} style={this.props.style}    onLayout={(event) => this.measureView(event)}>
        <TouchableOpacity onPress={()=>{ this.setState({
            open:!this.state.open
        })
        {this.state.open==false ? this.setState({icon:'caret-down'}):this.setState({icon:'caret-up'})}
        
        }} >
      <View style={{width: "100%",  flexDirection: 'row', borderWidth: 1,
               borderColor: '#95989a'}}>
         
      
      <View style={{width: "85%", height: 40,justifyContent:'center'}} >
      <Text style={{padding:10,color:"#707070"}}>
     {this.props.title}
      </Text>
      </View>
        <View style={{width: "15%", height: 40,alignItems:'center',justifyContent:'center'}} >
        <Icon name={this.state.icon} size={30} color="#707070" />
        </View>
     
        </View>
        </TouchableOpacity>
        <View style={{flex:1 ,borderWidth: 1,
        backgroundColor:'white',
        display:this.state.open,
        maxHeight:100,
        minHeight:150,
        //  this.state.min,
               borderColor: '#95989a',}}
            
               >
         {/* <ScrollView> */}
             
         {this.props.data!=null ? 
             
       <FlatList
       data={this.props.data}
         // style={{padding:20}}
       numColumns={1}
       showsVerticalScrollIndicator={false}
       renderItem={({item}) =>
       <TouchableOpacity style={{
        borderColor: '#95989a',
        borderWidth: 0.4,
       }}   style={this.props.styleItem}   >
       <Text style ={{color:"black",padding :20}} style={this.props.itemText}>
      {item.name}
       </Text>
      </TouchableOpacity> 
       }
       keyExtractor={item => item}
     />  : null}
         
      {/* </ScrollView> */}

        </View>
        </View>
    
   
    );
  }
}
