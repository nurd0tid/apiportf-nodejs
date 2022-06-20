import { 
  DashboardOutlined,
  UserSwitchOutlined,
	AppstoreOutlined,
	BookOutlined,
	ProfileOutlined,
	FileProtectOutlined,
	CalendarOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashboard = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]


const apps = [
  {
		key: 'apps-key',
		path: `${APP_PREFIX_PATH}/apps`,
		title: 'Apps',
		breadcrumb: false,
		submenu: [
      {
				key: 'apps-child-key',
				path: '',
				title: 'Data Master',
				icon: AppstoreOutlined,
				breadcrumb: false,
				submenu: [
					{
						key: 'apps-child-key-1',
						path: `${APP_PREFIX_PATH}/apps/identitas`,
						title: 'Data Identitas Sekolah',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-child-key-2',
						path: `${APP_PREFIX_PATH}/apps/kurikulum`,
						title: 'Data Kurikulum',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-child-key-3',
						path: `${APP_PREFIX_PATH}/apps/tahun-akademik`,
						title: 'Data Tahun Akademik',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-child-key-4',
						path: `${APP_PREFIX_PATH}/apps/gedung`,
						title: 'Data Gedung',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-child-key-5',
						path: `${APP_PREFIX_PATH}/apps/ruangan`,
						title: 'Data Ruangan',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-child-key-6',
						path: `${APP_PREFIX_PATH}/apps/golongan`,
						title: 'Data Golongan',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-child-key-7',
						path: `${APP_PREFIX_PATH}/apps/ptk`,
						title: 'Data Jenis PTK',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-child-key-8',
						path: `${APP_PREFIX_PATH}/apps/jurusan`,
						title: 'Data Jurusan',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-child-key-9',
						path: `${APP_PREFIX_PATH}/apps/kelas`,
						title: 'Data Kelas',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-child-key-10',
						path: `${APP_PREFIX_PATH}/apps/kepegawaian`,
						title: 'Data Status Kepegawaian',
						breadcrumb: true,
						submenu: []
					},
				]
			},
			{
				key: 'apps-users-key',
				path: '',
				title: 'Data Pengguna',
				icon: UserSwitchOutlined,
				breadcrumb: false,
				submenu: [
					{
						key: 'apps-users-key-1',
						path: `${APP_PREFIX_PATH}/apps/siswa`,
						title: 'Data Siswa',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-users-key-2',
						path: `${APP_PREFIX_PATH}/apps/guru`,
						title: 'Data Guru',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-users-key-3',
						path: `${APP_PREFIX_PATH}/apps/kepsek`,
						title: 'Data Kepala Sekolah',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-users-key-4',
						path: `${APP_PREFIX_PATH}/apps/admin`,
						title: 'Data Administrator',
						breadcrumb: true,
						submenu: []
					},
				]
			},
			{
				key: 'apps-akademik-key',
				path: '',
				title: 'Data Akademik',
				icon: BookOutlined,
				breadcrumb: false,
				submenu: [
					{
						key: 'apps-akademik-key-1',
						path: `${APP_PREFIX_PATH}/apps/kelompok-mapel`,
						title: 'Data Kelompok Mapel',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-akademik-key-2',
						path: `${APP_PREFIX_PATH}/apps/mapel`,
						title: 'Data Matapelajaran',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-akademik-key-3',
						path: `${APP_PREFIX_PATH}/apps/jadwal-pelajaran`,
						title: 'Data Jadwal Pelajaran',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-akademik-key-4',
						path: `${APP_PREFIX_PATH}/apps/bahan-tugas`,
						title: 'Data Bahan & Tugas',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-akademik-key-5',
						path: `${APP_PREFIX_PATH}/apps/komp-dasar`,
						title: 'Data Kompetensi Dasar',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-akademik-key-6',
						path: `${APP_PREFIX_PATH}/apps/nilai-diri`,
						title: 'Data Penilaian Diri',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-akademik-key-7',
						path: `${APP_PREFIX_PATH}/apps/ren-nilai`,
						title: 'Data Rentang Nilai',
						breadcrumb: true,
						submenu: []
					},
				]
			},
			{
				key: 'apps-absensi-key',
				path: '',
				title: 'Data Absensi',
				icon: CalendarOutlined,
				breadcrumb: false,
				submenu: [
					{
						key: 'apps-absensi-key-1',
						path: `${APP_PREFIX_PATH}/apps/absen-guru`,
						title: 'Data Absensi Guru',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-absensi-key-2',
						path: `${APP_PREFIX_PATH}/apps/absen-siswa`,
						title: 'Data Absensi Siswa',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-absensi-key-3',
						path: `${APP_PREFIX_PATH}/apps/rekap-absensi`,
						title: 'Rekap Absensi',
						breadcrumb: true,
						submenu: []
					},
				]
			},
			{
				key: 'apps-laporan-key',
				path: '',
				title: 'Laporan Nilai Siswa',
				icon: FileProtectOutlined,
				breadcrumb: false,
				submenu: [
					{
						key: 'apps-laporan-key-1',
						path: `${APP_PREFIX_PATH}/apps/nilai-uts`,
						title: 'Data Nilai UTS',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-laporan-key-2',
						path: `${APP_PREFIX_PATH}/apps/nilai-raport`,
						title: 'Data Nilai Raport',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-laporan-key-3',
						path: `${APP_PREFIX_PATH}/apps/cap-belajr`,
						title: 'Data Capaian Belajar',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-laporan-key-4',
						path: `${APP_PREFIX_PATH}/apps/extrakulikuler`,
						title: 'Data Extrakulikuler',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-laporan-key-5',
						path: `${APP_PREFIX_PATH}/apps/nilai-presentasi`,
						title: 'Data Presentasi',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-laporan-key-6',
						path: `${APP_PREFIX_PATH}/apps/cetak-uts`,
						title: 'Cetak Raport UTS',
						breadcrumb: true,
						submenu: []
					},
					{
						key: 'apps-laporan-key-7',
						path: `${APP_PREFIX_PATH}/apps/cetak-raport`,
						title: 'Cetak Raport',
						breadcrumb: true,
						submenu: []
					},
				]
			},
			{
			key: 'apps-jurnal-key',
			path: '',
			title: 'Jurnal KBM',
			icon: ProfileOutlined,
			breadcrumb: false,
			submenu: []
			},
		]
	}
]


const navigationConfig = [
  ...dashboard,
  ...apps,
]

export default navigationConfig;
