import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';

import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';

var whoosh = new Sound('https://zavalabs.com/islamic/pendahuluan.mp3',
  Sound.MAIN_BUNDLE
).release();

var whoosh1 = new Sound('https://zavalabs.com/islamic/Materi%201.mp3',
  Sound.MAIN_BUNDLE
).release();

var whoosh2 = new Sound('https://zavalabs.com/islamic/Materi%201.mp3',
  Sound.MAIN_BUNDLE
).release();

var whoosh3 = new Sound('https://zavalabs.com/islamic/Materi%203.mp3',
  Sound.MAIN_BUNDLE
).release();

var whoosh4 = new Sound('https://zavalabs.com/islamic/Materi%204.mp3',
  Sound.MAIN_BUNDLE
).release();

var whoosh5 = new Sound('https://zavalabs.com/islamic/Materi%205.mp3',
  Sound.MAIN_BUNDLE
).release();

var whoosh6 = new Sound('https://zavalabs.com/islamic/Materi%206.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$7 = new Sound('https://zavalabs.com/islamic/Materi%207.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$8 = new Sound('https://zavalabs.com/islamic/Materi%208.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$9 = new Sound('https://zavalabs.com/islamic/Materi%209.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$10 = new Sound('https://zavalabs.com/islamic/Materi%2010.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$11 = new Sound('https://zavalabs.com/islamic/Materi%2011.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$12 = new Sound('https://zavalabs.com/islamic/Materi%2012.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$13 = new Sound('https://zavalabs.com/islamic/Materi%2013.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$14 = new Sound('https://zavalabs.com/islamic/Materi%2014.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$15 = new Sound('https://zavalabs.com/islamic/Materi%2015.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$16 = new Sound('https://zavalabs.com/islamic/Materi%2016.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$17 = new Sound('https://zavalabs.com/islamic/Materi%2017.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$18 = new Sound('https://zavalabs.com/islamic/Materi%2018.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$19 = new Sound('https://zavalabs.com/islamic/Materi%2019.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$20 = new Sound('https://zavalabs.com/islamic/Materi%2020.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$21 = new Sound('https://zavalabs.com/islamic/Materi%2021.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$22 = new Sound('https://zavalabs.com/islamic/Materi%2022.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$23 = new Sound('https://zavalabs.com/islamic/Materi%2023.mp3', Sound.MAIN_BUNDLE).release();
var whoosh$24 = new Sound('https://zavalabs.com/islamic/Materi%2024.mp3', Sound.MAIN_BUNDLE).release();


export default function Home() {

  const [user, setUser] = useState({});
  // const [play, setPlay] = useState(false);

  const [nol, setNol] = useState({})
  const [$1, set$1] = useState({});
  const [$2, set$2] = useState({});
  const [$3, set$3] = useState({});
  const [$4, set$4] = useState({});
  const [$5, set$5] = useState({});
  const [$6, set$6] = useState({});
  const [$7, set$7] = useState({});
  const [$8, set$8] = useState({});
  const [$9, set$9] = useState({});
  const [$10, set$10] = useState({});
  const [$11, set$11] = useState({});
  const [$12, set$12] = useState({});
  const [$13, set$13] = useState({});
  const [$14, set$14] = useState({});
  const [$15, set$15] = useState({});
  const [$16, set$16] = useState({});
  const [$17, set$17] = useState({});
  const [$18, set$18] = useState({});
  const [$19, set$19] = useState({});
  const [$20, set$20] = useState({});
  const [$21, set$21] = useState({});
  const [$22, set$22] = useState({});
  const [$23, set$23] = useState({});
  const [$24, set$24] = useState({});


  useEffect(() => {
    getData('user').then(res => {
      setUser(res);
    })

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
          nama: 'MATERI 1',
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
          nama: 'MATERI 2',
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
          nama: 'MATERI 3',
          status: 'CLOSE',
        })
      } else {
        set$3($3);
      }

    })

    getData('$4').then($4 => { if (!$4) { storeData('$4', { play: false, url: 'https://zavalabs.com/islamic/Materi%204.mp3', nama: 'MATERI 4', status: 'CLOSE', }) } else { set$4($4); } })
    getData('$5').then($5 => { if (!$5) { storeData('$5', { play: false, url: 'https://zavalabs.com/islamic/Materi%205.mp3', nama: 'MATERI 5', status: 'CLOSE', }) } else { set$5($5); } })
    getData('$6').then($6 => { if (!$6) { storeData('$6', { play: false, url: 'https://zavalabs.com/islamic/Materi%206.mp3', nama: 'MATERI 6', status: 'CLOSE', }) } else { set$6($6); } })
    getData('$7').then($7 => { if (!$7) { storeData('$7', { play: false, url: 'https://zavalabs.com/islamic/Materi%207.mp3', nama: 'MATERI 7', status: 'CLOSE', }) } else { set$7($7); } })
    getData('$8').then($8 => { if (!$8) { storeData('$8', { play: false, url: 'https://zavalabs.com/islamic/Materi%208.mp3', nama: 'MATERI 8', status: 'CLOSE', }) } else { set$8($8); } })
    getData('$9').then($9 => { if (!$9) { storeData('$9', { play: false, url: 'https://zavalabs.com/islamic/Materi%209.mp3', nama: 'MATERI 9', status: 'CLOSE', }) } else { set$9($9); } })
    getData('$10').then($10 => { if (!$10) { storeData('$10', { play: false, url: 'https://zavalabs.com/islamic/Materi%2010.mp3', nama: 'MATERI 10', status: 'CLOSE', }) } else { set$10($10); } })
    getData('$11').then($11 => { if (!$11) { storeData('$11', { play: false, url: 'https://zavalabs.com/islamic/Materi%2011.mp3', nama: 'MATERI 11', status: 'CLOSE', }) } else { set$11($11); } })
    getData('$12').then($12 => { if (!$12) { storeData('$12', { play: false, url: 'https://zavalabs.com/islamic/Materi%2012.mp3', nama: 'MATERI 12', status: 'CLOSE', }) } else { set$12($12); } })
    getData('$13').then($13 => { if (!$13) { storeData('$13', { play: false, url: 'https://zavalabs.com/islamic/Materi%2013.mp3', nama: 'MATERI 13', status: 'CLOSE', }) } else { set$13($13); } })
    getData('$14').then($14 => { if (!$14) { storeData('$14', { play: false, url: 'https://zavalabs.com/islamic/Materi%2014.mp3', nama: 'MATERI 14', status: 'CLOSE', }) } else { set$14($14); } })
    getData('$15').then($15 => { if (!$15) { storeData('$15', { play: false, url: 'https://zavalabs.com/islamic/Materi%2015.mp3', nama: 'MATERI 15', status: 'CLOSE', }) } else { set$15($15); } })
    getData('$16').then($16 => { if (!$16) { storeData('$16', { play: false, url: 'https://zavalabs.com/islamic/Materi%2016.mp3', nama: 'MATERI 16', status: 'CLOSE', }) } else { set$16($16); } })
    getData('$17').then($17 => { if (!$17) { storeData('$17', { play: false, url: 'https://zavalabs.com/islamic/Materi%2017.mp3', nama: 'MATERI 17', status: 'CLOSE', }) } else { set$17($17); } })
    getData('$18').then($18 => { if (!$18) { storeData('$18', { play: false, url: 'https://zavalabs.com/islamic/Materi%2018.mp3', nama: 'MATERI 18', status: 'CLOSE', }) } else { set$18($18); } })
    getData('$19').then($19 => { if (!$19) { storeData('$19', { play: false, url: 'https://zavalabs.com/islamic/Materi%2019.mp3', nama: 'MATERI 19', status: 'CLOSE', }) } else { set$19($19); } })
    getData('$20').then($20 => { if (!$20) { storeData('$20', { play: false, url: 'https://zavalabs.com/islamic/Materi%2020.mp3', nama: 'MATERI 20', status: 'CLOSE', }) } else { set$20($20); } })
    getData('$21').then($21 => { if (!$21) { storeData('$21', { play: false, url: 'https://zavalabs.com/islamic/Materi%2021.mp3', nama: 'MATERI 21', status: 'CLOSE', }) } else { set$21($21); } })
    getData('$22').then($22 => { if (!$22) { storeData('$22', { play: false, url: 'https://zavalabs.com/islamic/Materi%2022.mp3', nama: 'MATERI 22', status: 'CLOSE', }) } else { set$22($22); } })
    getData('$23').then($23 => { if (!$23) { storeData('$23', { play: false, url: 'https://zavalabs.com/islamic/Materi%2023.mp3', nama: 'MATERI 23', status: 'CLOSE', }) } else { set$23($23); } })
    getData('$24').then($24 => { if (!$24) { storeData('$24', { play: false, url: 'https://zavalabs.com/islamic/Materi%2024.mp3', nama: 'MATERI 24', status: 'CLOSE', }) } else { set$24($24); } })



  }, [])





  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: windowWidth / 20,
          color: colors.white
        }}>Asslamu'alikum, {user.username}</Text>
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: windowWidth / 20,
          color: colors.white
        }}>Selamat datang di aplikasi </Text>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: windowWidth / 20,
          color: colors.secondary,
        }}> Find Out Rasulullah Habits</Text>
      </View>
      <ScrollView >
        {/* pendahuluan */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!nol.play) {
              setNol({
                ...nol,
                play: true
              });
              whoosh.play();
            } else {
              setNol({
                ...nol,
                play: false
              })
              whoosh.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: nol.status == "OPEN" ? colors.primary : nol.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={nol.play ? 'pause' : 'play'} type="ionicon" color={nol.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: nol.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {nol.nama}
          </Text>
          {nol.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$1({
                          ...$1,
                          status: 'OPEN'
                        })
                        storeData('$1', {
                          ...$1,
                          status: 'OPEN'
                        })

                        setNol({
                          ...nol,
                          status: 'DONE'
                        })
                        storeData('nol', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/pendahuluan.mp3',
                          nama: 'PENDAHULUAN',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* pendahuluan */}


        {/* materi 1 */}

        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$1.play) {
              set$1({
                ...$1,
                play: true
              });
              whoosh1.play();
            } else {
              set$1({
                ...$1,
                play: false
              })
              whoosh1.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $1.status == "OPEN" ? colors.primary : $1.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$1.play ? 'pause' : 'play'} type="ionicon" color={$1.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $1.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$1.nama}
          </Text>
          {$1.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$2({
                          ...$2,
                          status: 'OPEN'
                        })
                        storeData('$2', {
                          ...$2,
                          status: 'OPEN'
                        })

                        set$1({
                          ...$1,
                          status: 'DONE'
                        })
                        storeData('$1', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%201.mp3',
                          nama: 'MATERI 1',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>


        {/* materi 1 */}

        {/* materi 2 */}

        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$2.play) {
              set$2({
                ...$2,
                play: true
              });
              whoosh2.play();
            } else {
              set$2({
                ...$2,
                play: false
              })
              whoosh2.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $2.status == "OPEN" ? colors.primary : $2.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$2.play ? 'pause' : 'play'} type="ionicon" color={$2.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $2.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$2.nama}
          </Text>
          {$2.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$3({
                          ...$3,
                          status: 'OPEN'
                        })
                        storeData('$3', {
                          ...$3,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$2({
                          ...$2,
                          status: 'DONE'
                        })
                        storeData('$2', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%201.mp3',
                          nama: 'MATERI 2',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi 2 */}


        {/* materi 3 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$3.play) {
              set$3({
                ...$3,
                play: true
              });
              whoosh3.play();
            } else {
              set$3({
                ...$3,
                play: false
              })
              whoosh3.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $3.status == "OPEN" ? colors.primary : $3.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$3.play ? 'pause' : 'play'} type="ionicon" color={$3.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $3.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$3.nama}
          </Text>
          {$3.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$4({
                          ...$4,
                          status: 'OPEN'
                        })
                        storeData('$4', {
                          ...$4,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$3({
                          ...$3,
                          status: 'DONE'
                        })
                        storeData('$3', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%203.mp3',
                          nama: 'MATERI 3',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi 3 */}

        {/* materi 4 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$4.play) {
              set$4({
                ...$4,
                play: true
              });
              whoosh4.play();
            } else {
              set$4({
                ...$4,
                play: false
              })
              whoosh4.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $4.status == "OPEN" ? colors.primary : $4.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$4.play ? 'pause' : 'play'} type="ionicon" color={$4.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $4.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$4.nama}
          </Text>
          {$4.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$5({
                          ...$5,
                          status: 'OPEN'
                        })
                        storeData('$5', {
                          ...$5,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$4({
                          ...$4,
                          status: 'DONE'
                        })
                        storeData('$4', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%204.mp3',
                          nama: 'MATERI 4',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi 4*/}

        {/* materi 5 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$5.play) {
              set$5({
                ...$5,
                play: true
              });
              whoosh5.play();
            } else {
              set$5({
                ...$5,
                play: false
              })
              whoosh5.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $5.status == "OPEN" ? colors.primary : $5.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$5.play ? 'pause' : 'play'} type="ionicon" color={$5.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $5.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$5.nama}
          </Text>
          {$5.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$6({
                          ...$6,
                          status: 'OPEN'
                        })
                        storeData('$6', {
                          ...$6,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$5({
                          ...$5,
                          status: 'DONE'
                        })
                        storeData('$5', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%205.mp3',
                          nama: 'MATERI 5',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi 5*/}

        {/* materi $6 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$6.play) {
              set$6({
                ...$6,
                play: true
              });
              whoosh6.play();
            } else {
              set$6({
                ...$6,
                play: false
              })
              whoosh6.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $6.status == "OPEN" ? colors.primary : $6.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$6.play ? 'pause' : 'play'} type="ionicon" color={$6.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $6.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$6.nama}
          </Text>
          {$6.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$7({
                          ...$7,
                          status: 'OPEN'
                        })
                        storeData('$7', {
                          ...$7,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$6({
                          ...$6,
                          status: 'DONE'
                        })
                        storeData('$6', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%206.mp3',
                          nama: 'MATERI 6',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $6*/}

        {/* materi $7 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$7.play) {
              set$7({
                ...$7,
                play: true
              });
              whoosh$7.play();
            } else {
              set$7({
                ...$7,
                play: false
              })
              whoosh$7.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $7.status == "OPEN" ? colors.primary : $7.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$7.play ? 'pause' : 'play'} type="ionicon" color={$7.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $7.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$7.nama}
          </Text>
          {$7.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$8({
                          ...$8,
                          status: 'OPEN'
                        })
                        storeData('$8', {
                          ...$8,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$7({
                          ...$7,
                          status: 'DONE'
                        })
                        storeData('$7', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%207.mp3',
                          nama: 'MATERI 7',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $7*/}

        {/* materi $8 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$8.play) {
              set$8({
                ...$8,
                play: true
              });
              whoosh$8.play();
            } else {
              set$8({
                ...$8,
                play: false
              })
              whoosh$8.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $8.status == "OPEN" ? colors.primary : $8.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$8.play ? 'pause' : 'play'} type="ionicon" color={$8.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $8.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$8.nama}
          </Text>
          {$8.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$9({
                          ...$9,
                          status: 'OPEN'
                        })
                        storeData('$9', {
                          ...$9,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$8({
                          ...$8,
                          status: 'DONE'
                        })
                        storeData('$8', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%208.mp3',
                          nama: 'MATERI 8',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $8*/}

        {/* materi $9 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$9.play) {
              set$9({
                ...$9,
                play: true
              });
              whoosh$9.play();
            } else {
              set$9({
                ...$9,
                play: false
              })
              whoosh$9.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $9.status == "OPEN" ? colors.primary : $9.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$9.play ? 'pause' : 'play'} type="ionicon" color={$9.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $9.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$9.nama}
          </Text>
          {$9.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$10({
                          ...$10,
                          status: 'OPEN'
                        })
                        storeData('$10', {
                          ...$10,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$9({
                          ...$9,
                          status: 'DONE'
                        })
                        storeData('$9', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%209.mp3',
                          nama: 'MATERI 9',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $9*/}
        {/* materi $10 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$10.play) {
              set$10({
                ...$10,
                play: true
              });
              whoosh$10.play();
            } else {
              set$10({
                ...$10,
                play: false
              })
              whoosh$10.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $10.status == "OPEN" ? colors.primary : $10.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$10.play ? 'pause' : 'play'} type="ionicon" color={$10.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $10.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$10.nama}
          </Text>
          {$10.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$11({
                          ...$11,
                          status: 'OPEN'
                        })
                        storeData('$11', {
                          ...$11,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$10({
                          ...$10,
                          status: 'DONE'
                        })
                        storeData('$10', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2010.mp3',
                          nama: 'MATERI 10',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $10*/}
        {/* materi $11 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$11.play) {
              set$11({
                ...$11,
                play: true
              });
              whoosh$11.play();
            } else {
              set$11({
                ...$11,
                play: false
              })
              whoosh$11.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $11.status == "OPEN" ? colors.primary : $11.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$11.play ? 'pause' : 'play'} type="ionicon" color={$11.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $11.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$11.nama}
          </Text>
          {$11.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$12({
                          ...$12,
                          status: 'OPEN'
                        })
                        storeData('$12', {
                          ...$12,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$11({
                          ...$11,
                          status: 'DONE'
                        })
                        storeData('$11', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2011.mp3',
                          nama: 'MATERI 11',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $11*/}

        {/* materi $12 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$12.play) {
              set$12({
                ...$12,
                play: true
              });
              whoosh$12.play();
            } else {
              set$12({
                ...$12,
                play: false
              })
              whoosh$12.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $12.status == "OPEN" ? colors.primary : $12.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$12.play ? 'pause' : 'play'} type="ionicon" color={$12.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $12.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$12.nama}
          </Text>
          {$12.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$13({
                          ...$13,
                          status: 'OPEN'
                        })
                        storeData('$13', {
                          ...$13,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$12({
                          ...$12,
                          status: 'DONE'
                        })
                        storeData('$12', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2012.mp3',
                          nama: 'MATERI 12',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $12*/}

        {/* materi $13 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$13.play) {
              set$13({
                ...$13,
                play: true
              });
              whoosh$13.play();
            } else {
              set$13({
                ...$13,
                play: false
              })
              whoosh$13.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $13.status == "OPEN" ? colors.primary : $13.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$13.play ? 'pause' : 'play'} type="ionicon" color={$13.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $13.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$13.nama}
          </Text>
          {$13.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$14({
                          ...$14,
                          status: 'OPEN'
                        })
                        storeData('$14', {
                          ...$14,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$13({
                          ...$13,
                          status: 'DONE'
                        })
                        storeData('$13', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2013.mp3',
                          nama: 'MATERI 13',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $13*/}
        {/* materi $14 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$14.play) {
              set$14({
                ...$14,
                play: true
              });
              whoosh$14.play();
            } else {
              set$14({
                ...$14,
                play: false
              })
              whoosh$14.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $14.status == "OPEN" ? colors.primary : $14.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$14.play ? 'pause' : 'play'} type="ionicon" color={$14.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $14.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$14.nama}
          </Text>
          {$14.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$15({
                          ...$15,
                          status: 'OPEN'
                        })
                        storeData('$15', {
                          ...$15,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$14({
                          ...$14,
                          status: 'DONE'
                        })
                        storeData('$14', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2014.mp3',
                          nama: 'MATERI 14',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $14*/}
        {/* materi $15 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$15.play) {
              set$15({
                ...$15,
                play: true
              });
              whoosh$15.play();
            } else {
              set$15({
                ...$15,
                play: false
              })
              whoosh$15.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $15.status == "OPEN" ? colors.primary : $15.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$15.play ? 'pause' : 'play'} type="ionicon" color={$15.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $15.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$15.nama}
          </Text>
          {$15.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$16({
                          ...$16,
                          status: 'OPEN'
                        })
                        storeData('$16', {
                          ...$16,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$15({
                          ...$15,
                          status: 'DONE'
                        })
                        storeData('$15', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2015.mp3',
                          nama: 'MATERI 15',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $15*/}
        {/* materi $16 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$16.play) {
              set$16({
                ...$16,
                play: true
              });
              whoosh$16.play();
            } else {
              set$16({
                ...$16,
                play: false
              })
              whoosh$16.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $16.status == "OPEN" ? colors.primary : $16.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$16.play ? 'pause' : 'play'} type="ionicon" color={$16.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $16.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$16.nama}
          </Text>
          {$16.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$17({
                          ...$17,
                          status: 'OPEN'
                        })
                        storeData('$17', {
                          ...$17,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$16({
                          ...$16,
                          status: 'DONE'
                        })
                        storeData('$16', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2016.mp3',
                          nama: 'MATERI 16',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $16*/}
        {/* materi $17 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$17.play) {
              set$17({
                ...$17,
                play: true
              });
              whoosh$17.play();
            } else {
              set$17({
                ...$17,
                play: false
              })
              whoosh$17.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $17.status == "OPEN" ? colors.primary : $17.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$17.play ? 'pause' : 'play'} type="ionicon" color={$17.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $17.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$17.nama}
          </Text>
          {$17.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$18({
                          ...$18,
                          status: 'OPEN'
                        })
                        storeData('$18', {
                          ...$18,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$17({
                          ...$17,
                          status: 'DONE'
                        })
                        storeData('$17', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2017.mp3',
                          nama: 'MATERI 17',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $17*/}
        {/* materi $18 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$18.play) {
              set$18({
                ...$18,
                play: true
              });
              whoosh$18.play();
            } else {
              set$18({
                ...$18,
                play: false
              })
              whoosh$18.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $18.status == "OPEN" ? colors.primary : $18.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$18.play ? 'pause' : 'play'} type="ionicon" color={$18.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $18.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$18.nama}
          </Text>
          {$18.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$19({
                          ...$19,
                          status: 'OPEN'
                        })
                        storeData('$19', {
                          ...$19,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$18({
                          ...$18,
                          status: 'DONE'
                        })
                        storeData('$18', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2018.mp3',
                          nama: 'MATERI 18',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $18*/}

        {/* materi $19 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$19.play) {
              set$19({
                ...$19,
                play: true
              });
              whoosh$19.play();
            } else {
              set$19({
                ...$19,
                play: false
              })
              whoosh$19.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $19.status == "OPEN" ? colors.primary : $19.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$19.play ? 'pause' : 'play'} type="ionicon" color={$19.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $19.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$19.nama}
          </Text>
          {$19.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$20({
                          ...$20,
                          status: 'OPEN'
                        })
                        storeData('$20', {
                          ...$20,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$19({
                          ...$19,
                          status: 'DONE'
                        })
                        storeData('$19', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2019.mp3',
                          nama: 'MATERI 19',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $19*/}

        {/* materi $20 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$20.play) {
              set$20({
                ...$20,
                play: true
              });
              whoosh$20.play();
            } else {
              set$20({
                ...$20,
                play: false
              })
              whoosh$20.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $20.status == "OPEN" ? colors.primary : $20.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$20.play ? 'pause' : 'play'} type="ionicon" color={$20.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $20.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$20.nama}
          </Text>
          {$20.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$21({
                          ...$21,
                          status: 'OPEN'
                        })
                        storeData('$21', {
                          ...$21,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$20({
                          ...$20,
                          status: 'DONE'
                        })
                        storeData('$20', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2020.mp3',
                          nama: 'MATERI 20',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $20*/}
        {/* materi $21 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$21.play) {
              set$21({
                ...$21,
                play: true
              });
              whoosh$21.play();
            } else {
              set$21({
                ...$21,
                play: false
              })
              whoosh$21.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $21.status == "OPEN" ? colors.primary : $21.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$21.play ? 'pause' : 'play'} type="ionicon" color={$21.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $21.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$21.nama}
          </Text>
          {$21.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$22({
                          ...$22,
                          status: 'OPEN'
                        })
                        storeData('$22', {
                          ...$22,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$21({
                          ...$21,
                          status: 'DONE'
                        })
                        storeData('$21', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2021.mp3',
                          nama: 'MATERI 21',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $21*/}
        {/* materi $22 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$22.play) {
              set$22({
                ...$22,
                play: true
              });
              whoosh$22.play();
            } else {
              set$22({
                ...$22,
                play: false
              })
              whoosh$22.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $22.status == "OPEN" ? colors.primary : $22.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$22.play ? 'pause' : 'play'} type="ionicon" color={$22.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $22.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$22.nama}
          </Text>
          {$22.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$23({
                          ...$23,
                          status: 'OPEN'
                        })
                        storeData('$23', {
                          ...$23,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$22({
                          ...$22,
                          status: 'DONE'
                        })
                        storeData('$22', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2022.mp3',
                          nama: 'MATERI 22',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $22*/}
        {/* materi $23 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$23.play) {
              set$23({
                ...$23,
                play: true
              });
              whoosh$23.play();
            } else {
              set$23({
                ...$23,
                play: false
              })
              whoosh$23.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $23.status == "OPEN" ? colors.primary : $23.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$23.play ? 'pause' : 'play'} type="ionicon" color={$23.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $23.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$23.nama}
          </Text>
          {$23.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {
                        set$24({
                          ...$24,
                          status: 'OPEN'
                        })
                        storeData('$24', {
                          ...$24,
                          status: 'OPEN'
                        })
                        //   untuk jenis yang next nya 

                        set$23({
                          ...$23,
                          status: 'DONE'
                        })
                        storeData('$23', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2023.mp3',
                          nama: 'MATERI 23',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $23*/}
        {/* materi $24 */}
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD'

        }}>
          <TouchableOpacity onPress={() => {
            if (!$24.play) {
              set$24({
                ...$24,
                play: true
              });
              whoosh$24.play();
            } else {
              set$24({
                ...$24,
                play: false
              })
              whoosh$24.pause();
            }
          }} style={{
            padding: 10,
            backgroundColor: $24.status == "OPEN" ? colors.primary : $24.status == "DONE" ? colors.success : 'gray',
            borderRadius: 10,
            width: 60,
          }}>
            <Icon name={$24.play ? 'pause' : 'play'} type="ionicon" color={$24.status == "OPEN" ? colors.secondary : 'white'} />
          </TouchableOpacity>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: $24.status == "OPEN" ? colors.primary : 'gray',
            flex: 1,
            marginLeft: 10,
          }}>
            {$24.nama}
          </Text>
          {$24.status == "OPEN" &&
            <TouchableOpacity style={{
              padding: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
            }}>

              <Text onPress={() => {
                Alert.alert(
                  "Alhamdulillah",
                  "Saya sudah mendengarkan materi ini, insyaAllah siap menerima materi berikutnya",
                  [
                    {
                      text: "TIDAK",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "YA", onPress: () => {

                        //   untuk jenis yang next nya 

                        set$24({
                          ...$24,
                          status: 'DONE'
                        })
                        storeData('$24', {
                          play: false,
                          url: 'https://zavalabs.com/islamic/Materi%2024.mp3',
                          nama: 'MATERI 24',
                          status: 'DONE',
                        })

                      }
                    }
                  ]
                );
              }} style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary
              }}>Selesai</Text>
            </TouchableOpacity>
          }
        </View>
        {/* materi $24*/}

      </ScrollView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({})