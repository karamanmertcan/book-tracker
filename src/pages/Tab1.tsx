import {
  IonContent,
  IonHeader,
  IonPage,
  IonItemDivider,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import firebase from '../Firebase';
import './Tab1.css';
import { useEffect, useState } from 'react';

const Tab1: React.FC = () => {
  const [page, setPage] = useState<any>([]);
  const getPagesFromFb = () => {
    try {
      firebase
        .firestore()
        .collection('users')
        .doc('Nvr3Z88ISxg1nfYrHLOo')
        .collection('books')
        .onSnapshot((querySnapshot: any) => {
          querySnapshot.forEach((doc: any) => {
            console.log('firebase dogru id => ', doc.data());
            Object.keys(doc.data()).forEach((key) => {
              page.push({ [key]: doc.data()[key] });
            });
            let userPage = page
              .filter((item) => item.page)
              .reduce((acc, curr) => acc + curr.page, 0);
            setPage(userPage);
          });
        });

      console.log('firebase dogru id => ');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPagesFromFb();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hesabım</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#3498db',
              height: '40vh',
              width: '100%',
              borderRadius: '30px 30px 0px 0px',
              overflow: 'hidden'
            }}>
            <IonCol
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <div className='userAvatar'>
                <div className='user__text'>MK</div>
              </div>
              <div className='ion-text-center ion-margin-top user__text'>Mertcan Karaman</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol
              className='ion-align-items-center'
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <div className='ion-text-center'>
                <p
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}>
                  Okuğum Sayfa Sayısı
                </p>
                <p style={{ fontSize: '1.5rem' }}>{page}</p>
              </div>
            </IonCol>
            <IonCol
              className='ion-align-items-center'
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <div className='ion-text-center'>
                <p
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}>
                  Okuğum Kitap Sayısı
                </p>
                <p style={{ fontSize: '1.5rem' }}>0</p>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol
              className='ion-align-items-center'
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <div className='ion-text-center'>
                <p
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}>
                  Şuanda Okuduğum Kitap
                </p>
                <p style={{ fontSize: '1.5rem' }}>Zengin Baba Yoksul Baba</p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
