import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Button,
  ToastAndroid
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };

    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);

  }

  handleOnChangeName(name) {
    this.setState({ name }); // if para name same state var name else name: para
  }

  handleOnChangePassword(password) {
    this.setState({ password });
  }

  handleSingIn(){
    ToastAndroid.show("You click sign in buttion", ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <Image
            style={{ marginBottom: 20 }}
            source={require("./assets/sunglasses.png")}
          />
          <TextInput
            placeholder={"UserName"}
            value={this.state.name}
            style={[styles.input, { color: "white" }]}
            onChangeText={this.handleOnChangeName}
          />
          <TextInput
            placeholder={"Password"}
            value={this.state.password}
            style={[styles.input, { color: "white" }]}
            onChangeText={this.handleOnChangePassword}
            secureTextEntry={true}
          /> 

          <View style={[{width:"80%"}]}>
            <Button 
              onPress = {this.handleSingIn}
              title="Sign In" 
              color="#26a6b4"
             />
        </View>    
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#223",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderStyle: "solid",
    // borderColor: "blue",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#37314c",
    marginBottom: 10,
    fontSize: 17,
    color: "white"
  },
  emailInput: {
    backgroundColor: "red"
  },
});
