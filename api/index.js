
import express from 'express';
import { json } from 'body-parser';
import nodemailer from 'nodemailer';
var Iyzipay = require('iyzipay');
const app = express();
app.use(json())


var iyzipay = new Iyzipay({
  apiKey: 'sandbox-8SZWtdSzwBlOY3PCqwdC5G9tiunO3K9N',
  secretKey: 'sandbox-3ga4qSLkbljJtmFGt2ZfgY3W6IyTQkBT',
  uri: 'https://sandbox-api.iyzipay.com'
});

/*   Ev sahibi kredi kartı bilgilerini kayıt etme dönen değeri */
app.post('/addHostCard', (req, res) => {
  iyzipay.subMerchant.create({
    name: req.body.name,
    locale: Iyzipay.LOCALE.TR,
    subMerchantExternalId: req.body.authId + 'asd',
    subMerchantType: Iyzipay.SUB_MERCHANT_TYPE.PRIVATE_COMPANY,
    address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
    taxOffice: 'Tax officesd',
    legalCompanyTitle: req.body.name + ' inc',
    email: req.body.email,
    gsmNumber: '+905372320235',
    name: 'Ev sahibi : ' + req.body.name,
    iban: req.body.iban,
    identityNumber: '313008647265',
    currency: Iyzipay.CURRENCY.TRY
  }, function (err, result) {
    res.status(200).json({
      data: result,
    })
  });
})
/*  bitiş  Ev sahibi kredi kartı bilgilerini kayıt etme dönen değeri kullanman gerekiyor  */

/* Ev sahibi kartını güncelle */
app.post('/ubdateHostCard', (req, res) => {
  iyzipay.subMerchant.update({
    name: req.body.name,
    locale: Iyzipay.LOCALE.TR,
    subMerchantKey: req.body.subMerchantKey,
    address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
    taxOffice: 'Tax officesd',
    legalCompanyTitle: req.body.name + ' inc',
    email: req.body.email,
    gsmNumber: '+905372320235',
    name: 'Ev sahibi : ' + req.body.name,
    iban: req.body.iban,
    identityNumber: '313008647265',
    currency: Iyzipay.CURRENCY.TRY,


  }, function (err, result) {
    res.status(200).json({
      data: result,
    })
  });
})
/* Ev sahibi kartını güncelle bitiş */

//    Misafir kart saklama
app.post('/addGuestCard', (req, res) => {
  iyzipay.card.create({
    locale: Iyzipay.LOCALE.TR,
    email: req.body.email,
    externalId: req.body.authId, // authId
    card: {
      cardAlias: req.body.cardHolderName,
      cardHolderName: req.body.cardHolderName,
      cardNumber: req.body.cardNumber,
      expireMonth: req.body.mm,
      expireYear: req.body.yy
    }
  }, function (err, result) {
    res.status(200).json({
      err,
      result
    })
  });
})
//  Misafir kart saklama bitiş

/*   Misafir kartını sil    */
app.post('/removeGuestCard', (req, res) => {
  console.log(req.body);
  iyzipay.cardList.retrieve({
    locale: Iyzipay.LOCALE.TR,
    conversationId: '123456789',
    cardUserKey: req.body.cardUserKey
  }, function (err, result) {
    res.status(200).json({
      err,
      result
    })
    console.log(result);
  });
})
/*   Misafir kartını sil bitiş   */

/*    Api ile ödeme   */

app.post('/payWithApi', (req, res) => {
  var data = req.body;
  var request = {
    price: data.price,
    paidPrice: data.paidPrice,
    currency: Iyzipay.CURRENCY.TRY,
    installment: '1',
    basketId: data.guestId,
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardHolderName: data.paymentCard.cardHolderName,
      cardNumber: data.paymentCard.cardNumber,
      expireMonth: data.paymentCard.expireMonth,
      expireYear: data.paymentCard.expireYear,
      cvc: data.paymentCard.cvc,
      registerCard: data.paymentCard.registerCard
    },
    buyer: {
      id: data.hostData.id,
      name: data.hostData.name,
      surname: data.hostData.surname,
      email: data.hostData.email,
      identityNumber: '74300864791',
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      ip: '85.34.78.112',
      city: 'Istanbul',
      country: 'Turkey',
    },
    shippingAddress: {
      contactName: 'Bedfied',
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
    },
    billingAddress: {
      contactName: 'Bedfied',
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
    },
    basketItems: [
      {
        id: data.basketItems.id,
        name: data.basketItems.name,
        category1: 'HostRezerveHome',
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: data.basketItems.price,
        subMerchantKey: data.basketItems.subMerchantKey,
        subMerchantPrice: data.basketItems.subMerchantPrice,
      },
    ]
  };
  iyzipay.payment.create(request, function (err, result) {
    res.status(200).json({
      result,
      err
    })
  });
})
/*    Api ile ödeme  bitiş  */

/*  Saklı kart ile ödeme  */
app.post('/payWithHaveCard', (req, res) => {
  var data = req.body;
  var request = {
    price: data.price,
    paidPrice: data.paidPrice,
    currency: Iyzipay.CURRENCY.TRY,
    installment: '1',
    basketId: data.guestId,
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardUserKey: data.paymentCard.cardUserKey,
      cardToken: data.paymentCard.cardToken
    },
    buyer: {
      id: data.hostData.id,
      name: data.hostData.name,
      surname: data.hostData.surname,
      email: data.hostData.email,
      identityNumber: '74300864791',
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      ip: '85.34.78.112',
      city: 'Istanbul',
      country: 'Turkey',
    },
    shippingAddress: {
      contactName: 'Bedfied',
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
    },
    billingAddress: {
      contactName: 'Bedfied',
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
    },
    basketItems: [
      {
        id: data.basketItems.id,
        name: data.basketItems.name,
        category1: 'HostRezerveHome',
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: data.basketItems.price,
        subMerchantKey: data.basketItems.subMerchantKey,
        subMerchantPrice: data.basketItems.subMerchantPrice,
      },
    ]
  };
  iyzipay.payment.create(request, function (err, result) {
    res.status(200).json({
      result,
      err,
    })
    console.log(result, err);
  });
})

/*  Saklı kart ile ödeme bitiş  */

/* Rezervasyon Ödemesinin iptali  */
app.post('/refundPayWithApi', (req, res) => {
  iyzipay.refund.create({
    locale: Iyzipay.LOCALE.TR,
    conversationId: '123456789',
    paymentTransactionId: req.body.paymentTransactionId,
    price: req.body.price,
    currency: Iyzipay.CURRENCY.TRY,
    ip: '85.34.78.112'
  }, function (err, result) {
    res.status(200).json({
      result,
      err
    })
  });


})
/*  Rezervasyon ödemesinin iptali  */

/* Misafirin ödemeyi onaylaması  */
app.post('/approvalPay', (req, res) => {
  let data = req.body
  iyzipay.approval.create({
    locale: Iyzipay.LOCALE.TR,
    conversationId: "123456789",
    paymentTransactionId: data.paymentTransactionId
  }, function (err, result) {
    res.status(200).json({
      result,
      err
    })
  });
})
/* Misafirin ödemeyi onaylaması bitiş  */



app.get("/get-all-data", (req, res) => {

  res.status(200).json({
    data: 'Her şey yolundaa !!!'
  })


});
//  <-- Rezervasyon oluşturulunca misafire giden email
app.post('/sendGuest', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'

    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.guestEmail,
    subject: 'Merhaba ' + req.body.guestName + ', rezervasyonun başarıyla oluşturuldu.',
    text: 'Merhaba ' + req.body.guestName + ', rezervasyonun başarıyla oluşturuldu. (24 saat içerisinde onaylanmassa rezervasyon iptal edilecektir.)  ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      İsteğiniz gönderildi
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
      Bu onaylanmış (en azından şimdilik) bir rezervasyon değildir. 24 saat
      içerisinde yanıt alacaksınız.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     ${req.body.houseType}
    </h2>
        <h3 style="color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
          ${req.body.houseStayType} , ${req.body.totalDays} günlük seyahat <br />
          Ev sahibi : ${req.body.hostName = undefined ? 'İsim yok' : req.body.hostName}
        </h3>
      </div>
      <img
        src="${req.body.hostProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.hostProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
    <h3 style="font-weight:500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Rezervasyon yaptığınız konuta güvenli bir gidiş sağlamadığınız sürece , sizden hiçbir ücret alınmayacaktır.
    </h3>
    <hr style="margin:15px 0px 15px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    color: #fff;
    background: #3E3E3B;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}"> Seyahatlerinize gidin</a>
     

  <a   style="
  display: block;
 width: 505px;
 text-decoration:none;
 text-align:center;
 margin-bottom: 5%;
 color: #fff;
 background: #f93b3b;
 border: none;
 padding: 10px;
 border-radius: 5px;
 cursor:pointer;
 font-size:22px;
" href="${req.body.cancelRezervation}"> İsteği iptal et</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })

})
// --> Rezervasyon oluşturulunca misafire giden email bitiş

// Aynı zamanda

//  <-- Rezervasyon oluşturulunca ev sahibine giden email
app.post('/sendHost', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.hostEmail,
    subject: 'Merhaba ' + req.body.hostName + ', misafirin var !.',
    text: 'Merhaba ' + req.body.hostName + ', 24 saat içerisinde onaylamassanız rezervasyon iptal edilecektir  ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      Misafiriniz var
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
    Rezervasyonu inceleyip kabul etmek için 24 saat süreniz bulunmakta aksi takdirde otomatik olarak iptal edilecektir.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam kazancınız: ${req.body.price}₺
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Misafiriniz: ${req.body.guestName}  <br />
          ${req.body.oldBoy} yetişkin ${req.body.middleBoy} çocuk ${req.body.smallBoy}  bebek
        </h3>
      </div>
      <img
        src="${req.body.guestProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.guestProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
    <h3 style="font-weight:500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Misafir evinize güvenli bir giriş yapmadığı sürece ücretiniz yatırılmayacaktır. Lütfen misafirinize keyifli bir seyahat zevki yaşatın.
    </h3>
    <hr style="margin:15px 0px 15px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #3E3E3B;
    color: #fff;

    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}"> Rezervasyonlarınıza gidin</a>
     

  <a   style="
  display: block;
 width: 505px;
 text-decoration:none;
 text-align:center;
 margin-bottom: 5%;
 color: #fff;
 background: #f93b3b;
 border: none;
 padding: 10px;
 border-radius: 5px;
 cursor:pointer;
 font-size:22px;
" href="${req.body.cancelRezervation}"> İsteği iptal et</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon oluşturulunca ev sahibine giden email bitiş

// <-- Rezervasyonu ev sahibi iptal edince ev sahibine giden email
app.post('/sendHostRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.hostEmail,
    subject: 'Merhaba ' + req.body.hostName + ', rezervasyonu iptal ettin :(',
    text: 'Merhaba ' + req.body.hostName + ', rezervasyonu iptal ettin :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      Misafiriniz buna üzülücek :/
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
    Rezervasyonu iptal ettiniz.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam kazancınız: 0₺
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Misafiriniz: ${req.body.guestName}  <br />
            Seyahat sizin tarafınızdan iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.guestProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.guestProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #3E3E3B;
    color: #fff;

    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}"> Rezervasyonlarınıza gidin</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon ev sahibi iptal edince ev sahibine giden email bitiş 

// <-- Rezervasyonu ev sahibi iptal edince misafire giden email 
app.post('/sendGuestRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.guestEmail,
    subject: 'Merhaba ' + req.body.guestName + ', rezervasyonunu ev sahibi iptal etti :(',
    text: 'Merhaba ' + req.body.guestName + ', rezervasyonunu ev sahibi iptal etti :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
    <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      Ev sahibi rezervasyonu iptal etti. Ama üzülmeyin rezervasyon ücreti eksiksiz bir şekilde iade edildi. :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
    Yeni bir rezervasyon oluşturmak ister misiniz? yakınlardaki rezervasyonları keşifedin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam iade edilen miktar: ${req.body.price}₺ <br> (Ücret iadesi bankanıza gönderildi <br/> size ulaştırması zaman alabilir)
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Ev sahibi: ${req.body.hostName}  <br />
            Ev sahibi tarafından iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.hostProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.hostProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="70"
        width="70"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Yakınlardaki konaklamaları keşfet</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon ev sahibi iptal edince misafire giden email bitiş 

// Misafir iptal edince

// <-- Rezervasyonu misafir iptal edince misafire giden email 
app.post('/sendHaveGuestRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.guestEmail,
    subject: 'Merhaba ' + req.body.guestName + ', rezervasyonu iptal ettiniz :(',
    text: 'Merhaba ' + req.body.guestName + ', rezervasyonu iptal ettiniz :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
    <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
       Rezervasyonu iptal ettiniz. Oluşturulan rezervasyon ücreti eksiksiz bir şekilde iade edildi. :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
    Yeni bir rezervasyon oluşturmak ister misiniz? yakınlardaki konaklamaları keşifedin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam iade edilen miktar: ${req.body.price}₺ <br> (Ücret iadesi bankanıza gönderildi <br/> size ulaştırması zaman alabilir)
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Ev sahibi: ${req.body.hostName}  <br />
            Sizin tarafınızdan iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.hostProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.hostProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="70"
        width="70"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Yakınlardaki konaklamaları keşfet</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon  misafir iptal edince misafire giden email bitiş  

// Ev sahibine giden email
app.post('/sendHaveHostRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.hostEmail,
    subject: 'Merhaba ' + req.body.hostName + ', rezervasyonu misafiriniz iptal etti :(',
    text: 'Merhaba ' + req.body.hostName + ', rezervasyonu misafiriniz iptal etti :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
   <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
       Rezervasyonunuz iptal edildi. Yeni misafirleriniz için konutunuzu tekrardan rezerve edebilirsiniz. :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
      Başka bir ev sahibinin evine misafir olmak ister misiniz? yakınlardaki konaklamaları keşfedin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam kazancınız: 0₺
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Misafir: ${req.body.guestName}  <br />
            Misafir tarafından iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.guestProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.guestProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="70"
        width="70"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Yakınlardaki konaklamaları keşfet</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// Ev sahibine giden email bitiş

// Onaylanmış rezervasyon iptal olunca misafire giden email
app.post('/sendHaveGuestAcceptRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.guestEmail,
    subject: 'Merhaba ' + req.body.guestName + ', rezervasyonu iptal ettiniz :(',
    text: 'Merhaba ' + req.body.guestName + ', rezervasyonu iptal ettiniz :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
    <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
       Rezervasyonu iptal ettiniz.
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
    Yeni bir rezervasyon oluşturmak ister misiniz? yakınlardaki konaklamaları keşifedin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    > Onaylanmış rezervasyonu iptal ettiğiniz için ${req.body.priceSubtract}₺ eksik iade edilmiştir. <br/>
     Toplam iade edilen miktar: ${req.body.price}₺ <br> (Ücret iadesi bankanıza gönderildi <br/> size ulaştırması zaman alabilir)
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Ev sahibi: ${req.body.hostName}  <br />
            Sizin tarafınızdan iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.hostProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.hostProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="70"
        width="70"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Yakınlardaki konaklamaları keşfet</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// Onaylanmış rezervasyon iptal olunca misafire giden email bitiş

// Ev sahibi
// Onaylanmış rezervasyon iptal olunca ev sahibine giden email
app.post('/sendHaveHostAcceptRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.hostEmail,
    subject: 'Merhaba ' + req.body.hostName + ', rezervasyonu misafiriniz iptal etti :(',
    text: 'Merhaba ' + req.body.hostName + ', rezervasyonu misafiriniz iptal etti :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
   <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
       Rezervasyonunuz iptal edildi. Yeni misafirleriniz için konutunuzu tekrardan rezerve edebilirsiniz. :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
      Başka bir ev sahibinin evine misafir olmak ister misiniz? yakınlardaki konaklamaları keşfedin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam kazancınız: ${req.body.priceSubtract}₺ ( Misafir onaylanan rezervasyonu iptal ettği için cezası hesabınıza aktarılmıştır :) )
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Misafir: ${req.body.guestName}  <br />
            Misafir tarafından iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.guestProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.guestProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="70"
        width="70"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Yakınlardaki konaklamaları keşfet</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// Onaylanmış rezervasyon iptal olunca ev sahibine giden email bitiş
// Ev sahibi

// Misafir iptal edince bitiş


// <-- Rezervasyon kabul edilince ev sahibine giden email 
app.post('/sendHostAccept', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.hostEmail,
    subject: 'Merhaba ' + req.body.hostName + ', rezervasyonu kabul ettiniz :)',
    text: 'Merhaba ' + req.body.hostName + ', rezervasyonu kabul ettiniz :) ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
   <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      Tebrikler rezervasyonu onayladınız :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
     Misafirinize eve giriş çıkış saatlerini belirtip , ayrıntılarıda mesaj atarak belirtin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam kazancınız: ${req.body.price}₺ <br> (konaklama ücreti misafir evinize güvenli <br> bir giriş sağladıktan sonra onayladığı <br> takdirde gönderilecektir)
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Misafir: ${req.body.guestName}  <br />
           ${req.body.oldBoy} yetişkin ${req.body.middleBoy} çocuk ${req.body.smallBoy}  bebek
        </h3>
      </div>
      <img
        src="${req.body.guestProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.guestProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
    <h3 style="font-weight:500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
    Misafir evinize güvenli bir giriş yapmadığı sürece ücretiniz yatırılmayacaktır. Lütfen misafirinize keyifli bir seyahat zevki yaşatın.
  </h3>
  <hr style="margin:15px 0px 15px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Rezervasyonlara gidin</a>
  
  <a   style="
  display: block;
 width: 505px;
 text-decoration:none;
 text-align:center;
 margin-bottom: 5%;
 background: #323339;
 color: #fff;
 border: none;
 padding: 10px;
 border-radius: 5px;
 cursor:pointer;
 font-size:22px;
" href="${req.body.goMessages}">Mesajlara git</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon kabul edilince ev sahibine giden email bitiş

// <-- Rezervasyon kabul edilince misafire giden email 
app.post('/sendGuestAccept', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.guestEmail,
    subject: 'Merhaba ' + req.body.guestName + ', ev sahibi rezervasyonu kabul etti :)',
    text: 'Merhaba ' + req.body.guestName + ', ev sahibi rezervasyonu kabul etti :) ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      ${req.body.county} bölgesine gidiyorsunuz :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
     Ev sahibinden eve giriş çıkış saatlerini öğrenip , bilmeniz gerekenleride mesaj atarak belirtmesini isteyin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam seyahat tutarı: ${req.body.price}₺ <br> (konaklama ücreti siz konuta güvenli <br> bir giriş sağladıktan sonra onayladığınız <br> takdirde gönderilecektir)
    </h2>
        <h2 style=" color:#323339!important;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , <br />
           Ev sahibi: ${req.body.hostName}  <br />
           ${req.body.houseType} , ${req.body.houseStayType} <br/>
           ${req.body.oldBoy} yetişkin ${req.body.middleBoy} çocuk ${req.body.smallBoy}  bebek <br/>
        </h2>
      </div>
      <img
        src="${req.body.hostProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.hostProfilePhoto}"
        style="object-fit: cover;margin-left:auto ;margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <h2 style=" color:#323339!important;">
    Adres: ${req.body.adres} <br/>
    <a   style="
    display: block;
   width: 505px;
   text-decoration:none;
   text-align:center;
   margin-top: 4%;
   background: #323339;
   color: #fff;
   border: none;
   padding: 10px;
   border-radius: 5px;
   cursor:pointer;
   font-size:22px;
  " href="https://www.google.com.tr/maps/dir/${req.body.adres}">Yol tarifi</a>
    </h2>
    <hr style="margin:20px 0px 20px 0px "/>
    <h3 style="font-weight:500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
    Konuta güvenli bir giriş sağladıktan sonra ev sahibine ücretini göndermeyi unutmayın!!
  </h3>
  <hr style="margin:15px 0px 15px 0px "/>
  <a   style="
  display: block;
  width: 505px;
  text-decoration:none;
  text-align:center;
  margin-bottom: 5%;
  background:#4d3664;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor:pointer;
  font-size:22px;
  " href="${req.body.goMoney}">Ev sahibine parayı gönder</a>  
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background:#36384C;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
   " href="${req.body.goComments}">Ev sahibini puanla</a>
   <a   style="
     display: block;
     width: 505px;
     text-decoration:none;
     text-align:center;
     margin-bottom: 5%;
     background: #f93b3b;
     color: #fff;
     border: none;
     padding: 10px;
     border-radius: 5px;
     cursor:pointer;
     font-size:22px;" 
     href="${req.body.goMyRezervations}">Seyahat detaylarına gidin</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon kabul edilince misafire giden email bitiş

export const path = "/api";
export const handler = app;