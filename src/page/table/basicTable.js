import React, { Component } from 'react';
import { Card, Table } from 'antd';
// import axios from 'axios';
import axios from '../../axios';  //封装的方式
export default class BasicTable extends Component {
    state = {
        dataSource2: []
    }
    //  state = {
    //     y:4827
    // }
    // x = 1997;
    // {i}
    // {this.x}
    // {this.state.y}
    // const i = 1;
    /* 
    3种变量的定义方式
                    1.外部state
                    2.外部 直接赋值
                    3.内部const
     */
    componentDidMount() {
        const dataSource = [
            {
                id: '0',
                userName: 'qiu',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '秦皇岛海港区',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'Hang',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '秦皇岛海港区',
                time: '09:00'
            }
        ]
        // 这步的作用是存储DataSource
        this.setState({
            dataSource
        })
        this.request();
    }
    request = () => {
      /*   axios.get('/api/tableList')
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let result = res.data.result;
                    // result是一个数组
                    // this.setState(()=>{
                    //     return {
                    //         dataSource2:result
                    //     }
                    // })
                    this.setState(() => ({ dataSource2: [...result] }))
                    // for (const key in result) {
                    //    console.log(result[key]);
                    // }
                    console.log(result);
                    console.log(typeof res.status);
                }
            })
            .catch(() => { alert('error') }) 
            
            使用直接使用的方式
            */
           /* 
           使用封装的方式

            */
           axios.ajax({
               url:'/api/tableList',
               data:{
                   params:{
                    //    tableList?page=1
                       page:1
                   },
                //    isShowLoading:false
               }
           }).then((res)=>{
                if(res.code===0){
                    this.setState(() => ({ dataSource2: [...res.result] }))
                }
           })
    }
    render() {
        // 变量定义在外面和定义在里面其实一样,需要引用的方式不一样
        const columns = [
            {
                // title展示表头需要展示的内容
                title: 'id',
                // 数据源返回的字段
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            }, {
                title: '性别',
                dataIndex: 'sex',
                render(sex){
                    return sex===1?'男':'女'
                }
            }, {
                title: '状态',
                dataIndex: 'state',
                render(state){
                    let config ={
                        '1':'这是1',
                        '2':'zheshi2',
                        '3':'这是3',
                        '4':'这是4',
                        '5':'这是5'
                    }
                    return config[state];
                }
            }, {
                title: '爱好',
                dataIndex: 'interest'
            }, {
                title: '生日',
                dataIndex: 'birthday'
            }, {
                title: '地址',
                dataIndex: 'address'
            }, {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource}
                        columns={columns}
                    >
                    </Table>
                </Card>
                <Card title="动态数据渲染表格">
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns}
                    >
                    </Table>
                </Card>

                <Card title="data">

                </Card>
            </div>
        )
    }
}