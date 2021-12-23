import { IonCard, IonCardHeader, IonCardTitle, IonPage, IonRippleEffect } from '@ionic/react';
import * as React from 'react';

const BookCard: React.FC = (props) => {
  return (
    <IonCard
      className='ion-activatable ripple-parent'
      onClick={() => {
        console.log('deneme');
      }}>
      <img
        src='https://i.dr.com.tr/cache/600x600-0/originals/0001758255001-1.jpg'
        alt='zengin baba yoksul baba'
      />
      <IonCardHeader>
        <IonCardTitle>zengin baba yoksul baba</IonCardTitle>
        <IonRippleEffect></IonRippleEffect>
      </IonCardHeader>
    </IonCard>
  );
};

export default BookCard;
