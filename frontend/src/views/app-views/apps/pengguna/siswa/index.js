import React from 'react'
import { Card, Table, Avatar, Divider, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import Button from "antd-button-color";
import reqwest from 'reqwest';
import { 
  EditTwoTone,
  SearchOutlined,
  // EditOutlined,
  EyeTwoTone
} from '@ant-design/icons';

class App extends React.Component {

  state = {
    results: [],
    pagination: {defaultPageSize: 5},
    loading: false,
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
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
      pagination.total = data.totalCount;
      this.setState({
        loading: false,
        results: data.data,
        pagination,
      });
    });
  };

  render() {
    const columns = [
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
      },
      {
        title: 'Nama Siswa',
        dataIndex: 'nm_siswa',
        align: "center",
      },
      {
        title: 'Angkatan',
        align: "center",
        dataIndex: 'angkatan',
        ...this.getColumnSearchProps('angkatan'),
      },
      {
        title: 'Jurusan',
        align: "center",
        dataIndex: 'nm_jurusan',
      },
      {
        title: 'Kelas',
        align: "center",
        dataIndex: 'nm_kelas',
        filters: [
          { text: 'Kelas X RPL 1', value: 'Kelas X RPL 1' },
          { text: 'Kelas X RPL 2', value: 'Kelas X RPL 2' },
          { text: 'Kelas XI RPL 1', value: 'Kelas XI RPL 1' },
          { text: 'Kelas XI RPL 2', value: 'Kelas XI RPL 2' },
          { text: 'Kelas X MM 1', value: 'Kelas X MM 1' },
          { text: 'Kelas X MM 2', value: 'Kelas X MM 2' },
          { text: 'Kelas XI MM 1', value: 'Kelas XI MM 1' },
          { text: 'Kelas XI MM 2', value: 'Kelas XI MM 2' },
        ],
        onFilter: (value, record) => record.nm_kelas.includes(value),
      },
      {
      title: "Action",
      key: "nipd",
      dataIndex: "nipd",
      render: id => (
        <span>
          <a href={`/app/apps/siswa-detail/${id}`} type='button'><EyeTwoTone twoToneColor="#52c41a" /></a>
          <Divider type="vertical" />
          <a href={`/app/apps/siswa-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          {/* <a href="/app/apps/siswa" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a> */}
        </span>
      ),
      align: "center"
      }
    ];
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
