import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useState } from 'react';
import './Login.css';
import firebase from '../../Firebase';
import 'firebase/auth';

const Login: React.FC = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Giriş Yap</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid
          className='ion-text-center'
          style={{
            height: '100%'
          }}>
          <IonRow
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}>
            <IonCol className='ion-align-self-center' size='12'>
              <div className='ion-text-center'>
                <h3>Giriş Yap</h3>
              </div>
              <div>
                <IonItem>
                  <IonInput name='name' type='text' placeholder='Name' required />
                </IonItem>
                <IonItem>
                  <IonInput
                    name='email'
                    type='email'
                    placeholder='your@email.com'
                    onIonChange={(e) => setEmail(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem>
                  <IonInput
                    name='password'
                    type='password'
                    placeholder='Password'
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    required
                  />
                </IonItem>
              </div>
              <div>
                <IonButton
                  type='submit'
                  expand='block'
                  className='ion-margin-top'
                  onClick={handleSignUp}>
                  Üye Ol
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
