import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {
  const top = new Animated.Value(0.3);

  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(top, {
          toValue: 0.3,
          duration: 1000,
        }),
      ]),
      {
        iterations: 1,
      },
    ).start();
  };



  useEffect(() => {
    animasi();

    getData('nol').then(n => {
      if (!n) {
        storeData('nol', {
          play: false,
          url: 'https://zavalabs.com/islamic/pendahuluan.mp3',
          nama: 'PENDAHULUAN',
          status: 'OPEN',
        })
      } else {
        setNol(n);
      }
    })


    getData('$1').then($1 => {

      if (!$1) {
        storeData('$1', {
          play: false,
          url: 'https://zavalabs.com/islamic/Materi%201.mp3',
          nama: 'JAM 01',
          status: 'CLOSE',
        })
      } else {
        set$1($1);
      }

    })


    getData('$2').then($2 => {

      if (!$2) {
        storeData('$2', {
          play: false,
          url: 'https://zavalabs.com/islamic/Materi%201.mp3',
          nama: 'JAM 02',
          status: 'CLOSE',
        })
      } else {
        set$2($2);
      }

    })

    getData('$3').then($3 => {

      if (!$3) {
        storeData('$3', {
          play: false,
          url: 'https://zavalabs.com/islamic/Materi%203.mp3',
          nama: 'JAM 03',
          status: 'CLOSE',
        })
      } else {
        set$3($3);
      }

    })

    getData('$4').then($4 => { if (!$4) { storeData('$4', { play: false, url: 'https://zavalabs.com/islamic/Materi%204.mp3', nama: 'JAM 04', status: 'CLOSE', }) } else { set$4($4); } })
    getData('$5').then($5 => { if (!$5) { storeData('$5', { play: false, url: 'https://zavalabs.com/islamic/Materi%205.mp3', nama: 'JAM 05', status: 'CLOSE', }) } else { set$5($5); } })
    getData('$6').then($6 => { if (!$6) { storeData('$6', { play: false, url: 'https://zavalabs.com/islamic/Materi%206.mp3', nama: 'JAM 06', status: 'CLOSE', }) } else { set$6($6); } })
    getData('$7').then($7 => { if (!$7) { storeData('$7', { play: false, url: 'https://zavalabs.com/islamic/Materi%207.mp3', nama: 'JAM 07', status: 'CLOSE', }) } else { set$7($7); } })
    getData('$8').then($8 => { if (!$8) { storeData('$8', { play: false, url: 'https://zavalabs.com/islamic/Materi%208.mp3', nama: 'JAM 08', status: 'CLOSE', }) } else { set$8($8); } })
    getData('$9').then($9 => { if (!$9) { storeData('$9', { play: false, url: 'https://zavalabs.com/islamic/Materi%209.mp3', nama: 'JAM 09', status: 'CLOSE', }) } else { set$9($9); } })
    getData('$10').then($10 => { if (!$10) { storeData('$10', { play: false, url: 'https://zavalabs.com/islamic/Materi%2010.mp3', nama: 'JAM 10', status: 'CLOSE', }) } else { set$10($10); } })
    getData('$11').then($11 => { if (!$11) { storeData('$11', { play: false, url: 'https://zavalabs.com/islamic/Materi%2011.mp3', nama: 'JAM 11', status: 'CLOSE', }) } else { set$11($11); } })
    getData('$12').then($12 => { if (!$12) { storeData('$12', { play: false, url: 'https://zavalabs.com/islamic/Materi%2012.mp3', nama: 'JAM 12', status: 'CLOSE', }) } else { set$12($12); } })
    getData('$13').then($13 => { if (!$13) { storeData('$13', { play: false, url: 'https://zavalabs.com/islamic/Materi%2013.mp3', nama: 'JAM 13', status: 'CLOSE', }) } else { set$13($13); } })
    getData('$14').then($14 => { if (!$14) { storeData('$14', { play: false, url: 'https://zavalabs.com/islamic/Materi%2014.mp3', nama: 'JAM 14', status: 'CLOSE', }) } else { set$14($14); } })
    getData('$15').then($15 => { if (!$15) { storeData('$15', { play: false, url: 'https://zavalabs.com/islamic/Materi%2015.mp3', nama: 'JAM 15', status: 'CLOSE', }) } else { set$15($15); } })
    getData('$16').then($16 => { if (!$16) { storeData('$16', { play: false, url: 'https://zavalabs.com/islamic/Materi%2016.mp3', nama: 'JAM 16', status: 'CLOSE', }) } else { set$16($16); } })
    getData('$17').then($17 => { if (!$17) { storeData('$17', { play: false, url: 'https://zavalabs.com/islamic/Materi%2017.mp3', nama: 'JAM 17', status: 'CLOSE', }) } else { set$17($17); } })
    getData('$18').then($18 => { if (!$18) { storeData('$18', { play: false, url: 'https://zavalabs.com/islamic/Materi%2018.mp3', nama: 'JAM 18', status: 'CLOSE', }) } else { set$18($18); } })
    getData('$19').then($19 => { if (!$19) { storeData('$19', { play: false, url: 'https://zavalabs.com/islamic/Materi%2019.mp3', nama: 'JAM 19', status: 'CLOSE', }) } else { set$19($19); } })
    getData('$20').then($20 => { if (!$20) { storeData('$20', { play: false, url: 'https://zavalabs.com/islamic/Materi%2020.mp3', nama: 'JAM 20', status: 'CLOSE', }) } else { set$20($20); } })
    getData('$21').then($21 => { if (!$21) { storeData('$21', { play: false, url: 'https://zavalabs.com/islamic/Materi%2021.mp3', nama: 'JAM 21', status: 'CLOSE', }) } else { set$21($21); } })
    getData('$22').then($22 => { if (!$22) { storeData('$22', { play: false, url: 'https://zavalabs.com/islamic/Materi%2022.mp3', nama: 'JAM 22', status: 'CLOSE', }) } else { set$22($22); } })
    getData('$23').then($23 => { if (!$23) { storeData('$23', { play: false, url: 'https://zavalabs.com/islamic/Materi%2023.mp3', nama: 'JAM 23', status: 'CLOSE', }) } else { set$23($23); } })
    getData('$24').then($24 => { if (!$24) { storeData('$24', { play: false, url: 'https://zavalabs.com/islamic/Materi%2024.mp3', nama: 'JAM 24', status: 'CLOSE', }) } else { set$24($24); } })



    const unsubscribe = getData('user').then(res => {
      // console.log(res);
      if (!res) {
        // console.log('beum login');

        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      } else {
        console.log('sudah login logon');

        setTimeout(() => {
          navigation.replace('Home');
        }, 1500);
      }
    });
  }, []);


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      <Image
        source={require('../../assets/splash.png')}
        style={
          {
            width: windowWidth,
            height: windowHeight,
            // aspectRatio: 0.2,
            resizeMode: "contain"
          }

        }
      />

    </View>
  );
}

const styles = StyleSheet.create({});
