import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

import { styles } from './styles';

export default function App() {

  // buttons useStates
  const [modalVisibleAlert, setModalVisibleAlert] = useState(false);
  const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);

  // forms useStates
  const [textInputName, setTextInputName] = useState('');
  const [textInputStudNum, setTextInputStudNum] = useState('');
  const [textInputCourse, setTextInputCourse] = useState('');
  const [textInputYrSec, setTextInputYrSec] = useState('');
  const [textInputAge, setTextInputAge] = useState('');
  const [textInputBday, setTextInputBday] = useState('');
  const [textInputAdd, setTextInputAdd] = useState('');

  // form func
  const checkTextInput = () => {
    if (!textInputName.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    if (!textInputStudNum.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    if (!textInputCourse.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    if (!textInputYrSec.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    if (!textInputAge.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    if (!textInputBday.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    if (!textInputAdd.trim()) {
      setModalVisibleAlert(!modalVisibleAlert)
      return;
    }

    setModalVisibleSuccess(!modalVisibleSuccess)
  };

  // view
  return (
    <View style={styles.mainContainer}>

      {/* success modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleSuccess}
        onRequestClose={() => {
          setModalVisibleSuccess(!modalVisibleSuccess);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitleSuccess}>SUCCESS</Text>
            <Image style={styles.modalImg} source={require('./assets/check.png')} />
            <Text style={styles.modalTxt}>Your entry has been recorded successfully!</Text>
            <TouchableOpacity onPress={() => setModalVisibleSuccess(!modalVisibleSuccess)} style={styles.modalBtnSuccess}>
              <Text style={styles.modalBtnSuccessTxt}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* alert modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleAlert}
        onRequestClose={() => {
          setModalVisibleAlert(!modalVisibleAlert);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitleAlert}>ALERT</Text>
            <Image style={styles.modalImg} source={require('./assets/alert.png')} />
            <Text style={styles.modalTxt}>Please fill in all input fields.</Text>
            <TouchableOpacity onPress={() => setModalVisibleAlert(!modalVisibleAlert)} style={styles.modalBtnAlert}>
              <Text style={styles.modalBtnAlertTxt}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>Student Information</Text>
      </View>

      {/* form */}
      <View style={styles.formContainer}>
        <Text style={styles.note}>NOTE: Please make sure to fill-up all fields below.</Text>

        {/* name */}
        <View style={styles.field}>
          <Text style={styles.tiTitle}>Name</Text>
          <TextInput
            placeholder="Akaza Donut Rengoku"
            style={styles.fieldPlaceholder}
            mode="outlined"
            onChangeText={(value) => setTextInputName(value)}
            clearButtonMode='always'
          />
        </View>

        {/* stud number */}
        <View style={styles.field}>
          <Text style={styles.tiTitle}>Student Number</Text>
          <TextInput
            placeholder="202212345"
            style={styles.fieldPlaceholder}
            mode="outlined"
            onChangeText={(value) => setTextInputStudNum(value)}
          />
        </View>

        {/* course */}
        <View style={styles.duoFieldContainer}>
          <View style={styles.duoField1}>
            <Text style={styles.tiTitle}>Course</Text>
            <TextInput
              placeholder="BSCS"
              style={styles.fieldPlaceholder}
              mode="outlined"
              onChangeText={(value) => setTextInputCourse(value)}
            />
          </View>

          {/* yrSec */}
          <View style={styles.duoField2}>
            <Text style={styles.tiTitle}>Year & Section</Text>
            <TextInput
              placeholder="1-1"
              style={styles.fieldPlaceholder}
              mode="outlined"
              onChangeText={(value) => setTextInputYrSec(value)}
            />
          </View>
        </View>

        {/* age */}
        <View style={styles.duoFieldContainer}>
          <View style={styles.duoField1}>
            <Text style={styles.tiTitle}>Age</Text>
            <TextInput
              placeholder="18"
              style={styles.fieldPlaceholder}
              mode="outlined"
              onChangeText={(value) => setTextInputAge(value)}
            />
          </View>

          {/* bday */}
          <View style={styles.duoField2}>
            <Text style={styles.tiTitle}>Birthday</Text>
            <TextInput
              placeholder="01/01/1969"
              style={styles.fieldPlaceholder}
              mode="outlined"
              onChangeText={(value) => setTextInputBday(value)}
            />
          </View>
        </View>

        {/* address */}
        <View style={styles.field}>
          <Text style={styles.tiTitle}>Address</Text>
          <TextInput
            placeholder="Tagaytay City"
            style={styles.fieldPlaceholder}
            mode="outlined"
            onChangeText={(value) => setTextInputAdd(value)}
          />
        </View>

        {/* btns */}
        <View style={styles.btns}>

          {/* cancel bts */}
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelBtnTxt}>CANCEL</Text>
          </TouchableOpacity>

          {/* submit btn */}
          <TouchableOpacity style={styles.submitBtn} onPress={checkTextInput}>
            <Text style={styles.submitBtnTxt}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}