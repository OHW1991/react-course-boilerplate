import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database=firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider,database as default};

/*database.ref('expenses').on('child_removed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
});

database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
});

database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
});*/

/*database.ref('expenses')
    .once('value')
        .then((snapshot)=>{
            const expenses=[];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            console.log(expenses);
        });*/

/*database.ref('expenses').on('value',(snapshot)=>{
    const expenses=[];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    console.log(expenses);
});*/

/*database.ref('expenses').push({
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
});

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4,'days').valueOf()
});

database.ref('expenses').push({
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4,'days').valueOf()
});*/

/*database.ref('notes/-LBfKllkr1a5ZvTkb3Nd').remove();*/

/*database.ref('notes').push({
    title: 'to do',
    body: 'build app'
});*/

/*const firebaseNotes={
    notes:{
        vsgdgcdg:{
            title: 'first note',
            body: 'this is my note'
        },
        sdfgvds:{
            title: 'first note',
            body: 'this is my note'
        }
    }
};

const notes=[{
    id: '12',
    title: 'first note',
    body: 'this is my note'
},{
    id: '761ase',
    title: 'another note',
    body: 'this is my note'
}];*/

/*database.ref('notes').set(notes);*/

/*database.ref().on('value',(snapshot)=>{
    const val=snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});*/

/*const onValueChange=database.ref().on('value',(snapshot)=>{
    console.log(snapshot.val());
},(error)=>{
    console.log('error:',error);
});

setTimeout(()=>{
    database.ref('age').set(27);
},3500);
setTimeout(()=>{
    database.ref().off('value',onValueChange);
},7000);
setTimeout(()=>{
    database.ref('age').set(28);
},10500);*/

/*database.ref()
    .once('value')
        .then((snapshot)=>{
            const val=snapshot.val();
            console.log(val);
        }).catch((error)=>{
            console.log('fetching error');
        });*/

/*database.ref().set({
    name: 'OHW',
    age: 27,
    stressLevel: 10,
    job:{
        title: 'student',
        company: 'Technion'
    },
    location:{
        city: 'Kiryat Atta',
        country: 'Israel'
    }
}).then(()=>{
    console.log('Data is saved');
}).catch((error)=>{
    console.log('Failed:',error);
});

database.ref().update({
    stressLevel: 9,
    'job/title': 'undergrad',
    'location/city': 'Haifa'
});*/

/*database.ref()
    .remove()
        .then(()=>{
            console.log('removed');
        }).catch((error)=>{
            console.log('Failed:',error);
        });*/