import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { fonts, windowWidth, colors } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { storeData } from '../../utils/localStorage';


export default function ({ navigation }) {

  const [kirim, setKirim] = useState({
    username: null,
    password: null
  });
  const [loading, setLoading] = useState(false);



  const masuk = () => {


    if (kirim.username == null && kirim.password == null) {
      alert('username dan Passwoord tidak boleh kosong !');
    } else if (kirim.username == null) {
      alert('username tidak boleh kosong !');
    } else if (kirim.password == null) {
      alert('Passwoord tidak boleh kosong !');
    } else {


      // post API

      setLoading(true);

      console.log(kirim);



      if (kirim.password !== '571') {

        setTimeout(() => {
          setLoading(false);
          alert('Maaf Pasword Anda Salah !');
        }, 1200)



      } else {
        // alert('success');
        storeData('user', {
          username: kirim.username
        });

        setTimeout(() => {
          navigation.replace('Home')
        }, 800)

      }


    }




  }

  return (
    <ScrollView style={{ padding: 10, flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingTop: 50 }}>
        <Text style={{
          fontSize: windowWidth / 20,
          fontFamily: fonts.primary[400],
          textAlign: 'center',
          color: colors.primary
        }}>Kajian online ini tidak dikenakan biaya apapun. Jika Anda belum memiliki password, silakan menghubungi admin yang akan membantu Anda mendapatkannya secara gratis.</Text>


      </View>
      <MyGap jarak={40} />
      <View style={{ padding: 10, marginVertical: 10, flex: 1 }}>
        <MyInput label="username" onChangeText={val => setKirim({
          ...kirim,
          username: val
        })}


          iconname="card" placeholder="Masukan username Anda" />
        <MyGap jarak={20} />
        <MyInput
          onChangeText={val => setKirim({
            ...kirim,
            password: val
          })}
          secureTextEntry={true}
          label="Password"
          iconname="key"
          placeholder="Masukan password Anda"
        />
        <MyGap jarak={40} />
        {!loading && <MyButton
          onPress={masuk}
          title="LOGIN SEKARANG"
          warna={colors.primary}
          Icons="log-in-outline"
        />}
      </View>
      {loading && <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
