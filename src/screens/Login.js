import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import Button from "../component/SignUpButton";
import { registerdUserList } from "../screens/SignUp";

class user {
  constructor(email, password, name, phoneNumber, address) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
const checkLogin = (email, password) => {
  for (let i = 0; i < registerdUserList.length; i++) {
    if (
      registerdUserList[i].email == email &&
      registerdUserList[i].password == password
    ) {
      return true;
    }
  }
  return false;
};
const Login = ({ route, navigation }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [message, setMessage] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* 로그인 실패 Modal */}
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalTextConext}>
            <Text style={styles.modalTitle}>{message}</Text>
          </View>
          <Button
            title="확인"
            onPress={() => {
              setModalVisible(false);
            }}
            buttonStyle={styles.modalButtonFrame}
            textStyle={styles.buttonText}
          />
        </View>
      </Modal>
      {/* 메인 화면 */}
      <View style={styles.context}>
        {/* <Image source={require("../../assets/main.png")} style={styles.image} /> */}

        <TextInput
          style={styles.input}
          onChangeText={text => {
            setInputEmail(text);
          }}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setInputPassword(text);
          }}
          placeholder="Password"
        />
        <Button
          title="Login"
          onPress={() => {
            if (checkLogin(inputEmail, inputPassword) == true) {
              // navigation.navigate("메인화면", {});
            } else {
              setMessage("아이디와 비밀번호를 확인해주세요.");
              setModalVisible(true);
            }
          }}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          title="SignUp"
          onPress={() => {
            navigation.navigate("SignUp", {});
          }}
          textStyle={styles.signUpText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  context: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: "#F5FBEF",
    borderWidth: 1,
    borderColor: "#74DF00",
    width: "80%",
    height: 60,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: "#298A08",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    width: "80%",
    height: 60,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  signUpText: {
    fontSize: 15,
    color: "#298A08",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 300,
  },
  modalContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  modalTextConext: {
    marginTop: 50,
    marginBottom: 20,
  },
  modalButtonFrame: {
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    backgroundColor: "#298A08",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
  },
});

export default Login;
