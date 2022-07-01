import React from 'react'
import { Card, Table  } from 'antd';
import Button from 'antd-button-color';
import reqwest from 'reqwest';

const columns = [
{
	title: 'Name',
	dataIndex: 'name',
	sorter: true,
	render: name => `${name.first} ${name.last}`,
	width: '20%',
},
{
	title: 'Gender',
	dataIndex: 'gender',
	filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
	width: '20%',
},
{
	title: 'Email',
	dataIndex: 'email',
},
];

class App extends React.Component {

  state = {
    data: [],
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
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then(data => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  };

	render() {
	return (
		<div>
			<Card type='inner' title='Keseluruhan Data Siswa'>
				<div style={{ marginBottom: 16 }}>
					<Button type="success" size='small'>
						<a href="/app/apps/siswa-add">Tambahkan Data Siswa</a>
					</Button>
				</div>
				<Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={this.state.data}
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
