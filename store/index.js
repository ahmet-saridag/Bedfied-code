import Vuex from "vuex";
import axios from 'axios';
import Cookie from "js-cookie"

const createStore = () => {
    return new Vuex.Store({
        state: {
            homesData: [],
            authKey: null,
            status: null,
            profileDATA: [],
            hostNotData: [],
            guestNotData: [],
        },


        mutations: {
            setAuthKey(state, authKey) {
                state.authKey = authKey
            },
            setHomesData(state, homesData) {
                state.homesData = homesData
            },
            setAuthKey(state, authKey) {
                state.authKey = authKey
            },
            rezervationsData(state, rezerData) {
                state.rezervationData.push(rezerData)
            },
            clearAuthKey(state) {
                Cookie.remove('authKey')
                Cookie.remove('expiresIn')
                if (process.client) {
                    localStorage.removeItem('authKey')
                    localStorage.removeItem('expiresIn')
                }
                state.authKey = null
            }
        },
        actions: {
            nuxtServerInit(vuexContext) {
                return axios.get('https://munhasir-ad882-default-rtdb.firebaseio.com/homeData.json')
                    .then(res => {
                        let data = res.data;
                        let homeArray = [];
                        for (let key in data) {
                            homeArray.push({ firebaseId: key, ...data[key] })
                        }
                        vuexContext.commit('setHomesData', homeArray)
                    })
            },
            addNewHomeData(vuexContext, homeData) {
                return axios.post('https://munhasir-ad882-default-rtdb.firebaseio.com/homeData.json', { authId: vuexContext.state.authKey, ...homeData })
                    .then(res => { })
            },
            ubdateHome(vuexContext, ubdateHomeData) {
                return axios.put('https://munhasir-ad882-default-rtdb.firebaseio.com/homeData/' + ubdateHomeData.firebaseId + '.json', { ...ubdateHomeData, authId: vuexContext.state.authKey })
                    .then(res => {
                        // console.log(res)
                    })
            },
            initAuth(vuexContext, req) {
                let token;
                let expiresIn;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }
                    token = req.headers.cookie.split(';').find(c => c.trim().startsWith('authKey='))
                    if (token) {
                        token = token.split('=')[1]
                    }
                    expiresIn = req.headers.cookie.split(';').find(s => s.trim().startsWith('expiresIn='))
                    if (expiresIn) {
                        expiresIn = expiresIn.split('=')[1]
                    }


                    // Serverı cookie set edicek
                }
                else {
                    token = localStorage.getItem('authKey')
                    expiresIn = localStorage.getItem('expiresIn')
                    if (new Date().getTime() > +expiresIn || !token) {
                        vuexContext.commit('clearAuthKey')
                    }
                    // Client'ı localStorage set edicek
                }
                vuexContext.commit('setAuthKey', token)
            },
            newUser(vuexContext, authData) {
                let authLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
                if (authData.isUser) {
                    authLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
                }
                let firebaseApi = 'AIzaSyDKkrAWf3z0wEdwZDgomcPxoQyx0Q9P5fU'
                return axios.post(authLink + firebaseApi,
                    { email: authData.user.email, password: authData.user.password, returnSecureToken: true })
                    .then(res => {
                         let expiresIn = new Date().getTime()  + 31556926000  // 1 yıl 
                        vuexContext.commit('setAuthKey', res.data.localId)
                        Cookie.set('authKey', res.data.localId)
                        Cookie.set('expiresIn', expiresIn)
                        localStorage.setItem('expiresIn', expiresIn)
                        localStorage.setItem('authKey', res.data.localId)
                        if (!authData.isUser) {
                            axios.post('https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA.json', {
                                email: res.data.email,
                                authId: res.data.localId,
                                profileImage: authData.user.profileImage,
                                fullName: authData.user.fullName
                            })
                        }
                    })
                    .catch(e => {
                        if (e) {
                            vuexContext.state.status = 400
                            setTimeout(() => {
                                vuexContext.state.status = null
                            }, 3500)
                        }
                    })
            },
            ubdateUserProfiles(vuexContext, ubdateData) {
                return axios.put('https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA/' + ubdateData.firebaseId + '/.json', ubdateData.user)
                    .then(res => {
                        console.log(res)
                    }).catch((err) => {
                        console.log(err.message);
                    });
            },
            rezervationData(vuexContext, rezerData) {
                return axios.post('https://munhasir-ad882-default-rtdb.firebaseio.com/travelData.json', rezerData)
                    .then(res => {
                        //   console.log(res)
                    })
            },
            sendMessage(vuexContext, message) {
                if (message == null) {
                    return;
                } else {
                    this.$fire.firestore.collection('chat').add({

                        message: message,
                        messageId: vuexContext.state.authKey,
                        createAt: new Date(),
                        ay: new Date().getMonth(),
                        dakika: new Date().getMinutes(),
                        gün: new Date().getDate(),
                        saat: new Date().getHours(),
                        yıl: new Date().getFullYear(),

                    })
                }
            },
            addNewChat(vuexContext, chatData) {
                //     hostProfile:this.userProfileData , // Ev sahibi profil bilgisi,
                // authId:this.$store.state.authKey, // Rezervasyonu oluşturan kişi
                // messagesData:this.sendTravelModeDetails.travelsMessage,
                let ref = this.$fire.firestore.collection(chatData.authId).doc(chatData.hostProfile.authId)
                ref.set(chatData)
                ref.collection('chat').add({
                    message: chatData.messageTravel,
                    messageId: vuexContext.state.authKey,
                    createAt: new Date(),
                    ay: new Date().getMonth(),
                    dakika: new Date().getMinutes(),
                    gün: new Date().getDate(),
                    saat: new Date().getHours(),
                    yıl: new Date().getFullYear(),

                })
            },
            logout(vuexContext) {
                vuexContext.commit('clearAuthKey')
            },
            notification(vuexContext, data) {
                switch (data.month) {
                    case 1:
                        data.month = "Ocak";
                        break;
                    case 2:
                        data.month = "Şubat";
                        break;
                    case 3:
                        data.month = "Mart";
                        break;
                    case 4:
                        data.month = "Nisan";
                        break;
                    case 5:
                        data.month = "Mayıs";
                        break;
                    case 6:
                        data.month = "Haziran";
                        break;
                    case 7:
                        data.month = "Temmuz";
                        break;
                    case 8:
                        data.month = "Ağustos";
                        break;
                    case 9:
                        data.month = "Eylül";
                        break;
                    case 10:
                        data.month = "Ekim";
                        break;
                    case 11:
                        data.month = "Kasım";
                        break;
                    case 12:
                        data.month = "Aralık";
                        break;
                }
                switch (data.weekDay) {
                    case 0:
                        data.weekDay = "Pazar";
                        break;
                    case 1:
                        data.weekDay = "Pazartesi";
                        break;
                    case 2:
                        data.weekDay = "Salı";
                        break;
                    case 3:
                        data.weekDay = "Çarşamba";
                        break;
                    case 4:
                        data.weekDay = "Perşembe";
                        break;
                    case 5:
                        data.weekDay = "Cuma";
                        break;
                    case 6:
                        data.weekDay = "Cumartesi";
                }
                let ref = this.$fire.firestore.collection('notification').doc(data.guestId)
                ref.collection('homes').doc(data.homeDataFirebaseId).set(data)
            },
            notificationValue(vuexContext , valueData){
              let ref =  this.$fire.firestore.collection('notificationValue').doc(valueData.guestId).collection('hostId')
              ref.add(valueData)
              ref.doc(valueData.hostId).collection('hostData').doc(valueData.hostId).set(valueData)
            }
        },
        getters: {
            isAuthenticated(state) {
                return state.authKey != null
            },
            getHomesData(state) {
                return state.homesData
            },
        },

    })
}

export default createStore