import React from 'react';
import PageContainer from '../../layout/page-container';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <PageContainer>
      <p className="mt-5 display-3 text-primary text-center">404</p>
      <h1 className="my-5 text-primary text-center text-uppercase">
        Strona niedostępna
      </h1>
      <h3 className="text-primary text-center">
        Niestety podany przez Ciebie adres strony nie jest dostępny
      </h3>
      <div className="mt-5 text-center">
        <Link to="/" className="text-primary btn btn-primary text-light text-uppercase">
          Strona główna
        </Link>
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
