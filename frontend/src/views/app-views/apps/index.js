import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/identitas`} component={lazy(() => import(`./identitas`))} />
      <Route path={`${match.url}/kurikulum`} component={lazy(() => import(`./kurikulum`))} />
      <Route path={`${match.url}/kurikulum-add`} component={lazy(() => import(`./kurikulum/add`))} />
      <Route path={`${match.url}/kurikulum-edit/:id`} component={lazy(() => import(`./kurikulum/edit`))} />
      <Route path={`${match.url}/tahun-akademik`} component={lazy(() => import(`./akademik`))} />
      <Route path={`${match.url}/tahun-akademik-add`} component={lazy(() => import(`./akademik/add`))} />
      <Route path={`${match.url}/tahun-akademik-edit/:id`} component={lazy(() => import(`./akademik/edit`))} />
      <Route path={`${match.url}/jurusan`} component={lazy(() => import(`./jurusan`))} />
      <Route path={`${match.url}/jurusan-add`} component={lazy(() => import(`./jurusan/add`))} />
      <Route path={`${match.url}/jurusan-edit/:id`} component={lazy(() => import(`./jurusan/edit`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/identitas`} />
    </Switch>
  </Suspense>
);

export default Apps;