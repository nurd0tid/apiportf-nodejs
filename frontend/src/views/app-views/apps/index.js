import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/jurusan`} component={lazy(() => import(`./jurusan`))} />
      <Route path={`${match.url}/identitas`} component={lazy(() => import(`./identitas`))} />
      <Route path={`${match.url}/jurusan-add`} component={lazy(() => import(`./jurusan/add`))} />
      <Route path={`${match.url}/jurusan-edit/:id`} component={lazy(() => import(`./jurusan/edit`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/jurusan`} />
    </Switch>
  </Suspense>
);

export default Apps;