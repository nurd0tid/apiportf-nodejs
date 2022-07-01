import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/identitas`} component={lazy(() => import(`./master/identitas`))} />

       {/* Function view master Kurikulum. */}
      <Route path={`${match.url}/kurikulum`} component={lazy(() => import(`./master/kurikulum`))} />
      <Route path={`${match.url}/kurikulum-add`} component={lazy(() => import(`./master/kurikulum/add`))} />
      <Route path={`${match.url}/kurikulum-edit/:id`} component={lazy(() => import(`./master/kurikulum/edit`))} />

       {/* Function view master Tahun Akademik. */}
      <Route path={`${match.url}/tahun-akademik`} component={lazy(() => import(`./master/akademik`))} />
      <Route path={`${match.url}/tahun-akademik-add`} component={lazy(() => import(`./master/akademik/add`))} />
      <Route path={`${match.url}/tahun-akademik-edit/:id`} component={lazy(() => import(`./master/akademik/edit`))} />

       {/* Function view master Gedung. */}
      <Route path={`${match.url}/gedung`} component={lazy(() => import(`./master/gedung`))} />
      <Route path={`${match.url}/gedung-add`} component={lazy(() => import(`./master/gedung/add`))} />
      <Route path={`${match.url}/gedung-edit/:id`} component={lazy(() => import(`./master/gedung/edit`))} />

       {/* Function view master Ruangan. */}
      <Route path={`${match.url}/ruangan`} component={lazy(() => import(`./master/ruangan`))} />
      <Route path={`${match.url}/ruangan-add`} component={lazy(() => import(`./master/ruangan/add`))} />
      <Route path={`${match.url}/ruangan-edit/:id`} component={lazy(() => import(`./master/ruangan/edit`))} />

      {/* Function view master Golongan. */}
      <Route path={`${match.url}/golongan`} component={lazy(() => import(`./master/golongan`))} />
      <Route path={`${match.url}/golongan-add`} component={lazy(() => import(`./master/golongan/add`))} />
      <Route path={`${match.url}/golongan-edit/:id`} component={lazy(() => import(`./master/golongan/edit`))} />

       {/* Function view master PTK. */}
      <Route path={`${match.url}/ptk`} component={lazy(() => import(`./master/ptk`))} />
      <Route path={`${match.url}/ptk-add`} component={lazy(() => import(`./master/ptk/add`))} />
      <Route path={`${match.url}/ptk-edit/:id`} component={lazy(() => import(`./master/ptk/edit`))} />

       {/* Function view master Jurusan. */}
      <Route path={`${match.url}/jurusan`} component={lazy(() => import(`./master/jurusan`))} />
      <Route path={`${match.url}/jurusan-add`} component={lazy(() => import(`./master/jurusan/add`))} />
      <Route path={`${match.url}/jurusan-edit/:id`} component={lazy(() => import(`./master/jurusan/edit`))} />
      <Route path={`${match.url}/jurusan-detail/:id`} component={lazy(() => import(`./master/jurusan/detail`))} />

      {/* Function view master Kelas. */}
      <Route path={`${match.url}/kelas`} component={lazy(() => import(`./master/kelas`))} />
      <Route path={`${match.url}/kelas-add`} component={lazy(() => import(`./master/kelas/add`))} />
      <Route path={`${match.url}/kelas-edit/:id`} component={lazy(() => import(`./master/kelas/edit`))} />

       {/* Function view master Kepegawaian. */}
      <Route path={`${match.url}/kepegawaian`} component={lazy(() => import(`./master/kepegawaian`))} />
      <Route path={`${match.url}/kepegawaian-add`} component={lazy(() => import(`./master/kepegawaian/add`))} />
      <Route path={`${match.url}/kepegawaian-edit/:id`} component={lazy(() => import(`./master/kepegawaian/edit`))} />


      {/* Function view pengguna Siswa. */}
      <Route path={`${match.url}/siswa`} component={lazy(() => import(`./pengguna/siswa`))} />
      <Route path={`${match.url}/siswa-add`} component={lazy(() => import(`./pengguna/siswa/add`))} />
      <Route path={`${match.url}/siswa-detail/:id`} component={lazy(() => import(`./pengguna/siswa/detail`))} />
      <Route path={`${match.url}/siswa-edit/:id`} component={lazy(() => import(`./pengguna/siswa/edit`))} />

      {/* Function view pengguna Guru. */}
      <Route path={`${match.url}/guru`} component={lazy(() => import(`./pengguna/guru`))} />
      <Route path={`${match.url}/guru-add`} component={lazy(() => import(`./pengguna/guru/add`))} />
      <Route path={`${match.url}/guru-detail/:id`} component={lazy(() => import(`./pengguna/guru/detail`))} />
      <Route path={`${match.url}/guru-edit/:id`} component={lazy(() => import(`./pengguna/guru/edit`))} />

      {/* Function view Akademik Kelompok Mapel. */}
      <Route path={`${match.url}/kmapel`} component={lazy(() => import(`./akademik/kelompok_mapel`))} />
      <Route path={`${match.url}/kmapel-add`} component={lazy(() => import(`./akademik/kelompok_mapel/add`))} />
      <Route path={`${match.url}/kmapel-edit/:id`} component={lazy(() => import(`./akademik/kelompok_mapel/edit`))} />

      {/* Function view Akademik Mapel. */}
      <Route path={`${match.url}/mapel`} component={lazy(() => import(`./akademik/mapel`))} />
      <Route path={`${match.url}/mapel-add`} component={lazy(() => import(`./akademik/mapel/add`))} />
      <Route path={`${match.url}/mapel-edit/:id`} component={lazy(() => import(`./akademik/mapel/edit`))} />
      <Route path={`${match.url}/mapel-detail/:id`} component={lazy(() => import(`./akademik/mapel/detail`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/identitas`} />
    </Switch>
  </Suspense>
);

export default Apps;