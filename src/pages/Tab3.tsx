import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonModal,
  IonPage,
  IonRippleEffect,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { add, close } from 'ionicons/icons';
import { useState } from 'react';
import BookCard from '../components/BookCard/BookCard';
import './Tab3.css';

interface Props {
  router: HTMLIonRouterOutletElement | null;
}

const Tab3: React.FC<Props> = ({ router }) => {
  const [showModal, setShowModal] = useState(false);
  const [bookName, setBookName] = useState('');
  const [pageNumber, setPageNumber] = useState<number>();
  const [imageUrl, setImageUrl] = useState('');

  const handleFabButton = () => {
    setShowModal(true);
  };

  const handleCloseFab = () => {
    setShowModal(false);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kitaplarım</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol
              size='6'
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <BookCard />
            </IonCol>
            <IonCol
              size='6'
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <BookCard />
            </IonCol>
            <IonCol
              size='6'
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <BookCard />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton onClick={handleFabButton}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonModal
          isOpen={showModal}
          swipeToClose={true}
          presentingElement={router || undefined}
          onDidDismiss={() => setShowModal(false)}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <IonGrid>
              <IonRow>
                <IonIcon icon={close} size='large' onClick={handleCloseFab} />
                <h3>Kapat</h3>
              </IonRow>
              <h3 className='ion-text-center'>Kitap Ekleme Ekranı</h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                <IonRow
                  style={{
                    borderRadius: '30px',
                    height: '20vh'
                  }}>
                  <IonCol
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <IonInput
                      style={{
                        border: '1px solid black',
                        overflow: 'hidden'
                      }}
                      className='ion-margin-top'
                      value={bookName}
                      placeholder='Kitap İsmi Girin'
                      onIonChange={(e) => setBookName(e.detail.value!)}
                    />
                    <IonInput
                      style={{
                        border: '1px solid black',
                        overflow: 'hidden'
                      }}
                      type='number'
                      className='ion-margin-top'
                      value={pageNumber}
                      placeholder='Okuduğunuz Sayfa Sayısını Girin'
                      onIonChange={(e) => setPageNumber(parseInt(e.detail.value!, 10))}
                    />
                    <IonInput
                      style={{
                        border: '1px solid black',
                        overflow: 'hidden'
                      }}
                      type='number'
                      className='ion-margin-top'
                      value={imageUrl}
                      placeholder='Resim urlsi girin'
                      onIonChange={(e) => setImageUrl(e.detail.value!)}
                    />
                  </IonCol>
                </IonRow>
              </div>
              <IonRow
                style={{
                  marginTop: '50px'
                }}>
                <IonCol>
                  <IonButton expand='full'>Kitap Ekle</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
