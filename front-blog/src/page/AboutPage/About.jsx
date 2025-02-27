import React from 'react';
import { AboutWrapp, AvatarBox, BiographyBox, BiographyDescription, InfoBox, PartfolioAbout, WrappProfile } from './ModuleAboutStules';

export default function About() {
  return (
    <AboutWrapp>
      <WrappProfile>
      <AvatarBox>
        <img src="/images/no-img.jpeg" alt="Avatar" />
      </AvatarBox>
      <InfoBox>
      <h2>Иван Иванов</h2>
      <h3><strong>Дата рождения:</strong> 23.12.2025</h3>
      <h3><strong>Место рождения:</strong> Киев</h3>
      <h3><strong>Профессия:</strong> Веб разработчик</h3>
      <h3><strong>Увлечения:</strong> Программирование, путешествия, музыка</h3>
      </InfoBox>
      </WrappProfile>
      <h3>Галерея</h3>
      <PartfolioAbout>
      <img src="/images/no-img.jpeg" alt="pfoto-1" />
      <img src="/images/no-img.jpeg" alt="pfoto-2" />
      <img src="/images/no-img.jpeg" alt="pfoto-3" />
      <img src="/images/no-img.jpeg" alt="pfoto-n" />
      </PartfolioAbout>
      <BiographyBox>
        <h3>Биография</h3>
        <BiographyDescription>
          <h3>Какой то текст</h3>
        </BiographyDescription>
      </BiographyBox>
    </AboutWrapp>
  );
};
