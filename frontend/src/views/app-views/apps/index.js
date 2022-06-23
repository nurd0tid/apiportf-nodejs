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
      <Route path={`${match.url}/gedung`} component={lazy(() => import(`./gedung`))} />
      <Route path={`${match.url}/gedung-add`} component={lazy(() => import(`./gedung/add`))} />
      <Route path={`${match.url}/gedung-edit/:id`} component={lazy(() => import(`./gedung/edit`))} />
      <Route path={`${match.url}/ruangan`} component={lazy(() => import(`./ruangan`))} />
      <Route path={`${match.url}/ruangan-add`} component={lazy(() => import(`./ruangan/add`))} />
      <Route path={`${match.url}/ruangan-edit/:id`} component={lazy(() => import(`./ruangan/edit`))} />
      <Route path={`${match.url}/golongan`} component={lazy(() => import(`./golongan`))} />
      <Route path={`${match.url}/golongan-add`} component={lazy(() => import(`./golongan/add`))} />
      <Route path={`${match.url}/golongan-edit/:id`} component={lazy(() => import(`./golongan/edit`))} />
      <Route path={`${match.url}/ptk`} component={lazy(() => import(`./ptk`))} />
      <Route path={`${match.url}/ptk-add`} component={lazy(() => import(`./ptk/add`))} />
      <Route path={`${match.url}/ptk-edit/:id`} component={lazy(() => import(`./ptk/edit`))} />
      <Route path={`${match.url}/jurusan`} component={lazy(() => import(`./jurusan`))} />
      <Route path={`${match.url}/jurusan-add`} component={lazy(() => import(`./jurusan/add`))} />
      <Route path={`${match.url}/jurusan-detail/:id`} component={lazy(() => import(`./jurusan/detail`))} />
      <Route path={`${match.url}/kepegawaian`} component={lazy(() => import(`./kepegawaian`))} />
      <Route path={`${match.url}/kepegawaian-add`} component={lazy(() => import(`./kepegawaian/add`))} />
      <Route path={`${match.url}/kepegawaian-edit/:id`} component={lazy(() => import(`./kepegawaian/edit`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/identitas`} />
    </Switch>
  </Suspense>
);

export default Apps;