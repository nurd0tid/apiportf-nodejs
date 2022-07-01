import React from 'react'
import { Card, Table, Avatar  } from 'antd';
import Button from "antd-button-color";
import reqwest from 'reqwest';

const columns = [
// {
// 	title: 'Name',
// 	dataIndex: 'name',
// 	sorter: true,
// 	render: name => `${name.first} ${name.last}`,
// 	width: '20%',
// },
// {
// 	title: 'Gender',
// 	dataIndex: 'gender',
// 	filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
// 	width: '20%',
// },
  {
    title: "Photo",
    dataIndex: "photo",
    render: photo => (
      <div>
        <Avatar src={"http://localhost:5000/photo_siswa/" + photo } shape="square" size={64} />
      </div>
    ),
    align: "center",
    width: 50
  },
  {
    title: 'NIPD',
    dataIndex: 'nipd',
    align: "center",
    sorter: true,
  },
  {
    title: 'NISN',
    dataIndex: 'nisn',
    align: "center",
    sorter: true,
  },
  {
    title: 'Nama Siswa',
    dataIndex: 'nm_siswa',
    align: "center",
    sorter: true,
  },
  {
    title: 'Angkatan',
    align: "center",
    dataIndex: 'angkatan',
  },
];

class App extends React.Component {

  state = {
    results: [],
    pagination: {defaultPageSize: 5},
    loading: false,
  };

  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

 

  fetch = (params = {}) => {
    this.setState({ loading: true });
    reqwest({
      url: 'http://localhost:5000/api/siswa',
      method: 'get',
      data: {
        ...params,
      },
      type: 'json'
    }).then(data => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      // pagination.total = 200;
      this.setState({
        loading: false,
        results: data.data,
        pagination,
      });
    });
  };

	render() {
	return (
		<div>
			<Card type='inner' title='Keseluruhan Data Siswa'>
				<div style={{ marginBottom: 16 }}>
					<Button type="primary" size='small'>
						<a href="/app/apps/siswa-add">Add Siswa</a>
					</Button>
				</div>
				<Table
        columns={columns}
        dataSource={this.state.results}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
				bordered
     	 />
			</Card>
		</div>
	 );
  }
}

export default App
